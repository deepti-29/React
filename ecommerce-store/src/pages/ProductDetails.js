import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Import CartContext

const products = [
  {
    id: 1,
    name: 'Television',
    price: 1000,
    description: 'This is Product 1',
    image: 'https://4.imimg.com/data4/RW/GA/ANDROID-30476322/product-500x500.jpeg',
  },
  {
    id: 2,
    name: 'Air Conditioner',
    price: 2000,
    description: 'This is Product 2',
    image: 'https://www.ambientedge.com/wp-content/uploads/2024/04/air-conditioning-unit-on-bedroom-wall-scaled.jpg',
  },
  {
    id: 3,
    name: 'Refrigerarator',
    price: 3000,
    description: 'This is Product 3',
    image: 'https://static.wixstatic.com/media/1bfbc7_7d1b8f3fe41e420ba8201617b53fd833~mv2.png/v1/fill/w_490,h_490,al_c,lg_1,q_85,enc_avif,quality_auto/1bfbc7_7d1b8f3fe41e420ba8201617b53fd833~mv2.png',
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext); // Use CartContext

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="img-fluid" />
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <button
        className="btn btn-primary"
        onClick={() => addToCart(product)} // Add to Cart
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;