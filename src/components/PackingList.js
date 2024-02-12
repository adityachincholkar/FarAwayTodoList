import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  Items,
  onDeleteItem,
  onToggleItems,
  onClearItems,
}) {
  const [SortBy, setSortBy] = useState("input");
  let sortedItems;

  if (SortBy === "input") sortedItems = Items;
  if (SortBy === "description")
    sortedItems = Items.slice().sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  if (SortBy === "packed")
    sortedItems = Items.slice().sort((a, b) => +a.packed - +b.packed);
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={SortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sory by description</option>
          <option value="packed">Sort by packed Status</option>
        </select>
        <button onClick={onClearItems}>Clear list</button>
      </div>
    </div>
  );
}
