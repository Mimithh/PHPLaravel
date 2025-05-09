Hola!
miraros este video:
https://www.youtube.com/watch?v=rn2LCOeNPds
Gracias,


First Steps:

Acordaros de permisos de escritura y lectura:
en docker exec -it php-apache bash
instalamos nano:
apt update 
apt install nano
nano /etc/apache2/sites-available/000-default.conf

        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/html/public
        <Directory /var/www/html/public>
           Options Indexes FollowSymLinks
           AllowOverride All
           Require all granted
        </Directory>
        # Alias para las im  genes en /assets
        Alias /assets /var/www/html/public/assets

        <Directory /var/www/html/public/assets>
            Options Indexes FollowSymLinks
            AllowOverride All
            Require all granted
         </Directory>
     
        exit

Si os da algun error o no teneis el vendor:
1 - docker exec -it php-apache bash
2 - apt-get update && apt-get install -y unzip libzip-dev
docker-php-ext-install zip
3 - curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
4 - composer install

crear nano ".env":

con esto:
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:aitI00dU5UNkhxNxrqZh8YtR59SkNv3lOo7PwqFWlUw= #** Esto lo tendréis que cambiar entiendo( si os dice algo de la key: php artisan key:generate
)
APP_DEBUG=true
APP_URL=http://localhost

APP_LOCALE=en
APP_FALLBACK_LOCALE=en
APP_FAKER_LOCALE=en_US

APP_MAINTENANCE_DRIVER=file
# APP_MAINTENANCE_STORE=database

PHP_CLI_SERVER_WORKERS=4

BCRYPT_ROUNDS=12

LOG_CHANNEL=stack
LOG_STACK=single
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST= baseDatosNewTitans 
DB_PORT=3306       
DB_DATABASE=dataBaseNewTitans  
DB_USERNAME=bernat   
DB_PASSWORD=newtitansdb  

#DB_CONNECTION=sqlite
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=laravel
# DB_USERNAME=root
# DB_PASSWORD=

SESSION_DRIVER=database
SESSION_LIFETIME=120
SESSION_ENCRYPT=false
SESSION_PATH=/
SESSION_DOMAIN=null

BROADCAST_CONNECTION=log
FILESYSTEM_DISK=local
QUEUE_CONNECTION=database

CACHE_STORE=database
# CACHE_PREFIX=

MEMCACHED_HOST=127.0.0.1

REDIS_CLIENT=phpredis
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=log
MAIL_SCHEME=null
MAIL_HOST=127.0.0.1
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

VITE_APP_NAME="${APP_NAME}"


Luego reiniciais el docker docker restart php-apache y docker start php-apache

