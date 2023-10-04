export interface Message {
  id: number;
  authorId: number;
  recipientId: number;
  content: string;
  isOpen: boolean;
}
