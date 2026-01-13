export default function ProductCard({ product, onAddToCart }) {
    return (
        <div className="card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
            <p>⭐ {product.rating.rate}</p>
            <button onClick={onAddToCart}>Add to Cart</button>
        </div>
    );
}