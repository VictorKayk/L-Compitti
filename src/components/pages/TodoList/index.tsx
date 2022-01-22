import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { TodoList as TodoListTemplate } from '../../ui/templates';

export default function TodoList(): ReactElement {
  return <TodoListTemplate title="Todo-list" />;
}
