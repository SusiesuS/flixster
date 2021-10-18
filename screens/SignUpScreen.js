import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import TextContainer from "../components/TextContainer";
import ButtonContainer from "../components/ButtonContainer";

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View styles={styles.container}>
      <ScrollView>
        {/*Heading*/}
        <Image
          style={styles.imageTop}
          source={require("../assets/top_design.png")}
        />
        <Text style={styles.textTitle}>Sign Up</Text>
        {/*Text input field*/}
        <TextContainer
          placeholder={"Full Name"}
          value={name}
          setter={setName}
        />
        <TextContainer placeholder={"Email"} value={email} setter={setEmail} />
        <TextContainer placeholder={"Phone"} value={phone} setter={setPhone} />
        <TextContainer
          placeholder={"Password"}
          value={password}
          setter={setPassword}
        />
        <TextContainer
          placeholder={"Confirm Password"}
          value={confirmPassword}
          setter={setConfirmPassword}
        />
        <ButtonContainer value={"Sign Up"} />
        {/*Page navigation*/}
        <View style={styles.textContainer}>
          <Text style={styles.text}>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.textLink}>Login</Text>
          </TouchableOpacity>
        </View>
        {/*Footer*/}
        <Image source={require("../assets/bottom_design.png")} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imageTop: {
    marginBottom: -50,
  },
  textTitle: {
    color: "#015D9E",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#0060A4",
    textAlign: "center",
  },
  textLink: {
    color: "#0060A4",
    textDecorationLine: "underline",
    textAlign: "center",
  },
});

export default SignUpScreen;
