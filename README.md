Demo of the shopping cart is available on: [https://keen-kalam-d97dac.netlify.app/](https://keen-kalam-d97dac.netlify.app/)
 
Project runs in [http://localhost:3000] after running 'npm start' in terminal
 
The shopping cart contains the following functionalities:
 
Homepage:
- New items can be added through the homepage by clicking the button 'Add to cart'
- Cart is accessible by means of the My cart button or logo
- Total quantity of items is being tracked in the navbar
- Brand Name and Shop link to the homepage
 
Cart:
- Quantity of items can be incremented or reduced by means of + and - buttons
- Complete item can be removed by means of the x button
- Total cost is counted
- Quantity of items are counted
- Total items are counted
- Discount can be toggled on or of
- Discount is toggled of on incrementing, reducing or removal of items, as well as navigation back to the homepage
 
Stylesheets:
- Stylesheets are separated between components (navbar, home, and cart(includes register))
- Application is mobile friendly (remove button and image are removed from cart on mobile devices)
 
Reducers and actions:
- Products can be found/changed in the cartReducer.js file
-   items: []                   -> Object of products
   addedItems:[],              -> Items present in Cart
   totalQuantity: 0,           -> Total quantity of product in Cart
   total: 0,                   -> Total price
   discount: 0,                -> Total discount
   discountStatus: false       -> Discount on/of
- All reducer actions or found in the cartReducer.js file
 
Counters will be reset upon refresh.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).