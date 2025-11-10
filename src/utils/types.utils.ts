export type ValueOf<T> = T[keyof T];
export type IndexOf<T> = T & { [key: string]: ValueOf<T> };
