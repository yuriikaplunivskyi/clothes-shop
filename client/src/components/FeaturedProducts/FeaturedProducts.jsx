import Card from "../Card/Card";
import "./featuredProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({type}) => {
  const dataFake = [
    {
      id: 1,
      img: "https://golis.com.ua/wp-content/uploads/IMG_2850a-400x533.jpg",
      img2: "https://golis.com.ua/wp-content/uploads/2024-01-09-22.14.50a-1000x1333.jpg",
      title: "Robe",
      oldPrice: 19,
      price: 12,
      isNew: true
    },
    {
      id: 2,
      img: "https://golis.com.ua/wp-content/uploads/IMG_9153-1000x1333.jpg",
      title: "Nighty",
      oldPrice: 19,
      price: 12
    },
    {
      id: 3,
      img: "https://golis.com.ua/wp-content/uploads/11zon_IMG_9132-1000x1333.webp",
      title: "Pajamas",
      oldPrice: 19,
      price: 12
    },
    {
      id: 4,
      img: "https://golis.com.ua/wp-content/uploads/3_51.webp-1000x1358.webp",
      title: "Robe",
      oldPrice: 19,
      price: 12
    }
  ]

  const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque iure dolores illo vel facilis veritatis consectetur necessitatibus. Eligendi, possimus impedit et iusto perspiciatis similique labore illum aliquid vero alias!
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  )
}

export default FeaturedProducts