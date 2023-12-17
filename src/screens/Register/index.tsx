import { Flex, Heading, Input, Button as NativeBaseButton } from "native-base";
import { useContext, useState } from "react";
import Button from "../../components/Button";
import UserContext from "../../context/user";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const userData = useContext(UserContext);

  const navigator = useNavigation();

  userData.user?.token;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = () => {};

  return (
    <Flex p={5} flex={1} justifyContent="center" alignItems="center">
      <Heading>Tela cadastro</Heading>
      <Input mt={2} onChangeText={(value) => setUsername(value)} />
      <Input mt={2} onChangeText={(value) => setPassword(value)} />
      <Flex width="100%">
        <Button content="Register" handleClick={handleRegister} />
        <NativeBaseButton onPress={() => navigator.navigate("Reset")}>
          Esqueci a minha senha
        </NativeBaseButton>
      </Flex>
    </Flex>
  );
}