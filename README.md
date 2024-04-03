# Text-Editor

![Image of application](./assets/Jate%20SS.png)

## Description

Jate is just another text editor. It allows users to creates notes or code snippets, and also allows an offline experience when downloaded.

## Functions

- Jate uses IndexDB to save your most recent notes or code snippets for future use.

- When downloaded, Jate allows users to have an offline experience that feels the same as the online version.

- Even when offline, Jate will be able to save your most recent code or notes for future uses.

## Technologies Used

- Node.js (Backend Javascript Engine)
- Express (Routing)
- babel loader and plugins (In order to use ES6)
- css-loader & style-loader (For css loaders)
- Webpacks for bundles, service worker, manifest.json file
- idb for the IndexDB to store data
- Code mirror for the text editor format

## Usage

- If viewing on the live application then you are able to use the text editor as normal. Or, you can click the install button on the top left, and download the application so you can have access even without internet.

- If running through the command line then first run `npm run install` in the root directory to download all dependencies

- Then, you can run `npm run start` and this will build the webpack and then start the server.

## Live Application

- You can view the application [here](https://text-editor-jate.onrender.com/).