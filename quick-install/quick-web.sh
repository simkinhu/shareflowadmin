#!/bin/bash
set -e

# 克隆仓库到本地
echo "Cloning repository..."
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
    chmod 755 "$dir_name"
    echo "已创建目录 '$dir_name' 并设置权限为 755。"
fi

# 移动文件
cd shareflowadmin
mv dist/* ../list
cd ..
chmod -R 755 list

# 检查和更新 docker-compose.yml
yaml_file="./docker-compose.yml"
check_volume="./list:/app/resource/public/list"

if [ ! -f "$yaml_file" ]; then
    echo "文件不存在: $yaml_file"
    exit 1
fi

if grep -q "$check_volume" "$yaml_file"; then
    echo "映射 '$check_volume' 已存在，无需添加。"
else
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
        echo "映射 '$new_volume' 添加成功"
    else
        echo "映射添加失败"
        exit 1
    fi
fi

# 获取用户输入的域名
read -p "请输入新的域名 (例如：http(s)://example.com)结尾不带/: " new_domain

# 替换 list 目录下 config.json 里面的域名
config_file="./list/config.json"
if [ ! -f "$config_file" ]; then
    echo "文件不存在: $config_file"
    exit 1
fi

sed -i "s|\"VITE_API_BASE_URL\": \".*\"|\"VITE_API_BASE_URL\": \"$new_domain\"|g" "$config_file"

# 清理文件
rm -rf shareflowadmin
rm -rf quick-web.sh

# 更新和启动 Docker 容器
docker compose pull
docker compose up -d --remove-orphans

# 提示信息
echo "已完成前端页面的更换"
