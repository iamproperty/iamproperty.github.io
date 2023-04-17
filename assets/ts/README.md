# Typescript files

## Compilation

- **assets/ts/modules/{module}.ts** compiles to **assets/js/modules/{module}.js**
- **assets/ts/components/{component}.ts** compiles to **assets/js/components/{component}.component.js**
- **assets/ts/{filename}.ts** compiles to **assets/js/{filename}.js**

## Rollup

- **assets/js/components/{component}.component.js** adds the @imports from the assets/js/modules folder and creates a combined file of **assets/js/components/{component}.component.min.js**
- **assets/js/bundle.js** adds the @imports from the assets/js/modules and assets/js/components folders to create a combined file of **assets/js/components/scripts.bundle.min.js**
