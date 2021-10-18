import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import { withNavigation } from 'react-navigation';

// Button for login/sign up pages
const ButtonContainer = ({ value,  navigation}) => {
  console.log(navigation);
  return (
  <TouchableOpacity 
      onPress={() => {
        navigation.navigate("Main");
      }}
      style={styles.container}>
        <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#015D9E",
    marginVertical: 10,
    marginHorizontal: 60,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 20,
    elevation: 5,
  },
  text: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default withNavigation(ButtonContainer);
