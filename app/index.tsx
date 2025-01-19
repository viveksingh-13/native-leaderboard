import { Link, useRouter } from "expo-router";
import { Text, View } from "react-native";
import MyButton from "./components/mybutton";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Poppins_700Bold_Italic,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const Index = () => {
  const router = useRouter();
  const [loaded, error] = useFonts({
    Poppins_700Bold_Italic,
    Poppins_300Light,
  });
  const onContinue = () => {
    router.push("/leaderboard");
  };
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: "black",
          fontFamily: "Poppins_700Bold_Italic",
        }}
      >
        asdfadfsdflsdgfhsjgdf
      </Text>
      <MyButton title="Continue" onPress={onContinue} />
    </View>
  );
};

export default Index;
