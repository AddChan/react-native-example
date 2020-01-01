import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Root from "./Root";
import ScrollTo from "../screen/ScrollTo";
import Sticky from "../screen/Sticky";
import OnLayout from "../screen/OnLayout";
import ModalExample from "../screen/ModalExample";
import Slider from "../screen/Slider";
import Switch from "../screen/Switch";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Root,
      navigationOptions: {
        title: "ReactNative Example"
      }
    },
    ScrollTo: {
      screen: ScrollTo,
      navigationOptions: {
        title: "ScrollTo"
      }
    },
    Sticky: {
      screen: Sticky,
      navigationOptions: {
        title: "Sticky"
      }
    },
    OnLayout: {
      screen: OnLayout,
      navigationOptions: {
        title: "OnLayout"
      }
    },
    ModalExample: {
      screen: ModalExample,
      navigationOptions: {
        title: "ModalExample"
      }
    },
    Slider: {
      screen: Slider,
      navigationOptions: {
        title: "Slider"
      }
    },
    Switch: {
      screen: Switch,
      navigationOptions: {
        title: "Switch"
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
