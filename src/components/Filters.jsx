export default function Filters() {
    return (
        <aside className="filters">
            <h3>Filters</h3>
            <label>
                Category
                <select>
                    <option>All</option>
                    <option>Electronics</option>
                    <option>Fashion</option>
                </select>
            </label>


            <label>
                Price
                <input type="range" min="0" max="100000" />
            </label>
        </aside>
    );
}