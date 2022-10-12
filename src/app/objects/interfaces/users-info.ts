export interface IUsersInfo {
  getBirthday(): Date;
  getCreationDate(): Date;
  setEmail(email: string): void;
  getEmail(): string;
  setFirstname(firstname: string): void;
  getFirstname(): string;
  setLastname(lastname: string): void;
  getLastname(): string;
  setPhone(phone: number): void;
  getPhone(): number;
  getRole(): string;
  getUsername(): string;
}
