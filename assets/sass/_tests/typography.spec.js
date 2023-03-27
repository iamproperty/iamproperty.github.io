/**
 * @jest-environment jest-environment-node-single-context
 */

const path = require('path');
const sassTrue = require('sass-true');

const sassFile = path.join(__dirname, 'typography.spec.scss');
sassTrue.runSass({ describe, it }, sassFile);
