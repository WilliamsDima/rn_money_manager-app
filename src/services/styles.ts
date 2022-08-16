import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const globalStyles = StyleSheet.create({
    shadow: {
      shadowColor: COLORS.colorShadow,
      shadowOpacity: 0.08,
      shadowOffset: {
        width: 3,
        height: 5,
      },
      shadowRadius: 15,
      // IOS
      elevation: 11,
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
    p1: {
      color: COLORS.colorPriamry,
      fontSize: 14,
      fontWeight: '600'
    },
    p2: {
      color: COLORS.colorPriamry,
      fontSize: 16,
      fontWeight: '700'
    }
  })
  