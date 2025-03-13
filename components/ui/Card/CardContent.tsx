import { ThemedView } from "@/components/ThemedView";
import React from "react";

type CardContentProps = {
  children: React.ReactNode;
  style?: any;
};
export default function CardContent(
  { children, style }: CardContentProps,
  ...otherProps: any
) {
  return (
    <ThemedView
      style={[
        {
          backgroundColor: "transparent",
        },
        style,
      ]}
      {...otherProps}
    >
      {children}
    </ThemedView>
  );
}
