#!/bin/bash
git fetch --all
git checkout --force "origin/main"
pnpm install && pnpm run build
rm -r /var/www/html/* && cp -r /home/altrgeek/prelaunch-website/dist/* /var/www/html/
chown -R nginx:nginx /var/www/html && chmod -R 755 /var/www/html
service nginx restart
