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
import '@iamproperty/components/dist/components.css'

import * as iamkey from '@iamproperty/components'
for (const [key, value] of Object.entries(iamkey)) {
  Vue.component(key, value)
}
```

Components then can be used as described in the design system documentation.

```
<Header title="Page title" image="../../assets/image.jpeg"><p>Page description</p></Header>
```

#### NUXT

To use the components in NUXT you firstly need to add create a plugin file called plugins/iamkey.js and add the below code.

```
import Vue from 'vue'

import '@iamproperty/components/assets/css/core.min.css'
import '@iamproperty/components/dist/components.css'

import * as iamkey from '@iamproperty/components'
for (const [key, value] of Object.entries(iamkey)) {
  Vue.component(key, value)
}
```

Then add the plugin to the nuxt.config.js file.

```
export default {
  plugins: [
    'plugins/iamkey.js'
  ],
}
```


## Contributing to iam key

### Create code branch

Firstly the clone the [repo](https://github.com/iamproperty/iamproperty-vue-component-library) from GitHub and create a new branch using the agreed naming conventention. 

### Commands

#### Install node packages

```
npm install
```

#### Development local web server

Setup a local web server to run the documentation site this will allow you to modify the code and check it.

```
npm run serve
```

#### Run your unit tests

**This command should be ran while the local web server is still running.**

Unit tests should be ran after changing any code to make sure it has no unwanted side effects.

```
npm run test
```

#### Prepare for pull request

**This command should be ran while the local web server is still running.**

Before creating a pull request we want to make sure assets get re-compiled and audited so that we can keep an eye on file sizes. We also want to recreate visual regression snapshots. This will create a number of files that will be added to the pull request to help the reviewers make judgement on the changes.

```
npm run pull-request
```

### Pull request

You will not have the ability to commit changes directly to the main branch and a pull request will have to be created. This pull request should follow the format dictated in the .github/pull_request_template.md file.

### Create release

TBD
