const App = () => {
  return React.createElement("div", null,
    React.createElement("h1", null, "Галерея Instrhub"),
    React.createElement("img", { src: "assets/example.png", alt: "Example" })
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
