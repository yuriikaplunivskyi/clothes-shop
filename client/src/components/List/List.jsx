import "./list.scss";
import Card from "../Card/Card";

const List = () => {

  const data = [
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

  return (
    <div className="list">{data?.map(item=>(
      <Card item={item} key={item.id}/>
    ))}</div>
  )
}

export default List;