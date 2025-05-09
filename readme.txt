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
