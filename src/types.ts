export interface INote {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface INoteMetadata {
  id: string;
  title: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  preview: string;
}

export type NoteSearchOptions = {
  query?: string;
  tags?: string[];
  sortBy?: "createdAt" | "updatedAt" | "title";
  sortOrder?: "asc" | "desc";
};
