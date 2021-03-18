import React from "react";
import Button from "./Button";
import { ThemeContextConsumer } from "./ThemeContext";

function Image(props) {
  return (
    <ThemeContextConsumer>
      {context => (
        <div className={`${context.theme}-image image`}>
          <Button />
        </div>
      )}
    </ThemeContextConsumer>
  );
}

Image.contextType = ThemeContextConsumer;

export default Image;
