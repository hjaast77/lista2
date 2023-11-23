/* eslint-disable react/prop-types */

import TaskItem from "./TaskItem";

export default function TaskList({
  items,
  onDeleteItem,
  onToggleItem,
  sortBy,
}) {
  let sortedItems;

  // Orden original del array
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    // Orden alfabético
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "terminada")
    // Orden por estado
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.terminada) - Number(b.terminada));

  const numItems = items.length;
  const numTerminadas = items.filter((item) => item.terminada).length;
  const porcentaje = Math.round((numTerminadas / numItems) * 100);

  return (
    <>
      <div className="todos">
        {!sortedItems.length ? (
          ""
        ) : (
          <>
            {sortedItems.map((item) => (
              <div
                key={item.id}
                className={`${item.terminada ? "completas" : "incompletas"}`}
              >
                <TaskItem
                  item={item}
                  onDeleteItem={onDeleteItem}
                  onToggleItem={onToggleItem}
                />
              </div>
            ))}
          </>
        )}
      </div>
      <div className="footer">
        <em>
          {items.length === 0
            ? "Tu lista está vacía"
            : porcentaje === 100
            ? "Increible, completaste tu lista!!"
            : `Tu lista tiene ${numItems} tareas y has completado ${numTerminadas} (
        ${porcentaje}%)`}
        </em>
      </div>
    </>
  );
}
