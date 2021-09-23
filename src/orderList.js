import {Link} from 'react-router-dom';

const OrderList = (props) => {
    const {data,deleteOrder} = props;

    return (
                <div className="orders-container">
                    {
                        data.map(order => {
                            const {id,customer_name,customer_email,product,quantity} = order;

                            return (
                                <div className="order" key={id}>
                                    <div className="order-info">
                                        <h4>{customer_name}</h4>
                                        <h5>{customer_email}</h5>
                                        <p><b>{product}</b>: {quantity} nos.</p>
                                    </div>

                                    <div className="order-controls" id={id}>
                                        <Link to={`/orders/${id}/edit-order`}><button className="btn btn-primary">Edit</button></Link>
                                        <button className="btn btn-danger" onClick={deleteOrder}>Delete</button>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
    );
}

export default OrderList;