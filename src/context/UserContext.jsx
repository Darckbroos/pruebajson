import {createContext} from "react";

const UserContext = createContext({
  icons: null,
  inputValues: 'open',
});

export default UserContext;