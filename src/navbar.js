import {Link} from 'react-router-dom';

const Navbar = (props) => {
    const {name, email} = props;

    return (
                    <nav>
                        <div className="userInfo">
                            <div>
                                <h4>{name ? name : "Name"}</h4>  
                                <p>{email ? email : "sample@sample.com"}</p>
                                <Link to="/"><button className="btn btn-dark" style={{float: "left"}}>Logout</button></Link>
                            </div>          
                        </div>
                        
                            <Link to="/orders/add-new-order">
                                <button className="btn btn-primary" >
                                    Create New Order
                                </button>
                            </Link>
                    </nav>
    );
}  

export default Navbar;