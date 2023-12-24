import { Container, Image } from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  album: string;
  img: string;
  setSelectedAlbum: (album: string) => void;
}

export default function Card({ img, album, setSelectedAlbum }: Props) {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => setSelectedAlbum(album)}
    >
      <Image
        m={2}
        source={{
          uri: img,
        }}
        alt="Alternate Text"
        size="xl"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 0, 
  },
});