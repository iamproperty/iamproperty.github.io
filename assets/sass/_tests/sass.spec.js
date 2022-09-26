/**
 * @jest-environment node
 */

const path = require('path');
const sassTrue = require('sass-true');

const sassFile = path.join(__dirname, 'colours.spec.scss');
sassTrue.runSass({ file: sassFile }, { describe, it });
