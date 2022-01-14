import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

export default function Notes(): ReactElement {
  return (
    <>
      <h2>Notes</h2>
      <Outlet />
    </>
  );
}
