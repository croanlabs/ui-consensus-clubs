import React, { Component } from "react";
import PropTypes from "prop-types";

class AddCandidate extends Component {
  constructor() {
    super();
    this.state = {
      newCandidate: {}
    };
  }

  static defaultProps = {
    twitteraccounts: [
      "@nmnmnm",
      "@cryptobobby",
      "@ninja",
      "@consensusclubs",
      "@crypton",
      "Unable to find"
    ]
  };

  handleSubmit(e) {
    let id = 4;
    if (this.refs.name.value === "") {
      alert("Please enter a name");
    } else {
      this.setState(
        {
          newCandidate: {
            id: id,
            name: this.refs.name.value,
            twitter: this.refs.twitter.value,
            confidence: "0",
            noconfidence: "0",
            description: this.refs.description.value
          }
        },
        function() {
          //console.log(this.state)
          this.props.addCandidate(this.state.newCandidate);
        }
      );
    }
    e.preventDefault();
  }

  render() {
    let twitterOptions = this.props.twitteraccounts.map(twitter => {
      return (
        <option key={twitter} value={twitter}>
          {twitter}
        </option>
      );
    });

    // + mark icon

    // adding candidate form

    return (
      <div>
        <h4>Add New Candidate</h4>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Name</label>
            <br />
            <input type="text" ref="name" />
          </div>
          <br />
          <div>
            <label>Twitter</label>
            <br />
            <select ref="twitter">{twitterOptions}</select>
          </div>
          <br />
          <div>
            <label>Description</label>
            <br />
            <input type="text" ref="description" />
          </div>
          <br />
          {/* How much you want to state */}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

// AddInvestor.propTypes = {
//   twitteraccounts: PropTypes.array,
//   addInvestor: PropTypes.func
// };

export default AddCandidate;

// var { isLoaded, candidates } = this.state;

//     let candidate;
//     if (this.props.candidates) {
//       candidate = this.props.candidates.map(candidate => {
//         return (
//           <div>
//             <Candidate
//               onConf={this.upVoteInvestor.bind(this)}
//               onNoConf={this.downVoteInvestor.bind(this)}
//               key={candidate.name}
//               candidate={candidate}
//             />
//             <AddCandidate addCandidate={this.handleAddCandidate.bind(this)} />
//           </div>
//         );
//       });
//     }
//     return (
//       <div className="candidates">
//         <br />
//         <br />
//         {candidate}
//       </div>
