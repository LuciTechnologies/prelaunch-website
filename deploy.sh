#!/bin/bash
git fetch --all
git checkout --force "origin/main"
pnpm install && pnpm run build
sudo cp -rf /home/altrgeek/prelaunch-website/dist/* /var/www/html/
sudo chown -R www-data:www-data /var/www/html && sudo chmod -R 755 /var/www/html
sudo systemctl restart nginx
