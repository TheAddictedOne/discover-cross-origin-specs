# discover-cross-origin-specs

This repo is a web server designed to embed resources from https://github.com/TheAddictedOne/discover-cross-origin-resources  

Pages:
- Index: `localhost:3000`
- DM Player embedded with a classic iframe: `localhost:3000/dm`

## Launch the server

```
npm i
npm start           // Launch the server with COEP/COOP
npm run no-headers  // Launch the server without any specific headers (e.g. existing websites, not implementing COOP/COEP)
```

## Todo

- Test `https` to have `Cross-Origin Isolated`, related to: https://github.com/TheAddictedOne/discover-cross-origin-resources#todo
