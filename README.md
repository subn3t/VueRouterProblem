# Components fail to render based on imports and alphabetical order of filenames

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

There are 3 files, Alpha.vue, Bravo.vue, and Charlie.vue. All 3 import a service which imports the router. Components fail to render based on the Alphabetical order of the filenames.

### Visit /alpha in your browser

Notice the blank page **(this component fails to render because of the import statement)**

### Visit /bravo in your browser

Notice the Bravo component renders with the text "Bravo"

### Visit /charlie in your browser

Notice the Charlie component renders with the text "Charlie"

### In Alpha.vue, comment out this line:

```
import service from '@/service'
```

### Visit /alpha in your browser

Notice the Alpha component renders with the text "Alpha" **(this didn't work before)**

### Visit /bravo in your browser

Notice the blank page **(now this component fails to render)**

### Visit /charlie in your browser

Notice the Charlie component renders with the text "Charlie"