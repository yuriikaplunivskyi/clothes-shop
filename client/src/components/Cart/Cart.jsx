import { useDispatch, useSelector } from "react-redux";
import "./cart.scss";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { removeItem, resetCart } from "../../redux/cartReducer";

const Cart = () => {
  const products = useSelector( state => state.cart.products );
  const dispatch = useDispatch();
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  }

  return (
    <div className="cart">
      <h2>Products in your cart</h2>
      {products?.map(item => (
        <div className="item" key={item.id}>
          <div className="container">
            <img src={import.meta.env.VITE_UPLOAD_URL + item.img} alt={item.title} />
            <div className="details">
              <h2>{item.title}</h2>
              <p>{item.desc.length > 100 ? `${item.desc?.substring(0,100)}...`:item.desc}</p>
              <div className="price">{item.quantity} x ₴{item.price}</div>
            </div>
          </div>
          <DeleteOutlinedIcon className="delete" onClick={() => dispatch(removeItem(item.id))}/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>₴{totalPrice()}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart