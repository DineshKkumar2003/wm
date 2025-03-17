import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    if (email === "user" && password === "1234") {
      Alert.alert("login success!!!");
      navigation.navigate("Home");
    } else {
      Alert.alert("Login Failed!!!");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("./assets/welcome.png")} style={styles.image} />
      </View>
      <View style={styles.LoginBox}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttontext}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#acc4ff",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: 25,
  },
  image: {
    borderRadius: 50,
  },
  LoginBox: {
    backgroundColor: "white",
    height: "45%",
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontStyle: "Bold",
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#efefef",
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    backgroundColor: "#d09eee",
    width: 100,
    height: 40,
    paddingHorizontal: 15,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttontext: {
    fontSize: 30,
    color: "white",
  },
});
export default Login;
