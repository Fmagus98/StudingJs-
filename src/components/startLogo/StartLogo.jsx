import React from "react";
import { useRef } from "react";

import { StyleSheet, Button, View } from "react-native";
import { Video } from "expo-av";
const StartLogo = ({videoPlayback}) => {
  const video = useRef(null);
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        resizeMode="cover"
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/studyingjs-3dc2f.appspot.com/o/studyingJsLogo.mp4?alt=media&token=43fbe861-fda5-414a-aa5d-37f244e55171",
        }}
        shouldPlay
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
  video: {
    flex: 1,
    alignSelf: "center",
    width: 300,
    height: 2000
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartLogo;
