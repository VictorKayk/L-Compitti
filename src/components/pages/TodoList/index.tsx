import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

export default function TodoList(): ReactElement {
  return (
    <>
      <h2>Todo List</h2>
      <Outlet />
    </>
  );
}
