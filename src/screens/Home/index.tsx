import { Center, Flex, Heading, Text } from "native-base";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../context/user";
import { FlatList, Alert } from "react-native";
import Card from "../../components/Card";
import Selected from "../../components/Selected";
import { getAlbums } from "../../services/albums";
import { getStories } from "../../services/stories";
import RoundCard from "../../components/Card/roundCard";
export default function Home() {
  const userData = useContext(UserContext);
  const [selectedAlbum, setSelectedAlbum] = useState("");
  const [albums, setAlbums] = useState([]);
  const [stories, setNames] = useState([]);

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

  useEffect(() => {
    getStories(userData.user?.token)
      .then((response) => setNames(response.data))
      .catch((e) => console.log("erro", e));
  }, []);

  return (
  <Flex
    flex={1}
    p={5}   
    bg="primary.100"
  >
    <Heading color="secondary.100" fontSize="2xl" mb={4} marginBottom={50}>
      Welcome back {userData.user.name}
    </Heading>
    <Heading color="secondary.100" fontSize="xl" marginBottom={0}>
        Stories:
    </Heading>
    <Flex flexDirection="row" mb={4}>
      <FlatList
        data={stories}
        renderItem={({ item }) => (
          <RoundCard
            key={item.id}
            name={item.name}
            img={item.img}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        style={{ marginRight: 10 }} 
      />
    </Flex>
    <Heading color="secondary.100" fontSize="xl" textAlign="center">
        Albums
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
      style={{ marginBottom: 10 }} 
    />
    <Text color="secondary.100">Album selecionado: </Text>
    <Selected text={selectedAlbum} />
  </Flex>
);
}