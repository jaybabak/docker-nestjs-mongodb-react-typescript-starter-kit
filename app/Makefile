SHELL := /bin/bash

include .env

default: up

## 


## ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄  ▄       ▄ 
##▐░░░░░░░░░░░▌▐░░▌      ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░▌     ▐░▌
##▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌     ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌ ▐░▌   ▐░▌ 
##▐░▌       ▐░▌▐░▌▐░▌    ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌  ▐░▌ ▐░▌  
##▐░▌       ▐░▌▐░▌ ▐░▌   ▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌   ▐░▐░▌   
##▐░▌       ▐░▌▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░▌       ▐░▌    ▐░▌    
##▐░▌       ▐░▌▐░▌   ▐░▌ ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌   ▐░▌░▌   
##▐░▌       ▐░▌▐░▌    ▐░▌▐░▌▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌  ▐░▌ ▐░▌  
##▐░█▄▄▄▄▄▄▄█░▌▐░▌     ▐░▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌ ▐░▌   ▐░▌ 
##▐░░░░░░░░░░░▌▐░▌      ▐░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░▌     ▐░▌
## ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀  ▀       ▀                                                    
##                           
## Commands:
##
## help		: Prints this help screen.
## up		: Builds the application container and starts it with logging.
## up-silent	: Builds the application container and starts it in background mode, no active logging.
## down		: Removes the docker containers.
## stop		: Stops the running containers.
## shell		: SSH into the main app container.
##
.PHONY: help
help : Makefile
	@sed -n 's/^##//p' $<

.PHONY: up
up:
	@echo "Building application and starting container..."
	docker-compose up

.PHONY: build
build:
	@echo "Re-building container and installing dependancies..."
	docker-compose down && docker-compose build --no-cache && docker-compose up

.PHONY: up-silent
up-silent:
	@echo "Building application and starting container in background mode..."
	docker-compose up -d

.PHONY: down
down:
	@echo "Shutting down and removing containers for onebox..."
	@docker-compose down

.PHONY: stop
stop:
	@echo "Stopping containers for onebox..."
	@docker-compose stop

.PHONY: shell
shell:
	@docker exec -ti onebox /bin/sh

.PHONY: shell-db
shell-db:
	@docker exec -ti mongo mongosh -u ${DB_USERNAME} -p ${DB_PASSWORD}

.PHONY: db
db:
	@echo "-------------------------------------------------------------------------"
	@echo "### Host machine URL (use to access mongo outside Docker Containers e.g: MongoDB Compass GUI) ###"
	@echo 'mongodb://${DB_USERNAME}:${DB_PASSWORD}@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.0'
	@echo "-------------------------------------------------------------------------"
	@echo "### Localhost URL ###"
	@echo 'mongodb://${DB_USERNAME}:${DB_PASSWORD}@mongo:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.0'
	@echo "-------------------------------------------------------------------------"

# https://stackoverflow.com/a/6273809/1826109
%:
	@: