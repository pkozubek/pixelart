import React from "react";
import PixelGrid from "../PixelGrid/PixelGrid";
import { render, screen } from "@testing-library/react";
import { PixelContextProvider } from "../context/PixelContext";
import { EditorContextContextProvider } from "../context/EditorContext";
import { baseHeight, baseWidth } from "../consts";

const Provider = ({ children }) => {
  return (
    <PixelContextProvider>
      <EditorContextContextProvider>{children}</EditorContextContextProvider>
    </PixelContextProvider>
  );
};

describe("Pixel Grid", () => {
  beforeAll(() => {
    render(<PixelGrid />, { wrapper: Provider });
  });

  test("pixel grid displayed correctly", () => {
    const [pixelGrid] = document.getElementsByClassName("PixelGrid");
    expect(pixelGrid.children).toHaveLength(baseHeight * baseWidth);
  });
});
