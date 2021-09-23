import { useState } from "react";
import {Link} from "react-router-dom";

const NewOrderPage = (props) => {
    const {addOrder} = props;
    
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [product,setProduct] = useState('');
    const [quantity,setQuantity] = useState(1); 

    const handleSubmit = (e) => {
        
        e.preventDefault();
        const id = new Date().getTime().toString();
        addOrder(id,name,email,product,quantity);
    }

    return (
                <div className="add-order-container">
                    <h2>Create Your Order</h2>
                    <form className="add-order-form">
                        <div className="form-group">
                            <label htmlFor="customer_name">Name</label>
                            <input type="text" id="customer_name" className="form-control" placeholder="Customer Name" name="customer_name" value={name} onChange={(e) => setName(e.target.value)}/>  
                        </div>

                        <div className="form-group">
                            <label htmlFor="customer_email">Email</label>
                            <input type="email" id="customer_email" className="form-control" placeholder="Customer Email" name="customer_email" value={email} onChange={(e) => setEmail(e.target.value)}/>  
                        </div>

                        <div className="form-group">
                            <label htmlFor="product">Product</label>
                            <input type="text" id="product" className="form-control" placeholder="Product" name="product" value={product} onChange={(e) => setProduct(e.target.value)}/>  
                        </div>

                        <div className="form-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input type="number" id="quantity" className="form-control" placeholder="Quantity" name="quantity" value={quantity} min="1" max="10" onChange={(e) => setQuantity(e.target.value)}/>  
                        </div>

                        <button className="btn btn-primary" onClick={handleSubmit} type="submit">Add Order</button>
                        <Link to="/home"><button className="btn btn-dark">Go Back</button></Link>
                    </form>
                </div>
    );
}

export default NewOrderPage;