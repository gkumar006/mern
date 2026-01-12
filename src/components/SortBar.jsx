export default function SortBar() {
    return (
        <div className="sort-bar">
            <span>Sort By:</span>
            <select>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
            </select>
        </div>
    );
}