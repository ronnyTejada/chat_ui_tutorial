import { Colors } from "./Constants";

export const getRamdonColor = () => {
  let num = Math.floor(Math.random() * Colors.length);
  return Colors[num];
};
