import { Flex, Heading, Text } from "native-base";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../context/user";
import { FlatList, Alert } from "react-native";
import Card from "../../components/Card";
import Selected from "../../components/Selected";
import { getAlbums } from "../../services/albums";
export default function Home() {
  const userData = useContext(UserContext);
  const [selectedAlbum, setSelectedAlbum] = useState("");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    if (selectedAlbum == "Iron maden") {
      Alert.alert("Parabéns!", "Voce selecionou um ótimo album!");
    }
  }, [selectedAlbum]);

  useEffect(() => {
    getAlbums(userData.user?.token)
      .then((response) => setAlbums(response.data))
      .catch((e) => console.log("erro", e));
  }, []);

  return (
    <Flex
      flex={1}
      p={5}
      justifyContent="center"
      alignItems="center"
      bg="primary.100"
    >
      <Heading color="secondary.100" fontSize="4xl">
        Wellcome back {userData.user.name}
      </Heading>
      <FlatList
        data={albums}
        renderItem={({ item }) => (
          <Card
            key={item.id}
            img={item.img}
            album={item.album}
            setSelectedAlbum={setSelectedAlbum}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
      <Selected text={selectedAlbum} />
    </Flex>
  );
}