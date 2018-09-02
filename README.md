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

- hocs (High order components)
  |-- with-redux-store.js
  |-- [Add Hocs here]

- pages
  |-- index (Home page)
  |-- _app (Connects react to redux)
  |-- _document (Here you can add meta tags. Also here is link with styles)
  |-- [Add Pages here]

- reducers (redux)
  |-- counterReducer.js (Sample reducer)
  |-- headerReducer.js (Sample reducer)
  |-- index.js (Interface)
  |-- rootReducer (Combines reducers)
  |-- [Add Reducers here]

- services (here you can work with api)
  |-- index (Interface)

- store (redux)
  |-- index (Interface)
  |-- store

- styles (main styles)
  |-- main.scss
  |-- reset.scss (Reset default styles)
  |-- ui_vars.scss (User Interface variables: colors, typography...)

- next.config.js (Here is saved aliases. Also with this file NEXT.JS can read SASS files)
```