# Namaste React 🚀

# Parcel

    - Dev Build
    - Local server
    - HMR = Hot Module Replacement
    - file watching algorithm written in C++
    - Caching => faster builds
    - Image Optimization
    - Minification
    - Bundling
    - compressing
    - Consistent Hash
    - code splitting
    - differential bundling => makes bundles for older versions and all variations of browser
    - Diagonastic features
    - Error Handling
    - host our app in HTTPS
    - Tree shaking => removes unused code for us
    - Lazy Mode => lazy loading
    - Diff dev andprod bundles
      TO MAKE PROD BUILD => npx parcel build index.html

/**
* Header
*  - Logo
*  - Nav Items      
* Body
*  - Search
*  - RestaurantContainer
*    - RestaurantCard 
*      - Img
*      - Name of Res, Star Rating, cuisine, delivery time
* Footer
*  - copyright
*  - Links
*  - Address
*  - Contact
**/

# Two types of exports
- Named Export - it can export multiple 

    Eg.

    export default Component 
    import Component from "path"

- Default Export - can only export only one by defalut

    Eg.
    export const Component
    import {Component} from "path"


React Hooks
(Normal JS utility functions - developd by facebook developers)
    - useState()
    - useEffect()
