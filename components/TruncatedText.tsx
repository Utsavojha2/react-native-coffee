import React, { FC, useState } from "react";
import CustomText, { TextProps } from "./Text";

interface ToggleComponentProps {
  truncatedText: string;
  fullText: string;
  textProps?: Omit<TextProps, "children">;
  toggleProps?: Omit<TextProps, "children">;
}

const MoreLessComponent: FC<ToggleComponentProps> = ({
  truncatedText,
  fullText,
  textProps,
  toggleProps,
}) => {
  const [more, setMore] = useState(false);
  return (
    <CustomText {...textProps}>
      {!more ? `${truncatedText}.. ` : fullText}
      <CustomText {...toggleProps} onPress={() => setMore(!more)}>
        {more ? "\nRead Less" : "Read More"}
      </CustomText>
    </CustomText>
  );
};

interface Props {
  text: string;
  linesToTruncate: number;
  textProps?: Omit<TextProps, "children">;
  toggleProps?: Omit<TextProps, "children">;
}

const TruncatedText: FC<Props> = ({
  text,
  linesToTruncate,
  textProps,
  toggleProps,
}) => {
  const [clippedText, setClippedText] = React.useState<boolean | string>(false);
  return clippedText && typeof clippedText === "string" ? (
    <MoreLessComponent
      truncatedText={clippedText}
      fullText={text}
      textProps={textProps}
      toggleProps={toggleProps}
    />
  ) : (
    <CustomText
      numberOfLines={linesToTruncate}
      ellipsizeMode={"tail"}
      onTextLayout={(event) => {
        const { lines } = event.nativeEvent;
        const txt = [...lines]
          .splice(0, linesToTruncate)
          .map((line) => line.text)
          .join("");

        if (linesToTruncate < lines.length) {
          setClippedText(txt.substring(0, txt.length - 15));
        }
      }}
      {...textProps}
    >
      {text}
    </CustomText>
  );
};

export default TruncatedText;
