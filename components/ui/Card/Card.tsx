import React from "react";
import { ThemedView, ThemedViewProps } from "../../ThemedView";
import CardHeader from './CardHeader';
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";

type CardHeader = React.ReactElement<{type : 'header'}>;
type CardContent = React.ReactElement<{type : 'content'}>;
type CardFooter = React.ReactElement<{type : 'footer'}>;

type CardProps = ThemedViewProps & {
  children: CardHeader | CardFooter | CardContent;
};

export default function Card({ style, children, ...otherProps }: CardProps) {
  return (
    <ThemedView
      style={[
        {
          width: "100%",
          height: "auto",
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 16,
          borderRadius: 20,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
        style,
      ]}
      {...otherProps}
    >
      {children}
    </ThemedView>
  );
}
