import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";

import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const CarouselCardItem = ({ item, index, navigation, itemGrade }) => {
  return (
    <TouchableWithoutFeedback
      style={styles.container}
      key={index}
      onPress={() =>
        navigation.navigate("post", { itemGrade: itemGrade, index: index })
      }
    >
      {/* <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text> */}

      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      ></Image>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  image: {
    width: ITEM_WIDTH - 35,
    height: 230,
    overflow: "hidden",

    borderRadius: 15,
  },
  header: {
    color: "#222",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default CarouselCardItem;
