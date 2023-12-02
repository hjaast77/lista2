import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// eslint-disable-next-line react/prop-types
export default function BasicMenu({ onClearList, onSortByChange }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClearList = () => {
    onClearList();
    handleClose();
  };

  const handleSortBy = (newSortBy) => {
    onSortByChange(newSortBy);
    handleClose();
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <div className="menu-puntitos">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleSortBy("input")}>
          Orden por defecto
        </MenuItem>
        <MenuItem onClick={() => handleSortBy("description")}>
          Orden Alfabético
        </MenuItem>
        <MenuItem onClick={() => handleSortBy("terminada")}>
          Orden por Estado
        </MenuItem>
        <MenuItem onClick={handleClearList}>Limpiar</MenuItem>
      </Menu>
    </div>
  );
}
