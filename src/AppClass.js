import React, { Component } from 'react'

const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://www.ikea.com/kr/en/images/products/sy-scissors__0112301_pe263788_s5.jpg?f=s",
  },
  paper: {
    name: "Paper",
    img: "data:image/jpeg;base64,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",
  },
};

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: ""
    }
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice();

    this.setState({
      userSelect: choice[userChoice],
      computerSelect: choice[computerChoice],
      result: this.judgement(choice[userChoice], choice[computerChoice])
    });
  };

  judgement = (user, computer) => {
    let result = "";
    if (user.name === computer.name) {
      result = "Tie";
    } else if (user.name === "Rock") {
      result = computer.name === "Scissors" ? "win" : "lose";
    } else if (user.name === "Scissors") {
      result = computer.name === "Rock" ? "lose" : "win";
    } else if (user.name === "Paper") {
      result = computer.name === "Rock" ? "win" : "lose";
    }

    return result;
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체의 key 값만 뽑아서 배열의 아이템으로 들어감
    let randomItem = Math.floor(Math.random() * itemArray.length);

    return itemArray[randomItem];
  };

  render() {
    return (
      <>
        <div className="main">
          <Box title="You" item={userSelect} result={result} />
          <Box title="Computer" item={computerSelect} result={result} />
        </div>
        <div className="main">
          <button onClick={this.play("scissors")}>가위</button>
          <button onClick={this.play("rock")}>바위</button>
          <button onClick={this.play("paper")}>보</button>
        </div>
      </>
    )
  }
}
