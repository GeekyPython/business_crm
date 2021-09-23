import { Link, useParams} from "react-router-dom";
import {useState} from "react";

const EditOrderPage = (props) => {

    const {editOrder,orders} = props;
    const {id} = useParams();

    const currentOrder = orders.find(elem => elem.id === id);
    const name = currentOrder.customer_name;
    const email = currentOrder.customer_email;
    const [product,setProduct] = useState('');
    const [quantity,setQuantity] = useState(1);

    const handleClick = (e) => {
        e.preventDefault();
        if(product && quantity)
        {
            editOrder(id,product,quantity);
        }
    }   

    return (
        <div className="edit-orders-container">
            <h1>Edit Order</h1>
            <form className="edit-order-form">

                <h3>{name ? name : "Name"}</h3>
                <h4>{email ? email : "email@email.com"}</h4>

                <div className="form-group">
                    <label htmlFor="product">Product</label>
                    <input type="text" className="form-control" name="product" id="product" value={product} onChange={(e) => setProduct(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <input type="number" className="form-control" name="quantity" id="quantity" min="1" max="10" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleClick}>Edit Order</button>
                <Link to="/home"><button type="submit" className="btn btn-dark">Go Back</button></Link>
            </form>
        </div>
    );
}

export default EditOrderPage;