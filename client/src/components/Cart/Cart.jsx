import "./cart.scss";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://golis.com.ua/wp-content/uploads/IMG_2850a-400x533.jpg",
      img2: "https://golis.com.ua/wp-content/uploads/2024-01-09-22.14.50a-1000x1333.jpg",
      title: "Robe",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, nisi excepturi? Dolor amet quos nihil officia animi maiores soluta quas quia rem, provident, placeat sequi quam vitae et porro quasi!",
      oldPrice: 19,
      price: 12,
      isNew: true
    }
  ]
  console.log(data[0].desc.length)
  return (
    <div className="cart">
      <h2>Products in your cart</h2>
      {data?.map(item => (
        <div className="item" key={item.id}>
          <img src={item.img} alt={item.title} />
          <div className="details">
            <h2>{item.title}</h2>
            <p>{item.desc.length > 100 ? `${item.desc?.substring(0,100)}...`:item.desc}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete"/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$13313</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart