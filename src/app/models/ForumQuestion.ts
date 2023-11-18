export interface ForumQuestion {
  id?: number;
  authorId: number;
  question: string;
  createdAt?:Date;
}
