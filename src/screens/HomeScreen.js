import React, { useState, useEffect, useRef, createRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import * as Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import {
  MaterialCommunityIcons,
  AntDesign,
  Octicons,
} from "@expo/vector-icons";
import GradePost from "../components/GradePost";
import data from "../data";
import stories_data from "../stories_data";
const { width, height } = Dimensions.get("window");
export default function HomeScreen() {
  const [cart, setCart] = useState(false);
  const [chat, setChat] = useState(false);
  const Xscroll = React.useRef(new Animated.Value(0)).current;

  const gradientMargin = (circleDiameter) => {
    const ratio = (1 - gradientRatio(circleDiameter)) / 2;

    return circleDiameter * ratio;
  };

  const gradientRatio = (circleDiameter) => {
    if (circleDiameter < 100) {
      return 0.88;
    } else {
      return 0.96;
    }
  };

  const handleScroll = (e) => {
    console.log(e.nativeEvent.contentOffset.y);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          position: "absolute",
          alignItems: "center",
          width: "90%",
          top: height / 30,
          marginTop: Constants.statusBarHeight,
        }}
      >
        <View>
          <Image
            style={{
              padding: 5,
              width: 160,
              height: 70,
              resizeMode: "contain",
              overflow: "hidden",
              borderRadius: 50,
            }}
            source={require("../images/bg.png")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => setCart(!cart)}
          >
            <View
              style={{
                padding: 5,
                borderRadius: 50,
                backgroundColor: "red",
                position: "absolute",
                zIndex: 9999,
                right: 7,
                borderWidth: 2.5,
                borderColor: "white",
                top: 7,
              }}
            />
            <MaterialCommunityIcons
              name="cart-outline"
              size={32}
              color={cart ? "red" : "black"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => setChat(!chat)}
          >
            <View
              style={{
                padding: 5,
                borderRadius: 50,
                backgroundColor: "red",
                position: "absolute",
                zIndex: 9999,
                right: 4,
                borderWidth: 2.5,
                borderColor: "white",
                top: 8,
              }}
            />
            <Octicons
              name="comment-discussion"
              size={30}
              style={{ marginTop: 2 }}
              color={chat ? "red" : "black"}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: width - 30,
          marginTop: 80,
        }}
      >
        <TouchableOpacity
          style={[
            {
              width: 90,
              height: 90,
              margin: 5,
              borderWidth: 1,
              alignSelf: "center",

              borderRadius: 50,

              justifyContent: "center",
              borderColor: "#03a1fc",
              alignItems: "center",
            },
          ]}
        >
          <AntDesign name={"camera"} size={28} color={"#03a1fc"} />
        </TouchableOpacity>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={{ justifyContent: "center" }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: Xscroll } } }],
            { listener: (event) => handleScroll(event) }
          )}
        >
          {stories_data.map((item, k) => {
            const scale = Xscroll.interpolate({
              inputRange: [-2, 0, 90 * k, 80 * (k + 2)],
              outputRange: [1, 1, 1, 0],
            });

            return (
              <Animated.View
                style={[
                  {
                    width: 100,
                    height: 100,
                   
                    alignItems: "center",
                    justifyContent: "center",
              
                  },
                  {
                    transform: [{ scale: scale }],
                  },
                ]}
                key={k}
              >
                <LinearGradient
                  key={k * 2}
                  start={[1, 0.5]}
                  end={[0, 0]}
                  colors={
                    item.sawFromU
                      ? ["#d9cccc", "#c0c1c2"]
                      : ["#14d9a4", "#38c882", "#03c2fc", "#03c2fc"]
                  }
                  style={{
                    borderRadius: 95 / 2,
                    width: 95,
                    margin: 5,
                    height: 95,         alignItems: "center",
                    justifyContent: "center",
                 
                  }}
                >
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                      margin: gradientMargin(90),
                      backgroundColor: "white",
               
                      alignItems: "center",
                    justifyContent: "center",
                      borderRadius: (90 / 2) * gradientRatio(90),
                      width: 90 * gradientRatio(90),
                      height: 90 * gradientRatio(90),
                      
                    }}
                    onPress={() => console.log("c")}
                  >
                    
                      <Image
                        source={{ uri: item.imgUrl }}
                        style={{
                          
                          width: 90,
                          height: 90,
                         
                          overflow: "hidden",
                          borderWidth: 2,
                          borderColor: "white",
                          borderRadius: 50,
                        }}
                      />
                     
                  </TouchableOpacity>
                </LinearGradient> 
              </Animated.View>
            );
          })}
        </ScrollView>
      </View>
      <View
        style={{
          width: width,
          height: 0.6,
          margin: 20,
          backgroundColor: "grey",
        }}
      />

      <SafeAreaView style={{ height: height / 1.7 }}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={true}
          keyExtractor={(index) => index}
          renderItem={({ item, index }) => (
            <GradePost item_={item} index={index} />
          )}
        />
      </SafeAreaView>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({});
