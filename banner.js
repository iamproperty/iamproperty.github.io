'use strict'

const pkg = require('./package.json')
const year = new Date().getFullYear()

function getBanner() {
  return `/*!
  * iamKey v${pkg.version}
  * Copyright 2022-${year} iamproperty
  */`
}

module.exports = getBanner
