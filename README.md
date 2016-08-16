# generator-bz-ng2-webpack 
Template to generate a basic project with the necessary structure of folders and code with angular 2 and webpack.

## Available templates:
1. Project template
2. Component template

## Designed for:
 @angular 2.0.0-rc.4

## Installing templates generator

### Prerequisites:

You need node.js tools to initialize tests and webpack compilation.
Make sure you have Node version >= 4.0 and NPM >= 3
You must have node.js and its package manager (npm) installed in your project (You can obtain it from node).

### Instalation:

Using a terminal, place yourself on the folder where the project will be hosted and then execute the following commands.

```bash
\anyfolder> npm install -g yo
\anyfolder> npm install -g generator-bz-ng2-webpack
```


Create projectFolder
```bash
\anyfolder> mkdir projectFolder
\anyfolder> cd projectFolder
```

### Using the template project 

Making use of a terminal, go to the folder where the template project will be hosted and then execute the following commands.

```bash
\projectFolder> yo bz-ng2-webpack
\projectFolder> cd WebContent
```

```bash
# change directory to our repo
cd {projectFolder}/WebContent

# Step 1: Add required global libraries
npm install typings webpack-dev-server rimraf webpack -g

# Step 2: Install the repo with npm
npm install

# Step 3: Start the server
npm start
```

Now that you have the template project installed, you are ready to browse on it http://localhost:3000



### Creating a component template

On the folder where the component template will be installed execute the following line :

```bash
\projectFolder\WebContent\app> yo bz-ng2-webpack:component
```


 [Ivan Taimal]



