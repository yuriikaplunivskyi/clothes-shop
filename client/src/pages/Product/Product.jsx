import { useEffect, useState } from "react";
import "./product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";


const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const {data, loading, error} = useFetch(`/products/${id}?populate=*`);


  console.log(data?.attributes)
  return (
    <div className="product">
      {loading ? (
        "loading"
        ): 
        (<>
        <div className="left">
          <div className="images">
            <img
              onClick={() => setSelectedImg("")}
              className={selectedImg === "" ? "selected" : ""}
              src={import.meta.env.VITE_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} 
              alt="photo product"
            />
            {data?.attributes?.img2?.data?.map((img, index) => (
              <img 
                src={import.meta.env.VITE_UPLOAD_URL + img?.attributes?.url} 
                alt="photo product" 
                key={index} 
                onClick={(e) => {
                  setSelectedImg(index);
                }}
                className={selectedImg === index ? "selected" : ""}
              />
            ))}
          </div>
          <div className="mainImg">
            <img src={import.meta.env.VITE_UPLOAD_URL + (selectedImg === "" ? data?.attributes?.img?.data?.attributes?.url : selectedImg === data?.attributes?.img2?.data?.length ? data?.attributes?.img?.data?.attributes?.url : data?.attributes?.img2?.data[selectedImg]?.attributes?.url)} alt="photo product"/>
          </div>
        </div>

        <div className="right">
          <h1>{data?.attributes?.title}</h1>
          <span className="price">
            {data?.attributes.salePrice ?(
            <>
              <h3 className="salePrice">₴{data?.attributes?.price}</h3>
              <h3 >₴{data?.attributes?.salePrice}</h3>
            </>): 
            <h3>₴{data?.attributes?.price}</h3>
            }
          </span>
          <p>{data?.attributes?.desc}</p>
          <div className="quantity">
            <button onClick={() => setQuantity(prev => (prev === 1 ? 1: prev -1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
          </div>
          <button 
            className="add" 
            onClick={() => dispatch(addToCart({
              id: data.id,
              title: data.attributes.title,
              desc: data.attributes.desc,
              price: 
                data.attributes.salePrice ? 
                data.attributes.salePrice : 
                data.attributes.price,
              img: data.attributes.img.data.attributes.url,
              quantity: quantity
            }))}>
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
              <span>Vendor: {data?.attributes?.vendor}</span>
              <span>Product Type: {
                data?.attributes?.sub_categories?.data?.map((item, index, array )=>(
                  <span key={item.id}>
                    {item?.attributes?.title}
                    {index !== array.length - 1 && ', '}
                  </span>
                  ))
                }
              </span>
              <span>Tag: 
                {data?.attributes?.categories?.data?.map((item )=>(
                  <span key={item.id}>
                    {item?.attributes?.title}{", "}
                  </span>
                ))}
                {data?.attributes?.sub_categories?.data?.map((item, index, array )=>(
                  <span key={item.id}>
                    {item?.attributes?.title}
                    {index !== array.length - 1 && ', '}
                  </span>
                ))}
              </span>
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
        </>)}
    </div>
  )
}

export default Product;