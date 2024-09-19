type Block = {
  id: number;
  type: string | null;
  title: string;
  date: Date | null;
  startTime: Date | null;
  endTime: Date | null;
  travelTime: number | null;
  category: string | null;
};
type Task = {
  id: number;
  type: 'task';
  title: string;
  date: Date;
  startTime: Date;
  endTime: Date;
  travelTime: number;
  category: string | null;
};

export const task: Block = {
  id: 1,
  type: 'task',
  title: 'Sample task',
  date: new Date(2024, 10, 21),
  startTime: new Date(2024, 10, 21, 10, 0, 0),
  endTime: new Date(2024, 10, 21, 12, 0, 0),
  travelTime: 30,
  category: 'private',
};

export const todo: Block = {
  id: 2,
  type: 'todo',
  title: 'Sample Todo',
  date: null,
  startTime: null,
  endTime: null,
  travelTime: null,
  category: 'private',
};

export const tasks: Task[] = [
  {
    id: 1,
    type: 'task',
    title: 'Sample task',
    date: new Date(2024, 10, 21),
    startTime: new Date(2024, 10, 21, 10, 0, 0),
    endTime: new Date(2024, 10, 21, 12, 0, 0),
    travelTime: 30,
    category: 'private',
  },
  {
    id: 3,
    type: 'task',
    title: 'Sample task 3',
    date: new Date(2024, 10, 21),
    startTime: new Date(2024, 10, 21, 14, 0, 0),
    endTime: new Date(2024, 10, 21, 15, 0, 0),
    travelTime: 60,
    category: 'work',
  },
  {
    id: 4,
    type: 'task',
    title: 'Sample task 4',
    date: new Date(2024, 10, 21),
    startTime: new Date(2024, 10, 21, 19, 0, 0),
    endTime: new Date(2024, 10, 21, 19, 30, 0),
    travelTime: 0,
    category: 'private',
  },
];
