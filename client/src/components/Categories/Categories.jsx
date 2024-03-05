import { Link } from "react-router-dom";
import "./categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src="https://golis.com.ua/wp-content/uploads/IMG_1639-1000x1333.jpg" alt="photo of products" />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img src="https://golis.com.ua/wp-content/uploads/IMG_9152-822x1024.jpg" alt="photo of products" />
          <button>
            <Link className="link" to="/products/1">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="https://golis.com.ua/wp-content/uploads/IMG_9153-1000x1333.jpg" alt="photo of products" />
          <button>
            <Link className="link" to="/products/1">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="https://golis.com.ua/wp-content/uploads/img-2726-1000x1333.webp" alt="photo of products" />
              <button>
                <Link className="link" to="/products/1">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="https://golis.com.ua/wp-content/uploads/DSC_6490-683x1024.jpg" alt="photo of products" />
              <button>
                <Link className="link" to="/products/1">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="https://golis.com.ua/wp-content/uploads/DSC_6488-683x1024.jpg" alt="photo of products" />
          <button>
            <Link className="link" to="/products/1">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories