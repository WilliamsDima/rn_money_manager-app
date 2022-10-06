import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const globalStyles = StyleSheet.create({
    shadow: {
      shadowColor: COLORS.mainColor,
      shadowOpacity: 0.08,
      shadowOffset: {
        width: 3,
        height: 5,
      },
      shadowRadius: 15,
    },
    radiusTwoCorners: {
      borderTopLeftRadius: 15,
      borderTopRightRadius: 3,
      borderBottomLeftRadius: 3,
      borderBottomRightRadius: 15,
    },
    spaceHorizontal: {
      paddingHorizontal: 10,
    },
    spaceVertical: {
        paddingVertical: 10,
    },
    spaceLeft: {
      paddingLeft: 15,
    },
    spaceRight: {
      paddingRight: 15,
    },
    h1: {
      color: COLORS.colorPriamry,
      fontSize: 22,
      fontWeight: '600'
    },
    h2: {
      color: COLORS.colorPriamry,
      fontSize: 20,
      fontWeight: '600'
    },
    h3: {
      color: COLORS.colorPriamry,
      fontSize: 18,
      fontWeight: '600'
    },
    p1: {
      color: COLORS.colorPriamry,
      fontSize: 14,
      fontWeight: '600'
    },
    p2: {
      color: COLORS.colorPriamry,
      fontSize: 16,
      fontWeight: '700'
    },
    s1: {
      color: COLORS.colorPriamry,
      fontSize: 8,
      fontWeight: '600'
    },
    s2: {
      color: COLORS.colorPriamry,
      fontSize: 10,
      fontWeight: '600'
    },
    s3: {
      color: COLORS.colorPriamry,
      fontSize: 12,
      fontWeight: '600'
    },
  })
  