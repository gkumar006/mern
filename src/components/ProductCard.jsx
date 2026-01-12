export default function ProductCard({ product }) {
    return (
        <div className="card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
            <p>⭐ {product.rating}</p>
            <button>Add to Cart</button>
        </div>
    );
}