const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h3", {}, props.breed)
  ]);
};

class App extends React.Component {
  handleClick() {
    alert("h1 was clicked");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement("h1", { onClick: this.handleClick }, "Adopt me!"),
      React.createElement(Pet, {
        name: "Luna",
        animal: "dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "bird",
        breed: "Cockatiel"
      }),
      React.createElement(Pet, {
        name: "Kiara",
        animal: "dog",
        breed: "Mixed"
      })
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
