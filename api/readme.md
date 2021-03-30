
# Configurando NodeJS : TS + Express
- [x] yarn init -y
- [x] yarn add express @types/express
- [x] yarn add typescript -D
- [x] yarn tsc --init || TS config

#### TS Config
```tsconfig.json

 "outDir": "./dist",                              
 "rootDir": "./src", 

```


#### Scripts package.json

- [x] yarn add ts-node-dev -D || Restart Server same Nodemon and Build app same tsc.

```package.json

 "scripts": {
    "build": "tsc",
    "dev:server": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts"
  },

```


# Configurando Debbug

  