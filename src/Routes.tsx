import { lazy, ReactElement, Suspense } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import { Loading } from './components/ui/atoms/Loading';
import { Home } from './components/pages/Home';
import { App } from './App';

const Menu = lazy(() => import('./components/pages/Menu'));
const TodoList = lazy(() => import('./components/pages/TodoList'));
const Todo = lazy(() => import('./components/pages/Todo'));
const Notepad = lazy(() => import('./components/pages/Notepad'));
const Notes = lazy(() => import('./components/pages/Notes'));
const Note = lazy(() => import('./components/pages/Note'));
const Pomodoro = lazy(() => import('./components/pages/Pomodoro'));
const NotFound = lazy(() => import('./components/pages/NotFound'));

export function AppRoutes(): ReactElement {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route
            path="/menu"
            element={
              <Suspense fallback={<Loading />}>
                <Menu />
              </Suspense>
            }
          />
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
        </Route>
      </Routes>
    </Router>
  );
}
