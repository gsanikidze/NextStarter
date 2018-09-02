# Next.js Starter

## Getting Started
```
git clone https://github.com/gsanikidze/NextStarter.git
```
```
cd NextStarter/
```
```
yarn install
```
```
yarn run dev
```

## Create build and then run it
```
yarn run build
```
```
yarn start
```

Build Version Will Be In `.next` Folder.

\* You can use npm instead of yarn (just write npm instead yarn). \*

## Architecture
```
- actions (redux)
  |-- actionCreators.js
  |-- actionTypes.js

- components (react)
  |-- Header
      |-- Header.js `component self`
      |-- header.scss `component styles`
      |-- index.js `interface`
  |-- [Add Components here]

- hocs (high order components)
  |-- with-redux-store.js
  |-- [Add Hocs here]

- pages
  |-- index (home page)
  |-- _app (connects react to redux)
  |-- _document (here you can add meta tags an here is link with styles)
  |-- [Add Pages here]

- reducers (redux)
  |-- counterReducer.js (sample reducer)
  |-- headerReducer.js (sample reducer)
  |-- index.js (interface)
  |-- rootReducer (combine reducers)
  |-- [Add Reducers here]

- services (here you can work with api)
  |-- index (interface)

- store (redux)
  |-- index (interface)
  |-- store

- styles (main styles)
  |-- main.scss
  |-- reset.scss (reset default styles)
  |-- ui_vars.scss (ui variables: colors, typography...)

- next.config.js (here is saved aliases and with this file NEXT.JS can read SASS files)
```