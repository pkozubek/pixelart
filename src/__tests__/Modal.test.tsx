import React from "react";
import Modal from "../UI/Modal/Modal";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

function addModalDivs() {
  const modalDiv = document.createElement("div");
  modalDiv.id = "modal";
  document.body.appendChild(modalDiv);
  const shadowDiv = document.createElement("div");
  shadowDiv.id = "shadow";
  document.body.appendChild(shadowDiv);
}

describe("Modal", () => {
  let fakeVisibilityHandler = jest.fn();
  let fakeButtonHandler = jest.fn();

  let renderReturn;
  const title = "title_test";
  const content = "content_test";

  beforeEach(() => {
    addModalDivs();
    renderReturn = render(
      <>
        <Modal
          visibilityHandler={fakeVisibilityHandler}
          visible
          content={content}
          title={title}
          buttons={[
            {
              name: "test_button",
              key: "test_key",
              action: fakeButtonHandler,
            },
          ]}
        />
      </>
    );
  });

  test("close button triggers visiblityHandler and content is displayed correctly", () => {
    userEvent.click(screen.getByRole("button", { name: /close_modal/i }));
    expect(fakeVisibilityHandler).toHaveBeenCalled();
    expect(screen.getByRole("heading", { name: title })).toHaveTextContent(
      title
    );
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  test("actions button render and triggers onclick function", () => {
    userEvent.click(screen.getByRole("button", { name: /test_button/i }));
    expect(fakeButtonHandler).toHaveBeenCalled();
  });

  test("rerender with visible false does not display modal", () => {
    renderReturn.rerender(
      <Modal
        visibilityHandler={fakeVisibilityHandler}
        visible={false}
        content="test"
        title="test"
        buttons={[
          {
            name: "test_button",
            key: "test_key",
            action: fakeButtonHandler,
          },
        ]}
      />
    );

    expect(document.getElementById("modal").children).toHaveLength(0);
  });
});
