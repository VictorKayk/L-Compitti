export interface ISetPomodoro {
  id?: string;
  type?: 'focus' | 'shortBreak' | 'longBreak';
  start?: Date;
  end?: Date | null;
}
