export default function Header({ cartCount }) {
    return (
        <header className="header">
            <h1>ShopEasy</h1>
            <div className="cart">🛒 Cart ({cartCount})</div>
        </header>
    );
}