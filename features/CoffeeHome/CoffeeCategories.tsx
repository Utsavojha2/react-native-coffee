import CategoryButton from "components/CategoryButton";
import Flex from "components/Flex";
import React, { FC } from "react";
import { View } from "react-native";

interface Props {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const CoffeeCategories: FC<Props> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  return (
    <Flex direction="row" alignItems="stretch" gap={7}>
      {categories.map((category, i, list) => {
        return (
          <CategoryButton
            key={category}
            isActive={category === selectedCategory}
            onPress={() => onCategorySelect(category)}
            title={category}
            isLastItem={i === list.length - 1}
          />
        );
      })}
    </Flex>
  );
};

export default CoffeeCategories;
