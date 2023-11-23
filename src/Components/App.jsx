import { useState, useEffect } from "react";
import Logo from "./Logo";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function App() {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState("input");

  useEffect(() => {
    // Cargo datos desde localStorage al cargar la aplicación
    try {
      const storedItems = JSON.parse(localStorage.getItem("items")) || [];
      setItems((prevItems) => {
        // Solo actualizo si localStorage tiene datos
        return storedItems.length > 0 ? storedItems : prevItems;
      });
    } catch (error) {
      console.error("Error al cargar desde localStorage:", error);
    }
  }, []); // Solo se ejecuta al montar el componente

  useEffect(() => {
    // Guardo el array de tareas en el localStorage cada vez que cambie
    try {
      localStorage.setItem("items", JSON.stringify(items));
    } catch (error) {
      console.error("Error al guardar en localStorage:", error);
    }
  }, [items]);

  function handleAddItems(item) {
    // Actualizo el estado y agrego el nuevo elemento
    setItems((items) => {
      const newItems = [...items, item];

      return newItems;
    });
  }
  const handleSortByChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  function handleDeleteItem(id) {
    // Actualizo el estado y filtro los elementos
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    // Actualizo el estado y cambio el estado a "terminada"
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, terminada: !item.terminada } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Estás seguro de querer borrar toda la lista?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo onClearList={handleClearList} onSortByChange={handleSortByChange} />

      <TaskForm onAddItems={handleAddItems} />
      <TaskList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        sortBy={sortBy}
      />
    </div>
  );
}
