# generator-bz-ng2-webpack 
Template to generate a basic project with the necessary structure of folders and code with angular and webpack.Based on Component-Based AngularJs Directives Architecture  there were developed some common templates which can be used not only at the beginning of a project as a basic guide of this architecture, but also during the development of a web application making use of a directive templates.

## Available templates:
1. Project template
2. Directive template

## Designed for:
Angular 1.4.7, 1.5.X

## Installing templates generator

### Prerequisites:

You need node.js tools to initialize tests and webpack compilation.
You must have node.js and its package manager (npm) installed in your project (You can obtain it from node).

### Instalation:

Using a terminal,place yourself on the folder where the project will be hosted and then execute the following commands.

```bash
\projectFolder> npm install -g yo
\projectFolder> npm install -g generator-bz-angular-webpack
```

### Installing the template project 

Making use of a terminal, go to the folder where the template project will be hosted and then execute the following commands.

```bash
\projectFolder> yo bz-angular-webpack
\projectFolder> cd WebContent
```

```bash
\projectFolder\WebContent> npm install
\projectFolder\WebContent> webpack
\projectFolder\WebContent> npm start
```

Now that you have the template project installed, you are ready to browse on it, opening the auto-generated file called  Index.html. http://localhost:3000/index.html#/


### Creating a custom directive template

On the folder where the directive template will be installed execute the following line :

```bash
\projectFolder\WebContent\app> yo bz-angular-webpack:directive
```
Once executed the above command there will be a question asking for the name of your directive. Additionally, inside of one of the files installed with the directive , you will find a file with the following name <nameDirectiveModule.js> , copy the lines contained in it and paste them into your dependencies file.

```bash
/* Include this part into your dependencies file
require('../app/directiveName/directiveNameModule.js');
require('../app/directiveName/directiveNameDirective.js');
require('../app/directiveName/directiveName.less');
*/
```

Finally  , you only need to run webpack again and take advantage of this new directive template!.

```bash
\projectFolder\WebContent> webpack
```



### Creating a component template -  Angular 1.5.X

On the folder where the component template will be installed execute the following line :

```bash
\projectFolder\WebContent\app> yo bz-angular-webpack:component
```
Once executed the above command there will be a question asking for the name of your component. Additionally, inside of one of the files installed with the component , you will find a file with the following name <nameComponentModule.js> , copy the lines contained in it and paste them into your dependencies file.

```bash
/* Include this part into your dependencies file
require('../app/componentName/componentNameModule.js');
require('../app/componentName/componentNameComponent.js');
require('../app/componentName/componentName.less');
*/
```



## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

Apache-2.0 © [Ivan Taimal]



