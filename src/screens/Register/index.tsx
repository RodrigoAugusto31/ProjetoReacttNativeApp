import React, { useState, useContext } from "react";
import { Flex, Heading, Input } from "native-base";
import { Alert } from "react-native";
import Button from "../../components/Button";
import axios from "axios";
import UserContext from "../../context/user";

export default function Register() {
  const userData = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [email, setUseremail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("chamou");
    axios
      .post("http://10.0.2.2:3000/user/Register", {
        username: username,
        password: password,
      })
      .then(function (response) {
        userData.setUser({
          name: username,
          email: email,
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
      <Heading>Tela de registro</Heading>
      <Input
        mt={2}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
       <Input
        mt={2}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setUseremail(text)}
      />
      <Input
        mt={2}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Flex width="100%">
        <Button content="Sign in" handleClick={handleRegister} />
      </Flex>
    </Flex>
  );
}