# reactts-vite-eslint-template

## What's this?

This project is a little template to create a pre-configured react app with the following features set up:

-   [React](https://reactjs.org/)
    -   with support for Typescript
-   [Vite](https://vitejs.dev/)
    -   as a very very fast replacement for create-react-app/node.js 🚀🚀🚀
-   [Cypress](https://www.cypress.io/)
    -   for E2E and component-based tests
-   [Docker](https://www.docker.com/)
    -   to have an easy way to publish everything
-   [i18next](https://www.i18next.com/)
    -   To support multi-language projects
-   [Tailwind.css](https://tailwindcss.com/)
    -   To style everything
-   Code Linters / Formatters
    -   [ESLint](https://eslint.org/) - for TS/JS/JSON linting
    -   [Stylelint](https://stylelint.io/) - for stylesheet linting
    -   [Prettier](https://prettier.io/) - for easy code formatting

# Commands

-   `yarn dev` - spins up the dev machine with HMR active (or `yarn start` for convenience)
-   `yarn build` - builds the react app to the **./dist** folder for publishing
-   `yarn preview` - serves the build app from the **./dist** folder
-   `yarn test` - run E2E and component-based tests
-   `yarn cypress` - opens up the cypress test UI
-   `yarn docker:build` - to call a multi-stage build and create an image from Nginx to host everything#

# VSCode extensions

-   ESLint
-   Stylelint
-   Prettier
    -   Don't forget to disable `prettier.useEditorConfig` in VSCode
