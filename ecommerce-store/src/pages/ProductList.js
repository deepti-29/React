import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Television',
    price: 1000,
    image: 'https://4.imimg.com/data4/RW/GA/ANDROID-30476322/product-500x500.jpeg', // Add image URL
  },
  {
    id: 2,
    name: 'Air Conditioner',
    price: 2000,
    image: 'https://www.ambientedge.com/wp-content/uploads/2024/04/air-conditioning-unit-on-bedroom-wall-scaled.jpg', // Add image URL
  },
  {
    id: 3,
    name: 'Refrigerator',
    price: 3000,
    image: 'https://static.wixstatic.com/media/1bfbc7_7d1b8f3fe41e420ba8201617b53fd833~mv2.png/v1/fill/w_490,h_490,al_c,lg_1,q_85,enc_avif,quality_auto/1bfbc7_7d1b8f3fe41e420ba8201617b53fd833~mv2.png', // Add image URL
  },
];

const ProductList = () => {
  return (
    <div>
      <h1>Products</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <Link to={`/products/${product.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;