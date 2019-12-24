import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Root from "../screen/Root";
import ScrollTo from "../screen/ScrollTo";
import FlatList from "../screen/FlatList";

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
    FlatList: {
      screen: FlatList,
      navigationOptions: {
        title: "FlatList"
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
