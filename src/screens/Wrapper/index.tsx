import Home from "../Home";
import { useContext } from "react";
import UserContext from "../../context/user";
import Login from "../Login";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StackNavigation } from "../../routes/stack";
import Register from "../Register";

const Tab = createMaterialTopTabNavigator();

export default function Wrapper() {
  const userData = useContext(UserContext);
  return userData.user != null ? (
    <Home />
  ) : (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Register" component={StackNavigation} />
    </Tab.Navigator>
  );
}