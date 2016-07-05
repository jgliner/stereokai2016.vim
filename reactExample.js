import React from 'react';

const whatup = (greeting = 'sup') => {
  return greeting;
}

let pleaseChange;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.aBunchOfArgs = aBunchOfArgs.bind(this);
  }

  aBunchOfArgs() {
    console.log(...args);
  }

  render() {
    pleaseChange = 'thanks';
    console.log(pleaseChange);
    return (
      <div className="root">
        <h1>Color Scheme!</h1>
        <CustomComponent
          color="burgandy"
          className="ron"
          ohHey={whatup}
        / >
        <article>{`oh hey ${whatup()}`}</article>
      </div>
    )
  }
}

