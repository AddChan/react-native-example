import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Root from "./Root";
import ScrollTo from "../screen/ScrollTo";
import Sticky from "../screen/Sticky";
import OnLayout from "../screen/OnLayout";
import Modal from "../screen/Modal";
import Slider from "../screen/Slider";
import Switch from "../screen/Switch";
import FlatList from "../screen/FlatList";
import TouchableOpacity from "../screen/TouchableOpacity";
import ActivityIndicator from "../screen/ActivityIndicator";
import ImageExample from "../screen/ImageExample";
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
    Modal: {
      screen: Modal,
      navigationOptions: {
        title: "Modal"
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
    },
    FlatList: {
      screen: FlatList,
      navigationOptions: {
        title: "FlatList"
      }
    },
    TouchableOpacity: {
      screen: TouchableOpacity,
      navigationOptions: {
        title: "TouchableOpacity"
      }
    },
    ActivityIndicator: {
      screen: ActivityIndicator,
      navigationOptions: {
        title: "ActivityIndicator"
      }
    },
    ImageExample: {
      screen: ImageExample,
      navigationOptions: {
        title: "ImageExample"
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
