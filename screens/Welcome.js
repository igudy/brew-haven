import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";

const coffeHome = require("../assets/images/home-coffee.png");
const { width, height } = Dimensions.get("window");

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Fall in Love with Coffee in Blissful Delight!
      </Text>
      <Text style={styles.subText}>
        Welcome to our cozy coffee corner, where every cup is a delightful for
        you.
      </Text>
      <View style={styles.buttonContainer}>
        <Text style={styles.getStartedButtonText}>Get Started</Text>
      </View>
      <Image
        source={coffeHome}
        style={[styles.backgroundImage, { zIndex: -1 }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  backgroundImage: {
    position: "absolute",
    width: width,
    height: height,
    top: 0,
    left: 0,
  },
  headerText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 10,
    maxWidth: width - 50,
  },
  subText: {
    fontSize: 16,
    // fontWeight: "bold",
    color: "#ffffff",
    maxWidth: width - 100,
    textAlign: "center",
    marginBottom: 10,
    // maxWidth: 260,
  },
  buttonContainer: {
    backgroundColor: "brown",
    width: 200,
    height: 50,
    margin: 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  getStartedButtonText: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default Welcome;
