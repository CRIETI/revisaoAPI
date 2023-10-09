Inicia projeto
```
npm init
```

Instala pacotes necessários
```
npm install --save-dev typescript nodemon @types/node @types/express @types/dotenv @types/cors ts-node
```
```
npm install cors dotenv express pg reflect-metadata typeorm
```

Cria pasta para o código fonte
```
mkdir src
```

Copia configurações do tsconfig.json
```
{
  "compilerOptions": {
    "target": "es2022",
    "module": "node16",
    "moduleResolution": "node16",
    "rootDir": "./src/",
    "outDir": "./dist/",
    "removeComments": true,
    "noEmitOnError": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": false,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true
  }
}
```

Adicionar script no package.json


codar..