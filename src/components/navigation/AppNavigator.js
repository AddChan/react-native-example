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
import Shadow from "../screen/Shadow";
import ImageRatio from "../screen/ImageRatio";
import SafeAreaView from "../screen/SafeAreaView";
import DatePickerIOS from "../screen/DatePickerIOS";
import RefreshControl from "../screen/RefreshControl";
import SectionList from "../screen/SectionList";
import MaskedView from "../screen/MaskedView";
import ProgressBarAndroid from "../screen/ProgressBarAndroid";
import TextInput from "../screen/TextInput";
import TouchableHighlight from "../screen/TouchableHighlight";
import InputAccessoryView from "../screen/InputAccessoryView";
import Text from "../screen/Text";
import Button from "../screen/Button";
import ScrollView from "../screen/ScrollView";
import Keyboard from "../screen/Keyboard";
import View from "../screen/View";
import Share from "../screen/Share";
import Dimensions from "../screen/Dimensions";
import AsyncStorage from "../screen/AsyncStorage";
import PermissionsAndroid from "../screen/PermissionsAndroid";

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
    },
    Shadow: {
      screen: Shadow,
      navigationOptions: {
        title: "Shadow"
      }
    },
    ImageRatio: {
      screen: ImageRatio,
      navigationOptions: {
        title: "ImageRatio"
      }
    },
    SafeAreaView: {
      screen: SafeAreaView,
      navigationOptions: {
        title: "SafeAreaView"
      }
    },
    KeyboardAvoidingView: {
      screen: KeyboardAvoidingView,
      navigationOptions: {
        title: "KeyboardAvoidingView"
      }
    },
    DatePickerIOS: {
      screen: DatePickerIOS,
      navigationOptions: {
        title: "DatePickerIOS"
      }
    },
    RefreshControl: {
      screen: RefreshControl,
      navigationOptions: {
        title: "RefreshControl"
      }
    },
    SectionList: {
      screen: SectionList,
      navigationOptions: {
        title: "SectionList"
      }
    },
    MaskedView: {
      screen: MaskedView,
      navigationOptions: {
        title: "MaskedView"
      }
    },
    ProgressBarAndroid: {
      screen: ProgressBarAndroid,
      navigationOptions: {
        title: "ProgressBarAndroid"
      }
    },
    TextInput: {
      screen: TextInput,
      navigationOptions: {
        title: "TextInput"
      }
    },
    TouchableHighlight: {
      screen: TouchableHighlight,
      navigationOptions: {
        title: "TouchableHighlight"
      }
    },
    InputAccessoryView: {
      screen: InputAccessoryView,
      navigationOptions: {
        title: "InputAccessoryView"
      }
    },
    Text: {
      screen: Text,
      navigationOptions: {
        title: "Text"
      }
    },
    Button: {
      screen: Button,
      navigationOptions: {
        title: "Button"
      }
    },
    ScrollView: {
      screen: ScrollView,
      navigationOptions: {
        title: "ScrollView"
      }
    },
    ToastAndroid: {
      screen: ToastAndroid,
      navigationOptions: {
        title: "ToastAndroid"
      }
    },
    Keyboard: {
      screen: Keyboard,
      navigationOptions: {
        title: "Keyboard"
      }
    },
    View: {
      screen: View,
      navigationOptions: {
        title: "View"
      }
    },
    Share: {
      screen: Share,
      navigationOptions: {
        title: "Share"
      }
    },
    Dimensions: {
      screen: Dimensions,
      navigationOptions: {
        title: "Dimensions"
      }
    },
    AsyncStorage: {
      screen: AsyncStorage,
      navigationOptions: {
        title: "AsyncStorage"
      }
    },
    PermissionsAndroid: {
      screen: PermissionsAndroid,
      navigationOptions: {
        title: "PermissionsAndroid"
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
