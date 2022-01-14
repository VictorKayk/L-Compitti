import { lazy, ReactElement, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Loading } from "./components/atoms/Loading";
import { Home } from "./pages/Home";

const TodoList = lazy(() => import("./pages/TodoList"));
const Todo = lazy(() => import("./pages/Todo"));
const Notepad = lazy(() => import("./pages/Notepad"));
const Notes = lazy(() => import("./pages/Notes"));
const Note = lazy(() => import("./pages/Note"));
const Pomodoro = lazy(() => import("./pages/Pomodoro"));
const NotFound = lazy(() => import("./pages/NotFound"));

export function AppRoutes(): ReactElement {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="todo"
          element={
            <Suspense fallback={<Loading />}>
              <TodoList />
            </Suspense>
          }
        >
          <Route
            path=":list"
            element={
              <Suspense fallback={<Loading />}>
                <Todo />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="notepad"
          element={
            <Suspense fallback={<Loading />}>
              <Notepad />
            </Suspense>
          }
        >
          <Route
            path=":notes"
            element={
              <Suspense fallback={<Loading />}>
                <Notes />
              </Suspense>
            }
          >
            <Route
              path=":id"
              element={
                <Suspense fallback={<Loading />}>
                  <Note />
                </Suspense>
              }
            />
          </Route>
        </Route>
        <Route
          path="pomodoro"
          element={
            <Suspense fallback={<Loading />}>
              <Pomodoro />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}
