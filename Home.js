import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Home = () => {
  const [waterLevel, setWaterLevel] = useState(70);
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons style={styles.icon} name="menu" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons style={styles.profileIcon} name="person-circle-outline" />
        </TouchableOpacity>
      </View>
      <View style={styles.tankContainer}>
        <View style={styles.tank}>
          <View style={[styles.water, { height: `${waterLevel}%` }]}></View>
        </View>
        <Text style={styles.waterText}>{waterLevel}%</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#acc4ff",
    borderRadius: 30,
  },
  header: {
    backgroundColor: "#acd4fe",
    height: 80,
    width: "100%",
  },
  icon: {
    fontSize: 50,
    position: "absolute",
    marginTop: 12,
    marginLeft: 10,
  },
  profileIcon: {
    fontSize: 50,
    position: "absolute",
    right: 10,
    padding: 10,
  },
  tankContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  tank: {
    width: 100,
    height: 200,
    borderWidth: 3,
    borderColor: "#000",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#ddd",
    justifyContent: "flex-end",
  },
  water: {
    width: "100%",
    backgroundColor: "#0077ff",
  },
  waterText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
});
