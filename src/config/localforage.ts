import localforage from 'localforage';

localforage.config({
  name: "L'Compiti",
  description: "Database for the app L'Compiti.",
});

export const todoDatabase = localforage.createInstance({
  name: "L'Compiti",
  storeName: 'todo',
  description: 'Database for todo.',
});

export const notepadDatabase = localforage.createInstance({
  name: "L'Compiti",
  storeName: 'notepad',
  description: 'Database for notepad.',
});

export const pomodoroDatabase = localforage.createInstance({
  name: "L'Compiti",
  storeName: 'pomodoro',
  description: 'Database for pomodoro.',
});
