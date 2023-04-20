
# Getting started

## Using the component library or assets

### Install
```
npm install @iamproperty/components --save
```

### Usage

#### Static assets
The assets folder can be used independently from the Vue components so that they can be used with other frameworks. With the compiled files available to use out of the box alongside the source files that can be configured.
```
<link href="./node_modules/@iamproperty/components/assets/css/style.min.css" as="style" />
<script src="./node_modules/@iamproperty/components/assets/js/scripts.bundle.min.js"></script>
```

##### Sass files
```
@import './node_modules/@iamproperty/components/assets/sass/_func.scss';
@import './node_modules/@iamproperty/components/assets/sass/_corefiles_.scss';
```
##### JS modules
```
import navbar from @iamproperty/components/assets/js/modules/navbar.js
```

#### Vue application
```
import '@iamproperty/components/assets/css/core.min.css'
import '@iamproperty/components/dist/style.css'

import * as iamkey from '@iamproperty/components'
for (const [key, value] of Object.entries(iamkey)) {
  Vue.component(key, value)
}
```
Components then can be used as described in the design system documentation.
```
<Header title="Page title" image="../../assets/image.jpeg"><p>Page description</p></Header>
```

## Contributing to iam key

### Create code branch
Firstly the clone the [repo](https://github.com/iamproperty/iamproperty.github.io) from GitHub and create a new branch from the develop branch using the agreed naming convention (FEG-99/feature/task-title).

### Commands

#### Install node packages
```
npm install --force
```

#### Development local web server

Setup a local web server to run the documentation site this will allow you to modify the code and check it.

```
npm run dev 
```
OR
```
npm run watch
```
The second command will run dev but will also watch for sass and typescript files being changed which would then update the CSS and JavaScript files.

#### Run unit tests
Unit tests should be ran after changing any code to make sure it has no unwanted side effects.
```
npm run test
```
**This command is ran when a PR is created to give the reviewer confidence that their hasn't been any unforeseen side effects**
 
#### Run visual regression test
**This command should be ran while the local web server is still running. The localURL variable in package.json file needs to match the local web server.**
```
npm run visual
```
The visual regression tests may differ greatly if the tests are running on a windows when the the snapshots where created on Mac.
  
#### Prepare for pull request
**This command should be ran while the local web server is still running. The localURL variable in package.json file needs to match the local web server.**

Before creating a pull request we want to make sure assets get re-compiled and audited so that we can keep an eye on file sizes. We also want to recreate visual regression snapshots. This will create a number of files that will be added to the pull request to help the reviewers make judgement on the changes.

```
npm run pull-request
```

### Create Pull request into develop
You will not have the ability to commit changes directly to the main or develop branches and a pull request will have to be created. This pull request should follow the format dictated in the .github/pull_request_template.md file. The pull reguest should always be into develop unless you are doing a hotfix in a release branch. At least one approver is needed but for more complex bits of work more can be added. The pull request will run the unit tests and create a test environment in netlify for the reviewer to help complete the review. Once the pull request is closed the netlify development environment will get updated.

https://iamproperty-dev.netlify.app/ 

## Create release
The creation of an npm package is done through GitHub actions when a GitHub release is created. Releases can be made from any branch but it should come from the master branch.
<a  href="https://www.npmjs.com/package/@iamproperty/components"  target="_blank">npm registry package</a>.

## Update the documentation site
To update the documentation site you need to create a pull request from develop or a release branch into master. Once the PR is approved an automatic build and deploy process using GitHub actions will be created.

https://iamproperty.github.io/