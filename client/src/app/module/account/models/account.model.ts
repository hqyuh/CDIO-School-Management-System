export default interface User {
  email: string;
  password: string;
  comfirmPassword?: string;
  username?: string;
  authenticationToken?: string;
  role?: string;
}
