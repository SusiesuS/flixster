import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

// Text inputs for login/sign up pages
const TextContainer = ({ placeholder, value, setter }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={placeholder}
        value={value}
        onChange={(newValue) => {
          setter(newValue);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
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
    fontSize: 14,
    color: "#000000",
  },
});

export default TextContainer;
