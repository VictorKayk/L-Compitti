import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

export default function Notepad(): ReactElement {
  return (
    <>
      <h2>Notepad</h2>
      <Outlet />
    </>
  );
}
