export interface IPomodoro {
  id: string;
  type: string;
  start: Date;
  end: Date | null;
}
