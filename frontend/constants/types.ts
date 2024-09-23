export type Item = {
  id: number;
  type: 'task' | 'appointment' | 'routine';
  title: string;
  date: Date;
  startTime: Date;
  endTime: Date;
  travelTime: number;
  category?: string | null;
};

export type Block = {
  id: number;
  type: string | null;
  title: string;
  date: Date | null;
  startTime: Date | null;
  endTime: Date | null;
  travelTime: number | null;
  category: string | null;
};

export type Todo = {
  id: number;
  type: string | null;
  title: string;
  date: Date | null;
  startTime: Date | null;
  endTime: Date | null;
  travelTime: number | null;
  category: string | null;
  dueDate: Date | null;
  plannedTime: number | null;
};

export type Task = {
  id: number;
  type: 'task';
  title: string;
  date: Date;
  startTime: Date;
  endTime: Date;
  travelTime: number;
  category: string | null;
};

export type Appointment = {
  id: number;
  type: 'appointment';
  title: string;
  date: Date;
  startTime: Date;
  endTime: Date;
  travelTime: number;
  category: string | null;
};
