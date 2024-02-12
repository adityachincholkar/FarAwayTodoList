import { useState } from "react";
import Logo from "./logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [Items, setItems] = useState([]);
  function HandelClearAll() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  function HandelAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function HandelDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function HandelToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={HandelAddItems} />
      <PackingList
        Items={Items}
        onDeleteItem={HandelDeleteItem}
        onToggleItems={HandelToggleItem}
        onClearItems={HandelClearAll}
      />
      <Stats items={Items} />
    </div>
  );
}
