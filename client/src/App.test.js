import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Navbar from "./components/Navbar";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("App is a thing", () => {
  const n = <App />;
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeFalsy();
});

test("Navbar is a thing", () => {
  const n = <Navbar />;
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeFalsy();
});