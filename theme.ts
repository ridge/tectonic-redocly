import { lighten, darken, readableColor } from "polished";

export const theme = {
  colors: {
    primary: {
      main: "#0e0c51",
    },
    text: {
      primary: "#4f4f4f",
    },
    http: {
      get: "#6bbd5b",
      post: "#248fb2",
      put: "#9b708b",
      options: "#d3ca12",
      patch: "#e09d43",
      delete: "#e27a7a",
      basic: "#999",
      link: "#31bbb6",
      head: "#c167e4",
    },
    navbar: {
      main: ({ colors }) => colors.primary.main,
      gradient: ({ colors }) => colors.primary.main,
      contrastText: "white",
    },
    footer: {
      main: "#0e0c51",
      contrastText: "#f2f2f2",
    },
  },

  navbar: {
    fontSize: "15px",
    fontWeight: 700,
    activeItemColor: "#ff6464",
  },
  searchbox: {
    backgroundColor: "#4a4c85",
  },
  sidebar: {
    backgroundColor: "#fafafa",
    width: "260px",
  },
  footer: {
    fontSize: "14px",
    titleFontSize: "14px",
  },

  typography: {
    fontSize: "16px",
    lineHeight: "1.5em",
    fontWeightRegular: "400",
    fontWeightBold: "600",
    fontWeightLight: "300",
    fontFamily: '"Nunito Sans", sans-serif',
    headings: {
      fontFamily: '"Nunito Sans", sans-serif',
      fontWeight: "600",
    },
    heading1: {
      fontSize: "3.9375em",
      fontWeight: "400",
      lineHeight: "1.2698em",
    },
    heading2: {
      fontSize: "1.625em",
      fontWeight: "900",
      transform: "uppercase",
      color: ({ colors }) => colors.primary.main,
    },
    heading3: {
      fontSize: "1.0625em",
      fontWeight: "800",
      transform: "uppercase",
      color: ({ colors }) => colors.primary.main,
    },
    heading4: {
      fontSize: "1.0625em",
      fontWeight: "900",
      transform: "uppercase",
      color: ({ colors }) => colors.primary.main,
    },
    code: {
      fontSize: "14px",
      fontFamily: '"Roboto Mono", monospace',
      fontWeight: ({ typography }) => typography.fontWeightRegular,
      color: "#e53935",
      backgroundColor: "rgba(38, 50, 56, 0.04)",
      wrap: false,
    },
    links: {
      color: ({ colors }) => colors.primary.main,
      visited: ({ typography }) => typography.links.color,
      hover: ({ typography }) => lighten(0.2, typography.links.color),
    },
  },
  rightPanel: {
    backgroundColor: "#263238",
    width: "40%",
  },
  schema: {
    nestedBackground: "#fafafc",
  },
};
