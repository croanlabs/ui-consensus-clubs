import React, { Component } from "react";
// import ariGraph from "./Icons/Rewards"

class Trends extends Component {
  render() {
    const trendsCandidates = [
      {
        id: 0,
        name: "Ari Paul",
        candidateName: "@aridavidpaul",
        up: true,
        rateNumber: 10,
        graph: "aridavidpaulGraph"
      },
      {
        id: 1,
        name: "Chris Burniske",
        candidateName: "@cburniske",
        up: false,
        rateNumber: 8,
        graph: "cburniskeGraph"
      },
      {
        id: 0,
        name: "Ari Paul",
        candidateName: "@aridavidpaul",
        up: true,
        rateNumber: 10,
        graph: "ariGraph"
      },
      {
        id: 0,
        name: "Ari Paul",
        candidateName: "@aridavidpaul",
        up: true,
        rateNumber: 10,
        graph: "ariGraph"
      },
      {
        id: 0,
        name: "Ari Paul",
        candidateName: "@aridavidpaul",
        up: true,
        rateNumber: 10,
        graph: "ariGraph"
      },
      {
        id: 0,
        name: "Ari Paul",
        candidateName: "@aridavidpaul",
        up: true,
        rateNumber: 10,
        graph: "ariGraph"
      },
      {
        id: 0,
        candidateName: "@fredwilson",
        voted: true,
        removeYes: true
      },
      {
        id: 2,
        candidateName: "@scamcoin",
        voted: false,
        removeYes: null
      }
    ];

    return <h1>Trends!!</h1>;
  }
}

export default Trends;
