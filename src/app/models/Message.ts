export interface Message {
  authorId: number;
  recipientId: number;
  content: string;
  createdAt?: Date;
}
