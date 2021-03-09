export const topBarHeight = "36px";
export const toolBarHeight = "120px";
export const toolBarButtonSize = "50px";

export const colors = {
  menu: "#ede9e8",
  dark: "#2c2c2c",
  light: "#ccc",
  active: "#0066ff",
  hover: "#0256d4",
  inactive: "#c2c2c2",
  white: "#FFFFFF",
};

export const appVariables = {
  size: {
    bodyContainerHeight: `calc(100vh - ${topBarHeight} - ${toolBarHeight})`,
  },
  colors: {
    background: "#494949",
  },
};

export const headerVariables = {
  size: { topBarHeight, toolBarHeight, toolBarButtonSize },
  colors: {
    activeTab: "",
    notActiveTab: "",
  },
};

export default colors;
