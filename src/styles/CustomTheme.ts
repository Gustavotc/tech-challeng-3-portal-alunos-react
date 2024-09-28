import { extendTheme } from "@chakra-ui/react";

const theme = {
  styles: {
    global: {
      "html, body, img, div.image": {
        "user-select": "none",
        "-drag": "none",
        "user-drag": "none",
        "-webkit-user-drag": "none",
        "-moz-user-select": "none",
        "-webkit-user-select": "none",
        "-ms-user-select": "none",
      },
    },
  },
};

export default extendTheme(theme);
