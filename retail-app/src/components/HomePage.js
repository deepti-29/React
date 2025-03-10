import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const products = [
  { id: 1, name: "Dress", price: "₹2,999",  image: "https://5.imimg.com/data5/PT/JD/MY-5727497/stylish-ladies-dresses-500x500.jpg" },
  { id: 2, name: "Jeans", price: "₹1,799",  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBYKI0vWFTwLMBYaoUUnp2xhNry4wfNK5gyg&s" },
  { id: 3, name: "T-Shirt", price: "₹1,299",  image: "https://cdn.lazyshop.com/files/1a87a6d3-b2a6-4904-a8a1-957315abbc4f/product/42e20148e247d96c0b520c6e1767f336.webp?x-oss-process=style%2Fthumb" },
  { id: 4, name: "Jacket", price: "₹4,999", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw5h9_5BDeSdBESsLtCeEBJ-RDDm-CmW_cvQ&s" },
  { id: 5, name: "Sneakers", price: "₹3,499", image: "https://m.media-amazon.com/images/I/51kZRxvxg0L._AC_UY1000_.jpg" },
  { id: 6, name: "Handbag", price: "₹2,599", image: "https://t4.ftcdn.net/jpg/02/02/39/07/360_F_202390749_8T273Qalaj7HwjvW6W4VSiUsNb753vd2.jpg" },
  { id: 7, name: "Watch", price: "₹5,999", image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw43a02c87/images/Titan/Catalog/95141WM01_1.jpg?sw=800&sh=800" },
  { id: 8, name: "Sunglasses", price: "₹999", image: "https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/g/c/gc293br2fp_3_lar.jpg" },
];

const HomePage = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart([...cart, product]); // Add product to cart
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="home-container">
      <h2 className="home-title">Product Catalog</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">₹{product.price}</p>
            <button className="buy-btn" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;