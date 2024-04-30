export interface IComment {
  comment_id: number;
  text: string;
  article_id: number;
  user_id: number,
  username: string,
  avatar?: string;
}
