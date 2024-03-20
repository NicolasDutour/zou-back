# Project Zou-back

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

You can check out [GitHub repository](https://github.com/NicolasDutour/Zou-back)

### Getting Started
You need Node version < 19 to make it work

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

### Deployment
Deployed on [Heroku](https://dashboard.heroku.com/apps/zou-back)

### Export DB

Don't use npm, there is an issue

```
yarn strapi export --no-encrypt -f <file_name>
```
ex: yarn strapi export --no-encrypt -f zouBackup

### Import DB

```
yarn strapi import -f <file_name.tar.gz>
```
ex: yarn strapi import -f zouBackup.tar.gz