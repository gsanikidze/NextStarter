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

Build Version Will Be In ```.next``` Folder.

\* You can use npm instead of yarn (just write npm instead yarn). \*

## Architecture

- actions \*redux\*
-- actionCreators.js
-- actionTypes.js

- components \*react\*
-- Header
--- Header.js \*component self\*
--- header.scss \*component styles\*
--- index.js \*interface\*
-- [Add Some Other Components Hire]

- hoc \*high order components\*
-- with-redux-store.js \*connects react to redux\*
-- [Add Some Other Hocs Hire]