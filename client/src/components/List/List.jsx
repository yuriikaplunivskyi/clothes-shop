import "./list.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({subCategory, maxPrice, sort, categoryId}) => {

  const {data, loading, error} = useFetch(`/products?populate=*&[filters][categories][id]=${categoryId}${subCategory.map(
    (item) => `&[filters][sub_categories][id][$eq]=${item}`
  )}&[filters][price][$lte]=${maxPrice}${sort ? `&sort=price:${sort}` : ""}`);
  
  return (
    <div className="list">
      {loading ? "loading": data?.map(item=>(
        <Card item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default List;