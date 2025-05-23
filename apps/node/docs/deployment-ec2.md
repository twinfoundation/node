# @twin.org/node - Deployment Amazon AWS EC2

## Amazon AWS EC2 Instance

To run the server on an AWS EC2 instance follow the steps below:

First follow one of the many online guides to create your EC2 instance with the ability to connect to it in terminal mode.

Network requirements are for the `https` port to be open to any address range i.e. `0.0.0.0`.

You should alias a domain name to the IP address of the instance e.g. `twin-node-api.example.com` using your DNS provider e.g. Cloudflare.

## Install Git

For retrieving the code from the repo.

```shell
sudo yum install git -y
git -version
```

## Install NVM and Node

For building and running the application.

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 20
node -v
```

## Install nginx

To serve the app through an https reverse proxy.

```shell
sudo yum install nginx -y
nginx -v
```

## Configuring nginx

We need to configure nginx to use the certificate and reverse proxy https traffic to the node server.

```shell
sudo nano /etc/nginx/nginx.conf
```

The configuration should be along the lines of:

```shell
server {
    listen 80;
    server_name twin-node-api.example.com;

    # Redirect all traffic
    return 301 https://$server_name$request_uri;
}

server {
    listen [::]:443 ssl ipv6only=on;
    listen 443 ssl;

    server_name twin-node-api.example.com;

    ssl_certificate /etc/ssl/certs/nginx-selfsigned.crt;
    ssl_certificate_key /etc/ssl/private/nginx-selfsigned.key;

    location / {
        # Redirect the https traffic to the node instance
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /socket {
        # Redirect the wss traffic to the node instance
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

Once configured you can restart nginx with `sudo systemctl restart nginx`

Run `sudo systemctl enable nginx` to auto start the server on instance startup.

## Building the server

We clone the repo, build it and then make a copy of the relevant .env file.

```shell
git clone https://github.com/twinfoundation/node.git
cd apps
npm install
npm run dist
cd apps/node
cp .env.example-entity-storage .env
```

The .env file can be modified to suit your own use case. For example to set the location for the storage.

```shell
TWIN_NODE_STORAGE_FILE_ROOT="/home/ec2-user/twin-node/"
```

## Bootstrapping the server

You can now bootstrap the server, this will initialise all the required services and generate an initial configuration file. You should take note of the information in the logging as it will display information such as node admin passwords which will only be displayed once.

```shell
node ./dist/es/index.js
```

You should also now be able to access the server at `https://twin-node-api.example.com`

## Configure the server to restart with server

We now need to install the server as a service, so that after any reboot it will continue to run.

Stop the server with `Ctrl-C`.

Create a service file e.g. `twin-node.service`

You might need to modify the location for the node version, you can find this out using `whereis node`

```shell
[Unit]
Description=TWIN Node Server
After=network.target

[Service]
ExecStart=/home/ec2-user/.nvm/versions/node/v20.16.0/bin/node /home/ec2-user/twin-node/apps/twin-node/dist/es/index.js
Restart=always
User=ec2-user
Group=ec2-user
Environment=PATH=/usr/bin:/usr/local/bin
Environment=NODE_ENV=production
WorkingDirectory=/home/ec2-user/twin-node/apps/twin-node/

[Install]
WantedBy=multi-user.target
```

Reload systemd and start the service.

```shell
sudo systemctl daemon-reload
sudo systemctl enable ./twin-node.service
sudo systemctl start twin-node.service
```

To check the status of the service.

```shell
sudo systemctl status twin-node.service
```

or

```shell
sudo journalctl -u twin-node | tail
```

## Upgrade EC2 Instance

To upgrade a previous installation on an EC2 instance with the latest version.

```shell
sudo systemctl stop twin-node.service
cd apps
git reset --hard
git pull
npm i
npm run dist
cd apps/node

# Update any env vars if necessary
# nano .env

# If you want to start from clean configuration you should remove the databases manually
# and also remove the engine-state file
# rm /home/ec2-user/twin-node/engine-state.json

# To perform a test run before launching the service permanently
# npm run start

sudo systemctl start twin-node.service
```
