export interface todo {
  content: string;
  __v: number;
  _id: string;
}

export interface todos {
  todos: Array<todo>;
}
