# New Project Guidelines

This is a boilerplate repository for creating a new Docker project using Node, NestJS, React, Mongo, Material-UI along with quick start commands (check Makefile/ReadMe). 

Best practices have been used and implemented to my knowledge to ensure the longevity of this project. Encourage pull requests for improving the workflow and processes + maintenance updates.

This project includes the bare minimum for authentication and authorization e.g: a user is able to create an account and sign-in (with form validation on front-end).

Step debugging through VS Code is enabled and launch.json provided (see below).

## Dependancies

The following dependancies have been added to improve developer workflow and build the application.

*  **Docker** Docker is a containerization software.
*  **MongoDB** MongoDB database.
*  **Nest.js** Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications.
*  **React JS** Core front-end technology
*  **Material UI** Component library

## Getting started

Clone the repository, **change all references to {PROJECT_NAME} in all files (do find and replace)**, also ensure project name matches the root directory name Eg: docker-compose.yml, Makefile, .env files (client/app) etc..

```bash
git clone https://github.com/jaybabak/docker-nestjs-mongodb-react-typescript-starter-kit
```

Change directory.

```bash
cd /app
```

Install Nest.js CLI globally

```bash
npm i -g @nestjs/cli
```
## Build back-end Docker containers (server, db etc..)

Run the following command to install the dependancies, make sure to be inside the "app" directory.

```bash
npm install
```
Run the following command to build the containers and start the development environment, make sure to be inside the "app" directory.

```bash
make up
```
Run the container and Nest.js development environment in quiet/silent mode (not recommended for local development, this hides the console output).

```bash
make up-silent
```

## Build the React front-end (client)

In a new terminal window, change directory to "client" folder.

```bash
cd /client
```

Run the following command to install the dependancies, make sure to be inside the "client" directory.

```bash
npm install
```
Run the following command to build the containers and start the development environment, make sure to be inside the "client" directory.

```bash
make up
```

## MongoDB

Get connection string URL's, run the following command in **/app** directory.:

```bash
make db
```

Access MongoDB outside Docker containers:

```bash
mongodb://{PROJECT_NAME}:{PROJECT_NAME}@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.0
```

Access MongoDB within the Docker containers, use this URL for the app to connect to MongoDB instance:

```bash
mongodb://{PROJECT_NAME}:{PROJECT_NAME}@mongo:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.0
```


## View the app

Visit back-end [http://localhost:3002](http://localhost:3002).

Visit front-end [http://localhost:3000](http://localhost:3000).

## Optional

Update /etc/hosts (mac) if you want to use a custom development domain with the following:

```bash
localhost:3000 my-site.dev
```

## VS Code Launch.json config file

```
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "address": "localhost",
      "name": "Debug NestJS in Docker",
      "port": 9229,
      "remoteRoot": "/usr/src/app",
      "sourceMaps": true,
      "restart": true,
      "localRoot": "${workspaceFolder}/app",
    }
  ]
}
```

## Available Commands (app)
  
| Command | Description |
|--|--|
| help | Prints the help screen. |
| up | Builds the application container and starts it with logging. |
| build | Rebuilds the application container and starts it with logging. |
| up-silent | Builds the application container and starts it in background mode, no active logging. |
| down | Stops and removes the docker containers. |
| stop | Stops the running containers. |
| shell | SSH into the main app container. |
| shell-db | SSH into the MongoDB container with mongosh |
| db | Get the MongoDB connection string |

## Help

To get a list of all available commands

```bash
make help
```

## Additional documentation

[Click Here](https://github.com/jaybabak/onebox/tree/main/app)
