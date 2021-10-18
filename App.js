// React Navigation Libaries
import { createAppContainer, withOrientation } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Screen Imports
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";

import MainScreen from "./screens/MainScreen";

const screens = {
  Login: {
    screen: LoginScreen,
  },
  SignUp: {
    screen: SignUpScreen,
  },
  // Susie's screen here
  Main: {
    screen: MainScreen,
  }
};

// Create screen navigator
const navigator = createStackNavigator(screens, {
  initialRouteName: "Login",
  defaultNavigationOptions: {
    cardStyle: {
      backgroundColor: "white",
    },
    headerShown: false,
  },
});

export default createAppContainer(navigator);
