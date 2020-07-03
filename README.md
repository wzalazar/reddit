<h1 align="center">
   <img src="https://raw.githubusercontent.com/wzalazar/demo-reddit/HEAD/src/Components/Logo/logo.svg" height="35"/>
   <a href="https://demo-reddit.netlify.app/">Reddit Demo</a>
</h1>

<p align="center">
    <a href="https://github.com/wzalazar/demo-reddit/actions"><img alt="Github Actions CI" src="https://github.com/wzalazar/demo-reddit/workflows/Test/badge.svg"></a>
    <a href="https://codecov.io/gh/wzalazar/demo-reddit"><img alt="Codecov Status" src="https://codecov.io/gh/wzalazar/demo-reddit/branch/master/graph/badge.svg"></a>
    <a href="#badge">
      <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
    </a>
</p>


## Guide

- [Bootstrapping](#bootstrapping)
- [Requirements](#requirements)
- [How to Run](#how-to-run)
- [Scripts](#scripts)
- [Tacking Tasks](#tracking-tasks)
- [Decision Making](#decision-making)
- [Demo](https://demo-reddit.netlify.app/)

#### Bootstrapping

This project was bootstrapped with [Create React App, Custom Template](https://github.com/wzalazar/cra-template-super-redux-typescript), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.


#### Requirements

This project is using [nvm](https://github.com/nvm-sh/nvm). If you use nvm just to execute `nvm use` for installing the rights NodeJS and NPM version.
If you are not a user of nvm, you will be able to check the file [.nvmrc](https://github.com/wzalazar/demo-reddit/blob/master/.nvmrc)

#### How to run

```bash
  $ git clone git@github.com:wzalazar/demo-reddit.git
  $ cd ./demo-reddit
  $ yarn
  $ yarn start
```

### Scripts

| script            |  description                                            | 
|-------------------|---------------------------------------------------------|
|  start            | Runs the app in the development mode.                   | 
|  build            | Builds the app for production.                          |  
|  test             | Launches the test runner in the interactive watch mode. |  
|  lint             | Lint the project.                                       |  
|  semantic-release | Generate semantic release, only for CI                  |  
|  codecov          | Push de coverage to codecov, only for CI                |  


### Tracking Tasks

I created a Project board for tracking my tasks. 

https://github.com/wzalazar/demo-reddit/projects/1


## Decision Making

- **Typescript:**
I choose typescript due that is a better way to create javascript applications. Is javascript with steroids.

- **Redux:**
I choose redux due to is the "king" of the state management. Single path of truth.

- **Styled Components:**
I choose styles-components because I think is the better way for creating isolated components.

- **React Testing Library:**
I choose testing-library because this brings an effective way of creating an integration test, and resilient tests.

- **Semantic Release:**
I choose semantic-release for adding versioning in the project.

- **Github actions:**
I choose Github Actions for adding Quality assurance in the project.

- **Github Project board:**
I choose the Github Project board due is a great tool for tracking the tasks and have historical progress.

- **Renovate:**
I choose to use the tool renovate for updating my dependencies, this update will have to pass all tests before the merge.

- **Testing:**
I choose to create more integration tests over unit tests for covering my project. With the integration test, I'm ensuring the scenarios are working fine with all components.