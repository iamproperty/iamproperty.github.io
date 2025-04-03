const fs = require('fs')

const filePath = 'dist/index.html'
const copy = 'dist/404.html'

fs.copyFile(filePath, copy, (error) => {
  if (error) {
    throw error
  } else {
    console.log('404 file has been created')
  }
})
