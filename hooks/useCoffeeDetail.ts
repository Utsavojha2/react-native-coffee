import { COFFEE_DATA } from "dummy/coffee-data";
import { useLocalSearchParams } from "expo-router";

export const useCoffeeDetail = () => {
  const { id } = useLocalSearchParams();
  const coffee = COFFEE_DATA.find((c) => {
    return !!id && c.id === +id;
  });
  return coffee;
};
