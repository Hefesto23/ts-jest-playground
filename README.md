# ts-jest-playground

## Passos iniciais

Instalar como dependência de desenvolvimento 

```bash
npm i -D typescript jest ts-jest @types/jest ts-node
```

Para configuração inicial do jest executar o comando:

```bash
npx ts-jest config:init
```
No arquivo gerado jest.config.js

```js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.test.ts"],
  verbose: true
};
```
Definir preset como ts-jest, e configurar o padrão de nomenclatura de arquivo de teste.

No arquivo de configuração tsconfig.json adicionar a 'compilerOption'

```json
{
  "compilerOptions": {
    "esModuleInterop": true
  }
}
```