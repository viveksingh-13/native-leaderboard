import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
type MyButtonProps = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void; // Type for the onPress function
};
const MyButton: React.FC<MyButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
