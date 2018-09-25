import React, { Component } from "react";
// import Twit from "twit";
// import { twitter } from "../config.json";
import Joi from "joi-browser";

class AddCandidateForm extends Component {
  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      data: { name: "", description: "", twitterUser: "" },
      search: "",
      items: []
    };
  }
  // schema = {
  //   name: Joi.string()
  //     .required()
  //     .label("User Name"),
  //   description: Joi.string().label("Description"),
  //   twitterUser: Joi.string()
  //     .required()
  //     .label("Twitter name")
  // };

  updateSearch(e) {
    this.setState({ search: e.target.value });
  }

  render() {
    let filteredTwitterUsers = this.state.items.filter(item => {
      return (
        item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    // const T = new Twit(twitter);
    // const params = {
    //   q: this.state.search,
    //   count: 10
    // };

    // T.get("users/search", params, getData);
    // function getData(err, data, response) {
    //   console.log(data);
    // }

    return (
      <React.Fragment>
        <h1>Add New Candidate</h1>
        <br />
        {/* <form
          onClick={this.addCandidate}
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        >
        <input></input>
        </form> */}
        <form onSubmit={this.addCandidate}>
          <label>
            Name:
            <input type="text" ref={input => (this.name = input)} />
          </label>
          <br />
          <label>
            Description:
            <input type="text" ref={input => (this.description = input)} />
          </label>
          <br />
          <label>
            Twitter:
            <input type="text" ref={input => (this.twitterUser = input)} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>

        {/* <ul className="list-unstyled">
          {filteredTwitterUsers.map(item => (
            <li key={item.id} style={{ color: "black" }}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul> */}
      </React.Fragment>
    );
  }
}

//   render() {
//
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input type="text" ref={name => (this.name = name)} />
//           </label>
//           <br />
//           <label>
//             Merits:
//             <input type="number" ref={merits => (this.merits = merits)} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     );
//   }
// }

export default AddCandidateForm;

// handleSubmit(e) {
//   alert(
//     "Added the candidate " +
//       this.name.value +
//       " and you staked " +
//       this.merits.value +
//       "mertis"
//   );
//   e.preventDefault();
// }
