# This is my goto Nuxt3 Starterkit to quickly deploy to github pages

## Setup

```bash
# npm
npm install
# Dev-Server
npm run dev
# Deploy to gh- Pages
npm run deploy
# There is a touch.js in root to enable deploying from windows

```

Make sure to rename the baseUrl in nuxt.config.ts to the name of your repository otherwise the gh-page will not work

```ts
  app: {
    baseURL: "/gh-pages-nuxt-starter/",
  },

```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.
