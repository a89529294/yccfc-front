import React from "react";

function ListItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li
      style={{
        listStyleImage: 'url("/rooms-showcase/list-item-icon.svg")',
      }}
      className={`list-inside ${className}`}
    >
      {children}
    </li>
  );
}

export default ListItem;
