import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import THEME from "./src/theme";
import UserContext, { IUser } from "./src/context/user";
import Wrapper from "./src/screens/Wrapper";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { MMKV } from "react-native-mmkv";

export const storage = new MMKV({
  id: "movieapp",
});

export default function App() {
  //
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    if (user != null) {
      storage.set("user", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    const userDb = storage.getString("user");
    if (userDb) {
      setUser(JSON.parse(userDb));
    }
  }, []);

  return (
    <NativeBaseProvider theme={THEME}>
      <UserContext.Provider value={{ user: user, setUser }}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Wrapper />
        </NavigationContainer>
      </UserContext.Provider>
    </NativeBaseProvider>
  );
}
