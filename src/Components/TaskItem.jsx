/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function TaskItem({ item, onDeleteItem, onToggleItem }) {
  const handleDeleteClick = (e) => {
    e.preventDefault();
    onDeleteItem(item.id);
  };
  return (
    <div className="list-item">
      <span>
        <input
          type="checkbox"
          checked={item.terminada}
          onClick={() => onToggleItem(item.id)}
        />
        {item.description}
      </span>
      <a href="" onClick={handleDeleteClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-x"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      </a>
    </div>
  );
}
