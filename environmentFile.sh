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
    echo "PORT=" > .env
    echo 'DATABASE_URL=""' >> .env
    echo 'JWT_TOKEN=""' >> .env
    echo ".env file has been created in the $dir directory"
fi

echo "-------------------------------------------"
