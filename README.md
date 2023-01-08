# OneBox Repo

This is the repository for the prototype of onebox which is used to share data such as links, text, URL's, files and photos quickly between devices.

## Dependancies

The following dependancies have been added to improve developer workflow and build the application.

*  **Docker** Docker is a containerization software.
*  **MongoDB** MongoDB database.
*  **Nest.js** Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications.
*  **Node.js** Core back-end technology

## Getting started

Clone the repository

```bash
git clone git@github.com:jaybabak/onebox.git
```

Change directory.

```bash
cd onebox/app
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
cd onebox/client
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

Connection string URL's:

Access MongoDB outside Docker containers:

```bash
mongodb://onebox:onebox@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.0
```

Access MongoDB within the Docker containers, use this URL for the app to connect to MongoDB instance:

```bash
mongodb://onebox:onebox@mongo:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.0
```


## View the app

Visit back-end [http://localhost:3002](http://localhost:3002).

Visit front-end [http://localhost:3000](http://localhost:3000).

## Optional

Update /etc/hosts (mac) if you want to use a custom development domain with the following:

```bash
localhost:3000 onebox.dev
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
