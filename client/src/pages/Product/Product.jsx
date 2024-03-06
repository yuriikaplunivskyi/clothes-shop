import { useState } from "react";
import "./product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const data = [
    "https://golis.com.ua/wp-content/uploads/IMG_2850a-400x533.jpg",
    "https://golis.com.ua/wp-content/uploads/2024-01-09-22.14.50a-1000x1333.jpg",
  ]
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          {data.map((img, index) => (
            <img 
              src={img} 
              alt="photo product" 
              key={index} 
              onClick={(e) => setSelectedImg(index)}
              className={selectedImg === index ? "selected" : ""}
            />
          ))}
        </div>
        <div className="mainImg">
          <img src={data[selectedImg]} alt="photo product" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$20</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio doloremque ipsa a blanditiis, corporis dolor eaque maxime omnis deleniti, modi, perspiciatis saepe? Dicta maiores vero ullam quod saepe, eaque illo.

        </p>
        <div className="quantity">
          <button onClick={() => setQuantity(prev => (prev === 1 ? 1: prev -1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon/> 
          ADD TO CARD
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon/> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag: T-Shirt, Women, Top</span>
          </div>
          <hr />
          <div className="info">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
          </div>
      </div>
    </div>
  )
}

export default Product;