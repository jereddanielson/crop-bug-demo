# BREWS
A simple, somewhate opinionate boilerplate for [Babel](https://babeljs.io/), [React](https://facebook.github.io/react/), [EJS](http://ejs.co/), [Webpack](http://webpack.github.io/), and [SASS](http://sass-lang.com/).

### What's in it?

Files for an app entry point and React component - basically index.ejs, index.jsx, index.scss, and App.jsx.

package.json already includes the necessary dependencies, and Webpack is preconfigured for development and production. This eliminates two of the major pain points when starting a new React project (installying npm dependencies and configuring Webpack).

### To run

* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.

Clone the project:

```
> $ git clone https://github.com/jereddanielson/brews.git
```

Then install the dependencies:

```
> $ npm install
```

####Commands####

For development mode:

```
> $ npm run dev
```

For production mode including clean directory, NODE_ENV flag, and minification:

```
> $ npm run build
```

To clean the public directory without running webpack:

```
> $ npm run clean
```

Forked and heavily modified from Ali Al Dallal's [react-webpack-babel](https://github.com/alicoding/react-webpack-babel) boilerplate.