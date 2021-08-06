/**
 * @jest-environment node
 */

import sassTrue from 'sass-true'
import path from 'path'
import glob from 'glob'

describe('Sass', () => {

  // Find all of the Sass files that end in `*.spec.scss` in any directory of this project.
  // I use path.resolve because True requires absolute paths to compile test files.
  const sassTestFiles = glob.sync(path.resolve(process.cwd(), 'tests/sass/**/*.spec.scss'))
 
  // Run True on every file found with the describe and it methods provided
  sassTestFiles.forEach(file =>
    sassTrue.runSass({ file }, { describe, it })
  )
})