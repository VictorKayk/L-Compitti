import { ReactElement } from 'react';
import { Menu as MenuTemplate } from '../../ui/templates';

export default function Menu(): ReactElement {
  return (
    <MenuTemplate
      title="Menu"
      todo={{
        title: 'todo',
        linkTo: '/todo',
      }}
      note={{
        title: 'note',
        linkTo: '/notepad',
      }}
      pomodoro={{
        title: 'pomodoro',
        linkTo: '/pomodoro',
      }}
      config={{
        title: 'configuration',
        linkTo: '/config',
      }}
    />
  );
}
