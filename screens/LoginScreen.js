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

const LoginScreen = ({ navigation }) => {
  console.log(navigation); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView>
        {/*Heading*/}
        <Image source={require("../assets/top_design.png")} />
        <Image
          style={styles.imageLogo}
          source={require("../assets/uci_shc_logo.png")}
        />
        <Text style={styles.textTitle}>Radiation Oncology</Text>
        {/*Text input field*/}
        <TextContainer placeholder={"Email"} value={email} setter={setEmail} />
        <TextContainer
          placeholder={"Password"}
          value={password}
          setter={setPassword}
        />
        <ButtonContainer value={"Login"} />
        {/*Page navigation*/}
        <View style={styles.textContainer}>
          <Text style={styles.text}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <Text style={styles.textLink}>Sign up</Text>
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
  imageLogo: {
    alignSelf: "center",
  },
  textTitle: {
    color: "#0060A4",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
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

export default LoginScreen;
