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
