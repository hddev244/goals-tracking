import React, {useEffect} from 'react';
import {Animated, Text, View, useAnimatedValue} from 'react-native';
import type {PropsWithChildren} from 'react';
import type {ViewStyle} from 'react-native';
import { Easing } from 'react-native-reanimated';

type FadeInViewProps = PropsWithChildren<{style: ViewStyle}>;

const FadeInView: React.FC<FadeInViewProps> = props => {
  const fadeAnim = useAnimatedValue(0); // Initial value for opacity: 0


  return (
    <Animated.View // Special animatable View
    style={{
      opacity: fadeAnim, // Binds directly
      transform: [{
        translateY: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
        }),
      }],
    }}
    >
      {props.children}
    </Animated.View>
  );
};

export const AnimationTest: React.FC = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 28, textAlign: 'center'}}>Fading in</Text>
      </FadeInView>
    </View>
  );
}