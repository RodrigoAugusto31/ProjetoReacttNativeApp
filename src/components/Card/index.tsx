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
    width: 150,
    height: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});