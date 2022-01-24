import React from "react";

type Props = {
  titleText: string;
};

const Title: React.VFC<Props> = React.memo(({ titleText }) => {
  return <h3>{titleText}</h3>;
});

export default Title;
