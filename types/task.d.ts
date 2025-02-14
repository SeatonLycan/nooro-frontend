export interface Task {
  id: number;
  title: string;
  color: string;
  completed: boolean;
  createdAt: string;
}

export interface NewTask {
  title: string;
  color: string;
}