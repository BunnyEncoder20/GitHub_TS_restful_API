## How to setup professional Backend (**Ts**)

- This section will guide through the process of setting up Typescript powered backend node application for **restful API** 

### Installations 

1. Init a node project 
```shell
npm init -y
```

2. Install **Typescript**
```shell
npm i -D typescript
```

3. Install Typescript node
```shell
npm i -D ts-node
```

4. Install nodemon 
```shell
npm i -D nodemon
```


### Configurations

1. Config the Typescript in the `.tsconfig.json` file 
```shell
{
	"compilerOptions":{
		
	}
}
```

2. Add the following start script command in the `package.json` file 
```shell
"scripts": {
	"start": "nodemon",
	"test": "echo \"Error: no test specified\" && exit 1"
},
```