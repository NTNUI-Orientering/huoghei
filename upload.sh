#!/usr/bin/env bash

source .env

if [ ! -d "./distribution" ]
then
    echo "Folder 'distribution' does not exist. Have you built the program or are you not running this script from the huoghei folder?"
    exit 1
fi

if [ -f ".env.local" ]
then
    source .env.local
else
    echo "Input ssh password"
    read -s PASSWD
fi

echo "Logging in..."
echo "Uploading folder distribution to the huoghei server at domeneshop"

sshpass -p "$PASSWD" rsync -avhP ./distribution "$ADDR":"$DEST_FOLDER" --delete

exit 0
