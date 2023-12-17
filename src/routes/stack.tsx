import Register from "../screens/Register";
import Reset from "../screens/Reset";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Reset" component={Reset} />
    </Stack.Navigator>
  );
}