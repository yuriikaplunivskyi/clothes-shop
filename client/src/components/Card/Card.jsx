import {Link} from "react-router-dom";
import "./card.scss";

const Card = ({item}) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
    <div className="card">
      <div className="image">
        {item?.attributes.isNew && <span>New Season</span>}
        <img 
          src={import.meta.env.VITE_UPLOAD_URL+item?.attributes?.img?.data?.attributes.url} 
          alt="photo of product" 
          className="mainImg"
        />
        {item?.attributes?.img2?.data && (
          <img
            src={import.meta.env.VITE_UPLOAD_URL + item?.attributes?.img2?.data[0]?.attributes?.url}
            alt="photo of product"
            className="secondImg"
          />
        )}
      </div>
      <h2>{item?.attributes.title}</h2>
      <div className="prices">
        {item?.attributes.salePrice ?(
          <>
          <h3 className="salePrice">₴{item?.attributes.price}</h3>
          <h3 >₴{item?.attributes.salePrice}</h3>
          </>): 
          <h3>₴{item?.attributes.price}</h3>
        }
      </div>
    </div>
    </Link>
  )
}

export default Card