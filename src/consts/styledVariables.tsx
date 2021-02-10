export const topBarHeight = "36px";
export const toolBarHeight = "120px";
export const toolBarButtonSize = "55px";

export const colors = {
  grey: "#ccc",
  menu: "#ede9e8",
  menuHover: "#e0dbda",
  toolBar: "#ede9e8",
  white: "#FFFFFF",
};

export const appVariables = {
  size: {
    bodyContainerHeight: `calc(100% - ${topBarHeight} - ${toolBarHeight})`,
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
