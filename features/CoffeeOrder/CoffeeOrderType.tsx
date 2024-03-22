import ButtonGroup from "components/ButtonGroup";
import React, { FC } from "react";

interface Props {
  value: string;
  onValueChange: (value: string) => void;
}

const CoffeeOrderType: FC<Props> = ({ value, onValueChange }) => {
  return (
    <ButtonGroup
      options={[
        {
          id: "delivery",
          name: "Deliver",
        },
        {
          id: "pick-up",
          name: "Pick Up",
        },
      ]}
      value={value}
      onValueChange={onValueChange}
    />
  );
};

export default CoffeeOrderType;
