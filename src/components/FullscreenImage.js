import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
} from "react-native";
 
 
const { width, height } = Dimensions.get("window");

const FullscreenImage = ({
  source,
  modalVisible,
  setModalVisible,
  isRespondent,
  favorReqLikes,
  warning,
  setWarning,
}) => {
  return (
    <View style={{ marginTop: 0 }}>
      <Modal
        style={{
          height: Dimensions.get("window").height,
          width: Dimensions.get("window").width,
          backgroundColor: "#000",
        }}
        animationType="none"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={() => {
        // 	console.log('Modal has been closed.');
        // }}
      >
        <TouchableHighlight
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#00000080",
          }}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setModalVisible(!modalVisible)}
            style={{
              height: Dimensions.get("window").height,
              width: Dimensions.get("window").width,
              backgroundColor: "#000",
              paddingTop: 5,
              paddingBottom: 5,
            }}
          >
            <View>
             
              <View style={{ flex: 1 }}>
                <Image
                  source={source}
                  style={{
                    height: Dimensions.get("window").height,
                    width: Dimensions.get("window").width,
                    resizeMode: "contain",
                  }}
                />
              </View>
            </View>
            {/* {warning && (
              <View
                style={{
                  position: "absolute",
                  alignSelf: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  width: width / 1.2,
                  height: height / 5,
                  backgroundColor: "white",
                  borderRadius: 10,
                  padding: 20,
                  bottom: 5,
                }}
              >
                {isRespondent ? (
                  <View>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "600",
                        color: "black",
                      }}
                    >
                      -{favorReqLikes}
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "200",
                          color: "grey",
                        }}
                      >
                        {" "}
                        for information
                      </Text>
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "200",
                        color: "grey",
                        marginTop: 6,
                      }}
                    >
                      Once you reach the area where you took the photo, you can
                      accept the notification and provide feedback.
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: "600",
                          color: "black",
                        }}
                      >
                        Positive historics increase the chances of a request
                        being accepted.
                      </Text>{" "}
                    </Text>
                  </View>
                ) : (
                  <View>
                    <Text style={{ fontSize: 14, fontWeight: "200" }}>
                      you received{" "}
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "600",
                          color: "black",
                        }}
                      >
                        +{favorReqLikes}
                      </Text>{" "}
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "200",
                          color: "grey",
                        }}
                      >
                        {" "}
                        for information.
                      </Text>
                    </Text>
                    <Text
                      style={{ fontSize: 14, fontWeight: "200", color: "grey" }}
                    >
                      As soon as the requester arrives in the region where the
                      photo was taken, he will be able to respond to feedbacká{" "}
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: "600",
                          color: "black",
                        }}
                      >
                        Positive historics increase the chances of a request
                        being accepted.
                      </Text>{" "}
                    </Text>
                  </View>
                )}
                <TouchableOpacity
                  onPress={() => {
                    setWarning();
                  }}
                >
                  <Text
                    style={{ fontSize: 24, fontWeight: "600", color: "black" }}
                  >
                    OK
                  </Text>
                </TouchableOpacity>
              </View>
            )} */}
          </TouchableOpacity>
        </TouchableHighlight>
      </Modal>
    </View>
  );
};

const styles = {
  modalButton: {
    margin: 10,
    marginTop: 5,
    marginBottom: 5,
  },
};

export default FullscreenImage;
