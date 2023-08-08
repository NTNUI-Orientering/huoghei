#!/usr/bin/env bash

HOST="login.domeneshop.no"
USER="huoghei"

if [ ! -d "./distribution" ]
then
    echo "Folder 'distribution' does not exist. Have you built the program or are you not running this script from the huoghei folder?"
    exit 1
fi

echo "Input ssh password"
read -s PASSWD
echo "Logging in..."
echo "Uploading folder distribution to the huoghei server at domeneshop"

sshpass -p "$PASSWD" rsync -avhP ./distribution "$USER"@"$HOST":./hh --delete

echo "Files uploaded"
exit 0
