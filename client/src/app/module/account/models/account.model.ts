export default interface User {
  id?: number;
  email: string;
  password: string;
  comfirmPassword?: string;
  username?: string;
  authenticationToken?: string;
  fullName?: string;
  role?: string;
  position?: string;
}
