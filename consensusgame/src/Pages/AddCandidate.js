import { Component } from "react";
// import PropTypes from "prop-types";
// import NumericInput from "react-numeric-input";
// import Profile from "./Profile";
// import Joi from "joi-browser";
// import { getMovie, saveMovie } from "../services/fakeMovieService";
// import { getTwitterUsers } from "../services/fakeTwitterUser";

class AddCandidate extends Component {
  state = {
    //   data: {
    //     poll_id: "",
    //     id: ""
    //   },
    //   twitter_users: [],
    //   total_tokens_confidence: "",
    //   total_tokens_no_confidence: "0.00000000000000000",
    //   errors: {}
    // };
    // schema = {
    //   poll_id: Joi.number(),
    //   id: Joi.string(),
    //   twitter_user: Joi.string()
    //     .required()
    //     .label("Twitter"),
    //   name: Joi.string()
    //     .required()
    //     .label("Name"),
    //   description: Joi.string()
    //     .required()
    //     .label("Description"),
    //   total_tokens_confidence: Joi.number()
    //     .required()
    //     .min(10)
    //     // how much the user has
    //     .max(1000)
    //     .label("How many merits?")
    // };
    // componentDidMount() {
    //   const twitter_users = getTwitterUser();
    //   this.setState({ twitter_users });
    //   const twitter_userId = this.props.match.params.id;
    //   if (twitter_userId === "new") return;
    //   const candidate = getCandidate(id);
    //   if (!cadidate) return this.props.history.replace("/not-found");
    //   this.setState({ data: this.mapToViewModel(candidates) });
    // }
    // mapToViewModel(candidates) {
    //   return {
    //     id: candidates._id,
    //     poll_idtle: candidates.poll_id,
    //     twitter_user: candidates.twitter_user,
    //     total_tokens_no_confidence: candidates.total_tokens_confidence
    //   };
    // }
    // doSubmit = () => {
    //   saveCandidate(this.state.data);
    //   this.props.history.push("/candidates");
  };
  render() {
    return null;
    //   <div>
    //     <h1>Add a Candidate</h1>
    //     <form onSubmit={this.handleSubmit}>
    //       {this.renderSelect(
    //         "twitter_user",
    //         "Twitter ID",
    //         this.state.twitter_user
    //       )}
    //       {this.renderInput(
    //         "total_tokens_confidence",
    //         "How many merits?",
    //         "number"
    //       )}
    //       {this.renderButton("Save")}
    //     </form>
    //   </div>;
    // }
  }
}

export default AddCandidate;

//   handleSubmit(e) {
//     let id = 4;
//     if (this.refs.twitter.value === "") {
//       alert("Please enter twitter id");
//     } else {
//       this.setState(
//         {
//           newCandidate: {
//             id: id,
//             name: this.refs.name.value,
//             twitter: this.refs.twitter.value,
//             confidence: this.refs.confidence.value,
//             noconfidence: "0"
//             // description: this.refs.description.value
//           }
//         },
//         function() {
//           //console.log(this.state)
//           this.props.addCandidate(this.state.newCandidate);
//         }
//       );
//     }
//     e.preventDefault();
//   }

//   render() {
//     let twitterOptions = this.props.twitteraccounts.map(twitter => {
//       return (
//         <option key={twitter} value={twitter}>
//           {twitter}
//         </option>
//       );
//     });
//   }
// }
