import {Link} from "react-router-dom";
import "./card.scss";

const Card = ({item}) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
    <div className="card">
      <div className="image">
        {item.isNew && <span>New Season</span>}
        <img src={item.img} alt="photo of product" className="mainImg"/>
        {item.img2 ?(<img src={item.img2} alt="photo of product" className="secondImg"/>): null}
      </div>
      <h2>{item.title}</h2>
      <div className="prices">
        <h3>${item.oldPrice}</h3>
        <h3>${item.price}</h3>
      </div>
    </div>
    </Link>
  )
}

export default Card