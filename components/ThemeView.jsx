import { useContext } from "react";
import { View } from "react-native";
import Colors from "../constants/Colors";
import ThemeContext from "../contexts/themeContext";

const ThemeView = ({ children, style, ...props }) => {
  const { theme } = useContext(ThemeContext);
  const themeColor = Colors[theme];

  return (
    <View style={[{ backgroundColor: themeColor.bgColor }, style]} {...props}>
      {children}
    </View>
  );
};

export default ThemeView;
