import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]); // global state

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function handleClearAll() {
    const confirmed = window.confirm(
      "Are you sure you want to clear ALL items?",
    );
    if (!confirmed) return;
    setItems([]);
  }

  function handleClearPacked() {
    const hasPacked = items.some((item) => item.packed);
    if (!hasPacked) return;
    const confirmed = window.confirm(
      "Are you sure you want to remove all packed items?",
    );
    if (!confirmed) return;
    setItems((items) => items.filter((item) => !item.packed));
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearAll={handleClearAll}
        onClearPacked={handleClearPacked}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🌴 PackMate ��</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description.trim()) return;

    const newItem = {
      description: description.trim(),
      quantity,
      packed: false,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button disabled={!description.trim()}>Add</button>
    </form>
  );
}

function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearAll,
  onClearPacked,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems = items;

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  const numPacked = items.filter((item) => item.packed).length;
  const numUnpacked = items.length - numPacked;

  return (
    <div className="list">
      <div className="list-header">
        <span>
          Items: {items.length} | Packed: {numPacked} | Left: {numUnpacked}
        </span>

        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>

          <button
            type="button"
            onClick={onClearPacked}
            disabled={numPacked === 0}
          >
            Clear packed
          </button>

          <button
            type="button"
            onClick={onClearAll}
            disabled={items.length === 0}
          >
            Clear all
          </button>
        </div>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        <span
          style={
            item.packed
              ? { textDecoration: "line-through", opacity: 0.6 }
              : undefined
          }
        >
          {item.quantity} × {item.description}
        </span>
      </label>
      <button
        className="delete-btn"
        type="button"
        onClick={() => onDeleteItem(item.id)}
      >
        ❌
      </button>
    </li>
  );
}

function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  const lastUpdated =
    items.length > 0
      ? new Date(
          Math.max(
            ...items.map((item) => new Date(item.createdAt || Date.now())),
          ),
        ).toLocaleString()
      : null;

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `👜 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%).`}
      </em>
      {lastUpdated && (
        <span className="last-updated">
          Last item added: <strong>{lastUpdated}</strong>
        </span>
      )}
    </footer>
  );
}