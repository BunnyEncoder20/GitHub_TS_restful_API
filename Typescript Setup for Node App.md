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

5. Installing needed modules 
```shell
npm i express cookie-parser comperession cors mongoose
```

---

### Configurations

1. Config the Typescript in the `.tsconfig.json` file 
```shell
{
    "compilerOptions": {
        "module": "NodeNext",
        "moduleResolution": "NodeNext",
        "baseUrl": "src",
        "outDir": "dict",
        "sourceMap": true,
        "noImplicitAny": true
    },
    "include": ["src/**/*"],
}
```

2. Config nodemon by creating a `nodemon.json` file 
```shell
{
    "watch": ["src"],
    "ext": ".ts, .js",
    "exec": "ts-node ./src/index.ts"
}
```

3. Add the following start script command in the `package.json` file 
```shell
"scripts": {
	"start": "nodemon",
	"test": "echo \"Error: no test specified\" && exit 1"
},
```

---


#### Installing types for any module

- we can install the types for any dependency module by using the following command : 
```shell
npm i -D @types/module_name
```

- Hence for our usercase here, we would need to install types of express, cookie-parser, compression, cors as follows : 
```shell
npm i -D @types/express @types/cookie-parser @types/compression @types/cors @types/mongoose
```

