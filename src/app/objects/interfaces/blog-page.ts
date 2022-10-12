export interface IBlogPage {
  getTitle(): string;
  getContent(): string;
  getDate(): Date;
  getComments(): [];
}
