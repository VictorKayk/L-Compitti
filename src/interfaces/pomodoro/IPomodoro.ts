export interface IPomodoro {
  id: string;
  type?: 'focus' | 'shortBreak' | 'longBreak';
  start: Date;
  end: Date | null;
}
