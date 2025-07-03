export interface NodeData {
  id: string;
  a: number;
  b: number;
  c: number;
}

export interface Link {
  from: string;
  to: string;
  label?: string;
}
