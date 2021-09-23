import Navbar from './navbar';
import SearchBar from './searchBar';
import React, {useReducer} from 'react';
import OrderList from './orderList';
import data from './DummyData.json';
import NewOrderPage from './newOrderPage';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import EditOrderPage from './editOrderPage';
import './App.css';
import LoginPage from './login';


function App() {

  const reducer = (state, action) => 
  {
    if(action.type === "UPDATE_SEARCHBAR")
    {
      if(action.payload)
      {
        const filterRegex = new RegExp(action.payload,"ig");
        const newOrders = state.orders.filter(order => filterRegex.test(order.customer_name));
        return {...state, searchBarContent: action.payload, filteredOrders: newOrders}
      }
      return {...state};
    }

    if(action.type === "DELETE_ORDER")
    {
      console.log(action.payload);
      const newOrders = state.orders.filter(order => order.id !== action.payload)
      return {...state,filteredOrders: newOrders, orders: newOrders};
    }

    if(action.type === "ADD_ORDER")
    {
      const {id,name,email,product,quantity} = action.payload;
      console.log("Reducer Running");
      console.log(action.payload);
      const newOrder = {id,customer_name: name,customer_email: email,product,quantity};
      const updatedOrders = [...state.orders,newOrder];
      return {...state, orders: updatedOrders, filteredOrders: updatedOrders};
    }

    if(action.type === "EDIT_ORDER")
    {
      const {id, product,quantity} = action.payload;
      const updatedOrder = {...state.orders.find(elem => elem.id === id)};
      updatedOrder.product = product;
      updatedOrder.quantity = quantity;
      console.log(updatedOrder);
      let newOrders = state.orders.filter(elem => elem.id !== id);
      newOrders = [...newOrders,updatedOrder];
      console.log(newOrders);
      return {...state,orders: newOrders, filteredOrders: newOrders};
    }

    if(action.type === "*")
    {
      throw new Error("No action of maentioned type");
    }
  }

  const defaultState = {
    orders: data,
    filteredOrders: data,
    currentUser: {name: '', email: ''},
    searchBarContent: ''
  }

  const [state, dispatch] = useReducer(reducer,defaultState);

  const handleChange  = (e) => {
    e.preventDefault();
    dispatch({type: "UPDATE_SEARCHBAR",payload: e.target.value});
  }

  const deleteOrder = (e) => {
    e.preventDefault();
    dispatch({type: "DELETE_ORDER",payload: e.target.parentElement.id})
  }

  const addOrder = (id,name,email,product,quantity) => {
    dispatch({type: "ADD_ORDER", payload: {id,name,email,product,quantity}})
  }

  const editOrder = (id, product, quantity) =>
  {
    dispatch({type: "EDIT_ORDER", payload: {id, product, quantity}});
  }

  return (
    
      <div className="App">
        <Router>
        
          <Switch>

            <Route exact path="/">
              <LoginPage />
            </Route>

            <Route path="/home"> 
              <Navbar/>
              <SearchBar onChange={handleChange}/>
              <OrderList data={state.filteredOrders} deleteOrder={deleteOrder}/>
            </Route>

            <Route path="/orders/add-new-order">
              <NewOrderPage addOrder={addOrder}/>
            </Route>

            <Route path="/orders/:id/edit-order">
              <EditOrderPage editOrder={editOrder} orders={state.orders}/>
            </Route>

          </Switch>

        </Router>
      </div>
  );
}

export default App;
