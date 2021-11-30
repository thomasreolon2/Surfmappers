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
import LottieView from "lottie-react-native";
import Constants from "expo-constants";
import { useRoute, useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import {
  MaterialCommunityIcons,
  AntDesign,
  Octicons,
  MaterialIcons,
  Foundation,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function PostScreen() {
  const [cart, setCart] = useState(false);
  const [chat, setChat] = useState(false);

  const route = useRoute();
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
      }}
    >
      <View
        style={{
          alignItems: "center",
          width: "90%",
          marginTop: Constants.statusBarHeight,
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
            marginTop: Constants.statusBarHeigh,
          }}
        >
          <View>
            <TouchableOpacity
              style={{
                padding: 5,
                width: 120,
                height: 70,
                resizeMode: "contain",
                overflow: "hidden",
                flexDirection: "row",
                borderRadius: 50,

                justifyContent: "center",
              }}
              onPress={() => navigation.goBack()}
            >
              <AntDesign
                name="left"
                size={34}
                style={{ alignSelf: "center" }}
                color={"black"}
              />

              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  marginLeft: 10,
                  alignSelf: "center",
                }}
              >
                Album
              </Text>
            </TouchableOpacity>
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
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Entypo
                name="dots-three-vertical"
                size={30}
                style={{ marginTop: 2 }}
                color={"black"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",

          width: width - 30,
          padding: 15,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              margin: 5,
              fontSize: route.params.itemGrade.title.length > 20 ? 20 : 24,
              textAlign: "left",
              width:
                route.params.itemGrade.title.length > 20
                  ? width / 1.5
                  : width / 1.2,
              fontWeight: "bold",
            }}
          >
            {route.params && route.params.itemGrade
              ? route.params.itemGrade.title
              : "..."}
          </Text>
          <Text
            style={{
              textAlign: "left",
              color: "grey",
              left: 5,
              fontSize: 14,
              fontWeight: "500",
            }}
          >
            {route.params ? route.params.itemGrade.body : "..."}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            width: 50,
            height: 50,

            zIndex: 9999,

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialIcons
            name={"share"}
            color={"#a6a6a6"}
            size={30}
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: "#519ae8",
              borderRadius: 12,
            }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: width,
          height: 0.6,
          margin: 20,
          backgroundColor: "grey",
        }}
      />
      <View
        style={{
          width: width - 50,
          flexDirection: "row",
          justifyContent: "space-between",

          alignContent: "center",
        }}
      >
        <View>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              width: 100,
              height: 50,

              zIndex: 9999,

              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
              alignSelf: "center",
              flexDirection: "row",
            }}
          >
            <AntDesign
              name={"camerao"}
              size={30}
              color={"#a6a6a6"}
              style={{
                padding: 10,
                borderWidth: 1,
                borderColor: "#a6a6a6",
                borderRadius: 12,
              }}
            />
            <Text
              style={{
                left: 10,
                color: "#a6a6a6",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Victor
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              width: 50,
              height: 50,

              zIndex: 9999,

              right: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Foundation
              name={"comments"}
              color={"#a6a6a6"}
              size={30}
              style={{
                padding: 10,
                borderWidth: 1,
                borderColor: "#519ae8",
                borderRadius: 12,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              width: width / 3,
              zIndex: 9999,

              borderRadius: 15,
              backgroundColor: "#519ae8",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
                padding: 10,
              }}
            >
              Seguindo
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: width,
          height: 0.6,
          margin: 20,
          backgroundColor: "grey",
        }}
      />
      <View
        style={{
          width: width - 30,
          flexDirection: "row",
          height: height / 10,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => {}}
          style={{
            width: 100,

            zIndex: 9999,

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 18, color: "#519ae8", fontWeight: "bold" }}>
            {route.params ? route.params.itemGrade.grade.length : "..."} fotos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            width: width / 1.8,

            zIndex: 9999,

            alignItems: "center",
            justifyContent: "space-evenly",
            alignContent: "center",
            alignSelf: "center",
            flexDirection: "row",
            borderRadius: 20,
            backgroundColor: "#e1ebf7",
            padding: 7,
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#519ae8",
              borderRadius: 25,
            }}
          >
            <FontAwesome name={"filter"} size={22} color={"white"} />
          </View>
          <Text
            style={{
              color: "#519ae8",
              fontSize: 16,
              color: "#519ae8",
              fontWeight: "bold",
            }}
          >
            Filtrar por Surfista
          </Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={{ width: width, marginTop: 20 }}>
        <FlatList
          data={route.params ? route.params.itemGrade.grade : []}
          numColumns={3}
          columnWrapperStyle={{ flex: 1, justifyContent: "space-evenly" }}
          keyExtractor={(index) => index}
          renderItem={({ item, index }) => (
            //  <SubImage />

            <Image
              source={{ uri: item.imgUrl }}
              style={{ height: 130, resizeMode: "stretch", flex: 1 }}
            ></Image>
          )}
        />
      </SafeAreaView>
      <View
        style={{
          width: width,
          height: 0.6,
          margin: 20,
          backgroundColor: "grey",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
