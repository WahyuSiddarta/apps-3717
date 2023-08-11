import { useColorScheme } from "react-native";

export const useMyColorSchema = () => {
  let scheme = useColorScheme();
  return !!scheme ? scheme : "light";
};
