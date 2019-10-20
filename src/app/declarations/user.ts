export interface User {
  id: Number | String;
  firstName: String;
  lastName: String;
}

export class User implements User {
  id: Number | String;
  firstName: String;
  lastName: String;
}
