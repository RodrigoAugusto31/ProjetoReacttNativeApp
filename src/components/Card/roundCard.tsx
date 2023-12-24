import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Image } from 'native-base';

interface Props {
  name: string;
  img: string;
}

export default function RoundCard({ img, name }: Props) {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
    >
      <Image
        m={2}
        marginTop={50}
        source={{
          uri: img,
        }}
        alt="Alternate Text"
        size="xl"
        style={styles.roundedImage}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 0,
  },
  roundedImage: {
    width: 60, 
    height: 60, 
    borderRadius: 30, 
  },
});