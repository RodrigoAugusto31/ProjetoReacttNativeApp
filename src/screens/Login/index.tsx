import { Flex, Heading, Input } from "native-base";
import { Alert } from "react-native";
import { useContext } from "react";
import Button from "../../components/Button";
import UserContext from "../../context/user";
import axios from "axios";

export default function Login() {
  const userData = useContext(UserContext);

  userData.user?.token

  const handleLogin = () => {
    console.log("chamou");
    axios
      .post("http://10.0.2.2:3000/user/login", {
        username: "gabriel",
        password: "1234",
      })
      .then(function (response) {
        userData.setUser({
          name: "Gabriel",
          email: "gabrielgs1408@gmail.com",
          token: response.data.token
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
      <Input mt={2} />
      <Input mt={2} />
      <Flex width="100%">
        <Button content="Sign in" handleClick={handleLogin} />
      </Flex>
    </Flex>
  );
}