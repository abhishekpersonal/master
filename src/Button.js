import React from "react";
import { ThemeContextConsumer } from "./ThemeContext";

function Button(props) {
  return (
    <ThemeContextConsumer>
      {context => (
        <button onClick={context.toggleTheme} className="button">
          Switch
        </button>
      )}
    </ThemeContextConsumer>
  );
}

export default Button;
