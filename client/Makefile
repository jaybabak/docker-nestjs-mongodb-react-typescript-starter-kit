SHELL := /bin/bash

default: up

## 
                                                
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
	@echo "Building front-end application and starting container..."
	docker-compose up

.PHONY: build
build:
	@echo "Re-building container and installing dependancies..."
	docker-compose down && docker-compose build --no-cache && docker-compose up

.PHONY: up-silent
up-silent:
	@echo "Building front-end application and starting container in background mode..."
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
	@docker exec -ti {PROJECT_NAME}-client /bin/sh

# https://stackoverflow.com/a/6273809/1826109
%:
	@:
