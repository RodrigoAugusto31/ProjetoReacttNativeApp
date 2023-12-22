import { createContext } from "react";

export type IUser = {
  name: string;
  email: string;
  token: string | null;
};

type IUserContext = {
  user: IUser | null;
  setUser: (userData: IUser) => void;
};

const UserContext = createContext<IUserContext>({
  user: null,
  setUser: () => {},
});

export default UserContext;