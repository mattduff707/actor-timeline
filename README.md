## Process I followed

- Sketched a rough design
- Created a basic outline on Figma
- Created a component diagram to visualize data flow: [Screenshot of chart](https://github.com/mattduff707/actor-timeline/blob/main/public/images/timelineChart.jpg)
- Broke down the UI design and software design into tasks on a kanban board: [Screenshot of tasks](https://github.com/mattduff707/actor-timeline/blob/main/public/images/kanban.PNG)
- Used feature branches and pull requests

---

## Key Features

- Search people fetch from API: [Code Snippet](https://github.com/mattduff707/actor-timeline/blob/08305d37fae578918d6ac5a587901e4a061f751f/src/App.js#L20-L58)
- Get selected actor's details and movie credits: [Definition](https://github.com/mattduff707/actor-timeline/blob/08305d37fae578918d6ac5a587901e4a061f751f/src/App.js#L60-L65) and [Implementation](https://github.com/mattduff707/actor-timeline/blob/08305d37fae578918d6ac5a587901e4a061f751f/src/components/content/searchResults/SearchResult.js#L5-L18)
- Examples of data manipulation: [Actor Details](https://github.com/mattduff707/actor-timeline/blob/08305d37fae578918d6ac5a587901e4a061f751f/src/components/content/person/details/Details.js#L6-L27) and [Movie Roles](https://github.com/mattduff707/actor-timeline/blob/08305d37fae578918d6ac5a587901e4a061f751f/src/components/content/person/timeline/MovieDetailsBox.js#L9-L37)
- Flexbox order property used to make screen reader flow consistent [Code Snippet](https://github.com/mattduff707/actor-timeline/blob/08305d37fae578918d6ac5a587901e4a061f751f/src/components/content/person/timeline/MovieDetailsBox.js#L72-L116)

---

## Why I built it this way

- No state library was necessary due to the simplicity of the state within this app. Redux would be a bit overkill so useState hooks were all that was needed.
- I wanted to create a nice visual overview of an actors career without getting bogged down with biographies about the actor or movie synopsis on each role details component.
- No surprise that I went with styled-components on this one. It's my go-to. The modularity, auto-prefixing, and seamless integration into javascript makes it a dream to work with.
- I tested this with a screen reader to confirm that there was an accessible flow for non-sighted users.

---

## Potential Changes

- Change the way the "line" for the timeline is rendered. Currently it is a centralized absolutely positioned div whose height is determined by a fixed height value variable multiplied by the total components on the line. I would instead replace it with a centralized line within each component that connects to create what seems like one long line.
- I would like to find a way to include an actor's TV credits in the timeline.
- Create a test-suite using Testing Library

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
