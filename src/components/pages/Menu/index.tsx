import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu as MenuTemplate } from '../../ui/templates';

export default function Menu(): ReactElement {
  const { t } = useTranslation();

  return (
    <MenuTemplate
      title="Menu"
      todo={{
        title: t('todo'),
        linkTo: '/todo',
      }}
      note={{
        title: t('notepad'),
        linkTo: '/notepad',
      }}
      pomodoro={{
        title: t('pomodoro'),
        linkTo: '/pomodoro',
      }}
      config={{
        title: t('configuration'),
        linkTo: '/config',
      }}
    />
  );
}
