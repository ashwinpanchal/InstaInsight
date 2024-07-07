#!/bin/bash

dir="server"

echo "-------------------------------------------"

if [ -d "$dir" ]
then
    echo "Directory exists"
else
    echo "Directory does not exist"
    echo "-------------------------------------------"
    exit
fi

if [ -f "$dir/.env" ]
then
    echo ".env file already exists"
    echo "-------------------------------------------"
    exit
else
    cd $dir || exit
    {
        echo "PORT=3000"
        echo 'DATABASE_URL="PASTE_MONGO_DB_CONNECTION_URL"'
        echo 'JWT_TOKEN="SECRET"'
        echo 'BCRYPT_SALT_ROUNDS="9"'
    } >> .env
    echo ".env file has been created in the $dir directory"
fi

echo "-------------------------------------------"
