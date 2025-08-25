import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom/client";

const photos = [ "assets/example.png" ];

function App() {
  return (
    React.createElement("div", {style:{fontFamily:"sans-serif", textAlign:"center"}},
      React.createElement("h1", null, "Галерея InstrHub"),
      React.createElement("div", {style:{display:"flex", flexWrap:"wrap", gap:"10px", justifyContent:"center"}},
        photos.map((src, i) =>
          React.createElement("img", {
            key: i, src, alt: "Фото" ,
            style:{maxWidth:"300px", borderRadius:"10px"}
          })
        )
      )
    )
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
