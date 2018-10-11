import React, { Component } from "react";
import PropTypes from "prop-types";

class AddPoll extends Component {
  constructor() {
    super();
    this.state = {
      newPoll: {}
    };
  }
  static defaultProps = {
    categories: [
      "Finance",
      "Marketing",
      "Advertising",
      "Social Media",
      "IT",
      "Crypto currency",
      "Geography",
      "Others"
    ]
  };

  handleSubmit(e) {
    let id = 4; // how can i increment?
    if (this.refs.question.value === "") {
      alert("Please enter a question");
    } else {
      this.setState(
        {
          newPoll: {
            id: id,
            question: this.refs.question.value,
            category: this.refs.category.value,
            description: this.refs.description.value,
            candidates: []
          }
        },
        function() {
          // console.log(this.state);
          this.props.addPoll(this.state.newPoll);
        }
      );
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return (
        <option key={category} value={category}>
          {category}
        </option>
      );
    });

    return (
      <div>
        <h4>
          <a href="#">Want to set a poll? Click here</a>
        </h4>
        {/* <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Question</label>
            <br />
            <input type="text" ref="question" />
          </div>
          <br />
          <div>
            <label>Category</label>
            <br />
            <select ref="category">{categoryOptions}</select>
          </div>
          <br />
          <div>
            <label>Description</label>
            <br />
            <input type="text" ref="description" />
          </div>
          <br />
          <input type="submit" value="Submit" />
        </form> */}
      </div>
    );
  }
}

AddPoll.propTypes = {
  categories: PropTypes.array,
  addPoll: PropTypes.func
};

export default AddPoll;
