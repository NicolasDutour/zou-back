# 🚀 Getting started

You need Node version < 19 to make it work

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm install
npm run develop
```
or
```
yarn install
yarn develop
```

### `build`

```
npm run build
```
or
```
yarn build
```

## Deployment

## Export DB

Don't use npm, there is an issue

```
yarn strapi export --no-encrypt -f <file_name>
```
ex: yarn strapi export --no-encrypt -f zouBackup

## Import DB

```
yarn strapi import -f <file_name.tar.gz>
```
ex: yarn strapi import -f zouBackup.tar.gz
