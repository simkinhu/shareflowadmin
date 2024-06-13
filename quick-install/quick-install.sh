#!/bin/bash
set -e

## 克隆仓库到本地
echo "clone repository..."
git clone https://github.com/simkinhu/shareflowadmin.git shareflowadmin

# 设置目录名
dir_name="list"
# 检查目录是否存在
if [ -d "$dir_name" ]; then
    # 目录存在，删除其下的所有文件
    rm -rf "${dir_name:?}"/*
    echo "已删除 '$dir_name' 下的所有文件。"
else
    # 目录不存在，创建目录并设置权限
    mkdir "$dir_name"
    chmod -R 755 "$dir_name"
    echo "已创建目录 '$dir_name' 并设置权限为 755。"
fi
cd shareflowadmin
mv dist/* ../list
cd ..
chmod -R 755 list

yaml_file="./docker-compose.yml"

# 要检查和添加的映射
check_volume="./list:/app/resource/public/list"

# 检查文件是否存在
if [ ! -f "$yaml_file" ]; then
    echo "文件不存在: $yaml_file"
    exit 1
fi

# 检查是否已经存在该映射
if grep -q "$check_volume" "$yaml_file"; then
    echo "映射 '$check_volume' 已存在，无需添加。"
else
    # 定义要添加的新映射
    new_volume="      - ./list:/app/resource/public/list"

    # 使用 awk 更新 docker-compose.yml
    awk -v new_volume="$new_volume" '
    BEGIN {
        in_chatgpt_share_server = 0;
        in_volumes = 0;
    }
    /chatgpt-share-server:/ {
        in_chatgpt_share_server = 1;
    }
    in_chatgpt_share_server && /volumes:/ {
        in_volumes = 1;
        print;
        next;
    }
    in_volumes && /^[ ]+- / {
        print new_volume;
        in_volumes = 0;
        in_chatgpt_share_server = 0;
    }
    { print }
    ' docker-compose.yml > tmp_file && mv tmp_file docker-compose.yml

    # 添加成功后运行 Docker 命令
    if [ $? -eq 0 ]; then
        echo "映射 '$new_volume' 添加成功"
    else
        echo "映射存在"
    fi
fi

# 提示用户输入后端主域名，并进行格式验证
while true; do
    read -p "请输入后端绑定使用的主域名（格式http(s)://xx.xx.xx，不带/）: " backend_domain
    if [[ "$backend_domain" =~ ^https?://[a-zA-Z0-9.-]+$ ]]; then
        break
    else
        echo "输入的后端主域名格式不正确，请重新输入。"
    fi
done

# 更新 config.json 中的 VITE_API_BASE_URL
config_file="./list/config.json"
if [ -f "$config_file" ]; then
    sed -i "s|\"VITE_API_BASE_URL\": \".*\"|\"VITE_API_BASE_URL\": \"$backend_domain\"|" "$config_file"
    echo "已更新 前端接口地址为中的 VITE_API_BASE_URL 为 $backend_domain"
else
    echo "config.json 文件不存在，无法更新 VITE_API_BASE_URL。"
    exit 1
fi

# 提示用户输入哈希值
read -p "请输入哈希值: " hash_value

# 在 docker-compose.yml 文件最后面添加内容
cat <<EOF >> docker-compose.yml

shareflowadmin:
    image: simkinhu/shareflowadmin:latest
    restart: always
    ports:
      - "8311:8311"
    environment:
      # 设置docker内部系统运行的时区，上海时间
      TZ: Asia/Shanghai
      # 数据库主机，默认不要更改
      MYSQL_HOST: mysql
      # 数据库端口，默认不要更改
      MYSQL_PORT: 3306
      # 数据库名称，默认不要更改
      MYSQL_DB: cool
      # 数据库账户，默认不要更改
      MYSQL_DBUSER: root
      # 数据库密码，默认不要更改
      MYSQL_DBPWD: 123456
      # redis主机，默认不要更改
      SHARE_REDIS_HOST: redis
      # redis端口，默认不要更改
      SHARE_REDIS_PORT: 6379
      # redis数据库，默认不要更改
      SHARE_REDIS_DB: 5
      # redis密码，默认为空
      SHARE_REDIS_PWD:
      # 系统授权KEY，生成规则：绑定的哈希值sha256，不可共享，一台机器使用！
      SHARE_AUTHKEY: $hash_value
      # 前端token名称，可随意自定义，尽量2-8位纯字母
      SHARE_TOKEN_NAME: sharetoken
      # 前端Token过期时间：单位-秒
      SHARE_TOKEN_TIME: 2592000
      # 默认不要更改，这个是share后台地址，批量添加账户需要
      SHARE_ADMIN_URL: http://chatgpt-share-server:8001
      # 设置的后台秘钥，批量添加账户需要 详情：https://chatgpt-share-server.xyhelper.cn/config/apiauth.html
      SHARE_ADMIN_AUTH: xxx
      # 生成的兑换码的长度（不包含下面CDK的前缀）
      SHARE_CDK_LEN: 10
      # 生成的兑换码的前缀
      SHARE_CDK_LOAD: CCD
      # 生成的兑换码的类型：1为全小写，2为全大写
      SHARE_CDK_LETTER: 2
      # 后台内部mysql监控账户
      SHARE_MYSQLLOG_USER: share
      # 后台内部mysql监控密码
      SHARE_MYSQLLOG_PWD: 123456
EOF

rm -rf shareflowadmin
rm -rf quick-install.sh
docker compose pull
docker compose up -d --remove-orphans

clear

echo "--------------------------------------"
echo "--- 已完成 shareflowadmin 系统的安装"
echo "--- 请等待容器启动完成"
echo "--- 后台用户名：admin"
echo "--- 后台密码：admin123"
echo "--- 后台地址：${backend_domain}/shareadmin"
echo "---提示：后台地址解析并反向代理到: http://127.0.0.1:8311 才可访问"
echo "--------------------------------------"
