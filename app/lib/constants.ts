export const CATEGORIES = [
  'Food',
  'Transport',
  'Groceries',
  'Utilities',
  'Health',
  'Entertainment',
  'Shopping',
  'Education',
  'Gift'
] as const;

export const METHODS = ['Cash', 'QRIS', 'Bank'] as const;

export const SOURCES = ['Kikik', 'Hasna', 'Together'] as const;

export type Category = (typeof CATEGORIES)[number];
export type Method = (typeof METHODS)[number];
export type Source = (typeof SOURCES)[number];
