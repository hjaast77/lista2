import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function TaskForm({ onAddItems }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, terminada: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-list"
          placeholder="Agregá algo a tu lista"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </form>
    </>
  );
}
