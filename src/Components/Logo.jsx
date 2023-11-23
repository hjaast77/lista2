import BasicMenu from "./BasicMenu";

// eslint-disable-next-line react/prop-types
export default function Logo({ onClearList, onSortByChange }) {
  return (
    <div className="logo">
      <h1>📃 Todo List</h1>
      <BasicMenu onClearList={onClearList} onSortByChange={onSortByChange} />
    </div>
  );
}
