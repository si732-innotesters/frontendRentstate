export interface ForumAnswer {
  questionId: number;
  authorId:number
  authorName?: string;
  content: string;
  createdAt:Date;
}
