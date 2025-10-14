import { useContext } from "react";
import { Text } from "react-native";
import Colors from "../constants/Colors";
import ThemeContext from "../contexts/themeContext";

const ThemeText = ({ children, style, ...props }) => {
  const { theme } = useContext(ThemeContext);
  const themeColor = Colors[theme];

  return (
    <Text style={[{ color: themeColor.textColor }, style]} {...props}>
      {children}
    </Text>
  );
};

export default ThemeText;
