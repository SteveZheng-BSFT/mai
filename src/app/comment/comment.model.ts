/**
 * Created by stevezheng on 12/13/16.
 */
export class Comment {
  private votes: number;
  private username: string;
  private content: string;

  constructor(username: string, content: string, votes?: number) {
    this.votes = votes || 0;
    this.content = content;
    this.username = username;
  }

  voteUp(): void {
    this.votes++;
  }

  voteDown(): void {
    this.votes--;
  }

  getVotes(): number {
    return this.votes;
  }

  getUsername(): string {
    return this.username;
  }

  getContent(): string {
    return this.content;
  }

}
