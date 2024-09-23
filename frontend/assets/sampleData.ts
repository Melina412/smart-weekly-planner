import type { Item, Block, Todo, Task, Appointment } from '@/constants/types';

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

export const todo: Todo = {
  id: 2,
  type: 'todo',
  title: 'Sample Todo',
  date: null,
  startTime: null,
  endTime: null,
  travelTime: null,
  category: 'private',
  dueDate: new Date(2024, 10, 30, 12, 0, 0),
  plannedTime: 120,
};

export const todos: Todo[] = [
  {
    id: 2,
    type: 'todo',
    title: 'Sample Todo 2',
    date: null,
    startTime: null,
    endTime: null,
    travelTime: null,
    category: 'private',
    dueDate: new Date(2024, 10, 30, 12, 0, 0),
    plannedTime: 120,
  },
  {
    id: 5,
    type: 'todo',
    title: 'Sample Todo 5',
    date: null,
    startTime: null,
    endTime: null,
    travelTime: null,
    category: 'private',
    dueDate: new Date(2024, 10, 30, 12, 0, 0),
    plannedTime: 120,
  },
];

export const items: Item[] = [
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
    type: 'appointment',
    title: 'Sample appointment',
    date: new Date(2024, 10, 21),
    startTime: new Date(2024, 10, 21, 19, 0, 0),
    endTime: new Date(2024, 10, 21, 19, 30, 0),
    travelTime: 0,
    category: 'private',
  },
];
