import "./products.scss";
import { useParams} from "react-router-dom";
import List from "../../components/List/List";
import { useState } from "react";

const Products = () => {

  const categoryId = parseInt(useParams().id);

  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" name="" id="1" value={1}/>
            <label htmlFor="1">Robe</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" name="" id="2" value={2}/>
            <label htmlFor="2">Pajamas</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" name="" id="3" value={3}/>
            <label htmlFor="3">Nighty</label>
          </div>

        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sorted by</h2>
          <div className="inputItem">
            <input type="radio" name="price" id="lowest" value="lowest" onChange={(e) => setSort("lowest")}/>
            <label htmlFor="lowest"> Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" name="price" id="highest" value="highest" onChange={(e) => setSort("highest")}/>
            <label htmlFor="highest"> Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="https://www.ikea.com/images/a-gray-green-taellasen-upholstered-bed-frame-with-privacy-sc-88f435346a1c1f0df3b1a984a24d2334.jpg?f=sg" alt="bedroom photo" className="catImg" />
        <List categoryId={categoryId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products