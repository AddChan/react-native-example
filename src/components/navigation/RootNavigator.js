import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Root from "../screen/Root";
import ScrollTo from "../screen/ScrollTo";

const RootNavigator = createStackNavigator(
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
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(RootNavigator);
