import { Pressable, Text } from 'react-native';
import { ButtonProps } from './Button';


const ButtonIOS = (
  {onPress, title,style,linerGradient = ["#7F7FD5", "#86A8E7", "#91EAE4"]} : ButtonProps
) => {
  return (
    <Pressable
              onPress={onPress}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
                },
                style,
              ]}
            >
              {({ pressed }) => (
                <Text
                  style={{
                    fontSize: 20,
                    color: pressed ? "rgb(68, 33, 133)" : "black",
                    textAlign: "center",
                  }}
                >
                  {title}
                </Text>
              )}
            </Pressable>
  )
};

export default ButtonIOS;
