export interface ITodo {
  id: string;
  name: string;
  isFinished?: boolean;
  notification: Date | null;
}
