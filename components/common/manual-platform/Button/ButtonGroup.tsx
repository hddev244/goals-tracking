import { ThemedView } from '@/components/ThemedView'
import React from 'react'

interface ButtonGroupProps {
  children: React.ReactNode
  style?: any
  direction?: "row" | "column"
  justifyContent?: "flex-start" | "center" | "flex-end"
  alignItems?: "flex-start" | "center" | "flex-end"
  gap?: number
  wrap?: boolean
  flex?: number
  width?: string
  height?: string
  backgroundColor?: string
  borderRadius?: number
  borderWidth?: number
  borderColor?: string
  padding?: number
  margin?: number
  shadowColor?: string
  shadowOffset?: { width: number; height: number }
  shadowOpacity?: number
  shadowRadius?: number
  elevation?: number
  zIndex?: number
  position?: "absolute" | "relative"
  top?: number | string
  left?: number | string
  right?: number | string
  bottom?: number | string
  overflow?: "visible" | "hidden" | "scroll"
  flexWrap?: "wrap" | "nowrap"
  alignSelf?: "auto" | "flex-start" | "flex-end" | "center" | "stretch"
  flexBasis?: number | string
  flexGrow?: number
  flexShrink?: number
  flexDirection?: "row" | "column"
  paddingTop?: number
  paddingBottom?: number
  paddingLeft?: number
  paddingRight?: number
  paddingHorizontal?: number
  paddingVertical?: number

}

export default function ButtonGroup({
  children,
  style = {},
  direction = "row",
  justifyContent = "flex-start",
  alignItems = "center",
  flexWrap = "nowrap",
  ...rest
}: ButtonGroupProps) {
  return (
    <ThemedView
      style={{
        flexDirection: direction,
        justifyContent,
        alignItems,
        flexWrap,
        ...rest, // Truyền các props style còn lại vào
        ...style, // Cho phép ghi đè style từ props
      }}
    >
      {children}
    </ThemedView>
  )
}
