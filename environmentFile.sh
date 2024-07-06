#!/bin/bash

dir="server"

if [ -d "$dir" ]
then
    echo "Directory exists"
else
    echo "Directory does not exist. Creating directory..."
    mkdir $dir
fi

cd $dir || exit

echo "PORT=" > .env
echo 'DATABASE_URL=""' >> .env

echo ".env file has been created in the $dir directory"
