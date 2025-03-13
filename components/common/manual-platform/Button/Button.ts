import { Platform, StyleProp, ViewStyle } from 'react-native';


export const Button = Platform.select({
  ios: require('./Button.ios').default,
  android: require('./Button.android').default,
});


export type Variant = keyof typeof variantStyle;

export const variantStyle: { [key: string]: { colors: [string, string, ...string[]],
  text : {color : string, fontSize : number, textAlign : string, textShadowColor : string, textShadowOffset : {width : number, height : number}, textShadowRadius : number, fontWeight : string}
 } } = {
  primary: {
    colors: ["rgb(0, 38, 255)", "rgb(0, 102, 219)", "rgb(83, 149, 230)"],
    text : {
      color : "white",
      fontSize : 20,
      textAlign : "center",
      textShadowColor : "rgba(0, 0, 0, 0.18)",
      textShadowOffset : {width : -1, height : 1},
      textShadowRadius : 10,
      fontWeight : "bold"
    }
  },
  secondary: {
    colors: ["#FFC3A0", "#FFAFBD", "#FFC3A0"],
    text : {
      color : "white",
      fontSize : 20,
      textAlign : "center",
      textShadowColor : "rgba(0, 0, 0, 0.18)",
      textShadowOffset : {width : -1, height : 1},
      textShadowRadius : 10,
      fontWeight : "bold"
    }
  },
  danger: {
    colors: ["#FFC3A0", "#FFAFBD", "#FFC3A0"],
    text : {
      color : "white",
      fontSize : 20,
      textAlign : "center",
      textShadowColor : "rgba(0, 0, 0, 0.18)",
      textShadowOffset : {width : -1, height : 1},
      textShadowRadius : 10,
      fontWeight : "bold"
    }
  },
};


export interface ButtonProps {
  onPress: () => void;
  title: string;
  style?: StyleProp<ViewStyle>;
  linerGradient?: [string, string, ...string[]];
  variant?: Variant;
}
