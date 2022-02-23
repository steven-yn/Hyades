### Available Third-Party-Libraries

**Important**

- react-router-dom
- @types/react-router-dom (Not recommended, For future migration)
- styled-components
- axios
- qs

> - redux
> - react-redux
> - redux-actions (Not recommended, For future migration)

> - redux-thunk
> - redux-saga (Not recommended, For future migration)
> - react-query (Recommendation)

> - @mui/material
> - @mui/styled-engine-sc
> - @mui/icons-material

> - @types/jest
> - jest-watch-typeahead

> - react-testing-library (Not recommended)
> - @testing-library/react
> - @testing-library/jest-dom
> - @testing-library/user-event

> - enzyme
> - @wojtekmaj/enzyme-adapter-react-17
> - enzyme-to-json

**DevTools**

- redux-devtools-extension
- redux-logger
- react-virtualized

**Optional**

- sass
- open-color
- include-media
- classnames

## Available Scripts

In the project directory, you can run:

### `yarn install`

Dependencies Package Install Command. \
If you clone this repository, should be run first this command.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject` (applied)

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `yarn ci` (Not recommended, For after merge)

This is integrity check command for packages. (yarn install --immutable --immutable-cache --check-cache)
