#!/bin/bash
set -e

# 克隆仓库到本地
echo "正在克隆仓库..."
git clone https://github.com/simkinhu/shareflowadmin.git shareflowadmin

# 设置目录名
dir_name="list"
# 检查目录是否存在
if [ -d "$dir_name" ]; then
    # 目录存在，删除其下的所有文件
    echo "目录 '$dir_name' 已存在，正在删除其内容..."
    rm -rf "${dir_name:?}"/*
else
    # 目录不存在，创建目录并设置权限
    echo "目录 '$dir_name' 不存在，正在创建目录..."
    mkdir "$dir_name"
    chmod 755 "$dir_name"
fi

# 提示用户选择主题版本
echo "请选择主题版本："
echo "1. V1版本：在线支付|卡密兑换|邀请好友"
echo "2. V2版本：无在线支付|邀请好友"
read -p "请输入数字选择: " theme_version

# 根据用户选择移动文件
if [ "$theme_version" == "1" ]; then
    echo "正在移动文件从 'shareflowadmin/distone' 到 '$dir_name'..."
    cd shareflowadmin
    mv distone/* ../list
    cd ..
elif [ "$theme_version" == "2" ]; then
    echo "正在移动文件从 'shareflowadmin/disttwo' 到 '$dir_name'..."
    cd shareflowadmin
    mv disttwo/* ../list
    cd ..
else
    echo "无效的选择，请重新运行脚本并输入有效的数字。"
    exit 1
fi

chmod -R 755 list

# 检查和更新 docker-compose.yml
yaml_file="./docker-compose.yml"
check_volume="./list:/app/resource/public/list"

if [ ! -f "$yaml_file" ]; then
    echo "文件未找到: $yaml_file"
    exit 1
fi

if grep -q "$check_volume" "$yaml_file"; then
    echo "卷映射 '$check_volume' 已经存在。"
else
    echo "正在添加卷映射 '$check_volume' 到 '$yaml_file'..."
    new_volume="      - ./list:/app/resource/public/list"
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
    ' "$yaml_file" > tmp_file && mv tmp_file "$yaml_file"

    if [ $? -eq 0 ]; then
        echo "卷映射添加成功。"
    else
        echo "卷映射添加失败。"
        exit 1
    fi
fi

clear

# 获取用户输入的域名
read -p "请输入后端接口绑定使用的域名(例如：http(s)://example.com 结尾不带 /): " new_domain

# 替换 list 目录下 config.json 里面的域名
config_file="./list/config.json"
if [ ! -f "$config_file" ]; then
    echo "文件未找到: $config_file"
    exit 1
fi

echo "正在更新 '$config_file' 中的域名..."
sed -i "s|\"VITE_API_BASE_URL\": \".*\"|\"VITE_API_BASE_URL\": \"$new_domain\"|g" "$config_file"

# 清理文件
echo "正在清理文件..."
rm -rf shareflowadmin
rm -rf quick-web.sh

# 更新和启动 Docker 容器
echo "正在拉取并启动 Docker 容器..."
docker compose pull
docker compose up -d --remove-orphans

# 提示信息
echo "前端页面替换已完成。"