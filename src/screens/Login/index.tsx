import { Flex, Heading, Input } from "native-base";
import { Alert } from "react-native";
import { useContext, useState } from "react";
import Button from "../../components/Button";
import UserContext from "../../context/user";
import { login } from "../../services/auth";

export default function Login() {
  const userData = useContext(UserContext);

  userData.user?.token;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    login({
      username: username,
      password: password,
    })
      .then(function (response) {
        userData.setUser({
          name: "raj31",
          email: "teste@gmail.com",
          token: response.data.token,
        });
      })
      .catch(function (error) {
        console.error("error", error);
        Alert.alert("Error", "usuário ou senha inválidos");
      });
  };

  return (
    <Flex p={5} flex={1} justifyContent="center" alignItems="center">
      <Heading>Tela de login</Heading>
      <Input mt={2} onChangeText={(value) => setUsername(value)} />
      <Input mt={2} onChangeText={(value) => setPassword(value)} />
      <Flex width="100%">
        <Button content="Sign in" handleClick={handleLogin} />
        <Button content="Register" handleClick={handleLogin} />
      </Flex>
    </Flex>
  );
}