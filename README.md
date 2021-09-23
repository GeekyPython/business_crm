# Business CRM

## Description
The Business CRM helps a business owner to view, edit and delete the orders made by the customers of his/her business. 

## Components
The App is divided into different routes. The components rendered in different routes are listed below:

### /home
* App
  * Navbar
  * Searchbar
  * OrderList
  
### /orders/:id/edit-order-page
* EditOrderPage

### /orders/add-new-order
* AddOrderPage


## Directions

### To install project dependencies:
Type `npm install` in your console to install the dependencies for the project.

### To start project server:
Type `npm start` in your console

Also, add the /home route to the url to reach home page

### Other Instructions
* While adding orders, pressing "add order" will add the order to the list of existing orders, 
  you can then press back to reach the homepage and search for the order by name.
* While adding orders, pressing "add order" will update the particular order and add it to the list of existing orders.

---
**NOTE**

The `/` route has the login module which is still under development. Hence, please follow the directions above to access the main application.
---
