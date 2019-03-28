# DAO-Widgets-Project 

## Libraries（using arago）
- [**@aragon/os**](https://github.com/aragon/aragonos): Aragon interfaces
- [**@aragon/client**](https://github.com/aragon/aragon.js/tree/master/packages/aragon-client): Wrapper for Aragon application RPC
- [**@aragon/ui**](https://github.com/aragon/aragon-ui): Aragon UI components (in React)


## Running app

### Using HTTP

- start your app's development server running 
```
npm run start:app
```

- compile your app's contracts
```
npm run start:aragon:http
```



- Changes to the app's background script (`app/script.js`) cannot be hot-reloaded, 

- after making changes to the script, you will 
  - need to either restart the development server or npm run build:script

```
npm run start:app
```
or 
```
npm run build:script
```

### Using IPFS

- Running your app using IPFS will mimic the production environment that will be used for running your app. 
```
npm run start:aragon:ipfs
``` 

- Whenever a change is below, the command needs to be restarted.
  - made to any file in your front-end
  - a new version of the app needs to be published
