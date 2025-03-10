import { Platform, StyleProp, ViewStyle } from 'react-native';


export const Button = Platform.select({
  ios: require('./Button.ios').default,
  android: require('./Button.android').default,
});


export interface ButtonProps {
  onPress: () => void;
  title: string;
  style?: StyleProp<ViewStyle>;
  linerGradient?: [string, string, ...string[]];
}
