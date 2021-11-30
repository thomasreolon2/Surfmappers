import React, { useRef, useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,SafeAreaView,FlatList
} from "react-native";

import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import CarouselCardItem from "../components/CarouselCardItem";
import FullscreenImage from "./FullscreenImage";
export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const { width, height } = Dimensions.get("window");

export default function GradePost({ item_, index }) {
  const [index_, setIndex] = useState(0);
  const [like, setLike] = useState(null);

  const likeAnimation = useRef(null);
  const isCarousel = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (like) {
      likeAnimation.current.play(15, 30);
    } else {
      likeAnimation.current.play(45, 70);
    }
  }, [like]);

  return (
    <View
      key={index}
      style={{
        width: width,
        height: 400,
        margin: 5,
        alignItems: "center",
      }}
    >
      <Text style={{ textAlign: "left", width: width - 50, fontSize: 22 , fontWeight: "bold"}}>
        {item_.title.length > 25 ? item_.title.substring(0,25) + "..." : item_.title}
      </Text>
      <Text
        style={{
          marginBottom: 10,
          textAlign: "left",
          width: width - 50,
          fontSize: 14,
          color: "grey"
        }}
      >
        {item_.body}
      </Text>
      {/* <View style={{height: 1, width: width / 1.3, backgroundColor: "grey", margin: 15}}/> */}
      <Carousel
        layout="stack"
        layoutCardOffset={9}
        ref={isCarousel}
        data={item_.grade}
        renderItem={({ item, index }) => (
          <CarouselCardItem
            itemGrade={item_}
            item={item}
            key={index}
            index={index}
            navigation={navigation}
          />
        )}
        // renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH - 30}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={item_.grade.length}
        activeDotIndex={index_}
        carouselRef={isCarousel}
        dotStyle={{
          width: 12.5,
          height: 12.5,
          marginLeft: index - 15,
          borderRadius: 10,
          marginHorizontal: 0,
          backgroundColor: "#4699d4",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
      <TouchableOpacity
        onPress={() => {
          setLike(!like);

          // if (like) {

          // } else {
          //   elRefs[index].current.play(45, 70);
          // }
        }}
        style={{
          width: 50,
          height: 50,
          position: "absolute",
          zIndex: 9999,
          bottom: 10,
          left: width / 17,
          alignItems: "center",
        }}
      >
        <LottieView
          source={require("../animations/like.json")}
          loop={false}
          progress={0}
          speed={1.5}
          style={{
            width: 45,
            height: 45,

            zIndex: 999,
          }}
          ref={(a) => {
            likeAnimation.current = a;
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          width: 50,
          height: 50,
          position: "absolute",
          zIndex: 9999,
          bottom: 12,
          left: width / 6,
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          alignSelf: "center",
        }}
      >
        <MaterialIcons name={"share"} size={28} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          width: 100,
          height: 50,
          position: "absolute",
          zIndex: 9999,
          bottom: 12,
          right: width / 12.5,
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          alignSelf: "center",
          flexDirection: "row",
        }}
      >
        <AntDesign name={"camerao"} size={24} style={{ padding: 5 }} />
        <Text>@victor</Text>
      </TouchableOpacity>
  
      {/* <Video
        ref={video}
        source={source}
        rate={1.0}
        volume={1.0}
        resizeMode={'contain'}
        isLooping
        shouldPlay
        style={styles.video}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    marginBottom: 100,
    marginTop: 100,
  },
  video: {
    width: Dimensions.get("window").width,
    height: 300,
  },
});
