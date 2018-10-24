import React from "react";
import Autosuggest from "react-autosuggest";
import axios from "axios";
import searchIcon from "../../assets/icons/coloursearch-icon.png";
import "./TwitterUserInput.scss";

class TwitterUserInput extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      suggestions: []
    };
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    });
  }

  async onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: await this.getSuggestions(value)
    });
  }

  async getSuggestions(value) {
    if (value.length < 3) {
      return [];
    }
    let request = {
      params: {
        q: value
      }
    };
    const { data: suggestions } = await axios.get(
      `${process.env.REACT_APP_API_URL}${
        process.env.REACT_APP_TWITTER_USER_SEARCH
      }`,
      request
    );
    return suggestions;
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }

  getSuggestionValue(suggestion) {
    return suggestion.screen_name;
  }

  onSuggestionSelected(event, { suggestion }) {
    this.props.onSuggestionSelected(suggestion);
  }

  renderSuggestion(suggestion) {
    return (
      <li className="card green">
        <div className="card-container">
          <div className="flex-sb">
            <div className="profile flex">
              <div className="image-cropper">
                <img
                  src={suggestion.profile_image_url_https}
                  alt="Metem"
                  className="profile-pic"
                />
              </div>
              <div className="name">
                <h2>{suggestion.name}</h2>
                <h3>@{suggestion.screen_name}</h3>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }

  render() {
    const { value, suggestions } = this.state;
    const { placeholder } = this.props;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: placeholder,
      value,
      onChange: this.onChange.bind(this),
      className: "find"
    };

    return (
      <div className="twitter-autosuggest">
        <img className="search-icon" src={searchIcon} alt="Find" />
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(
            this
          )}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(
            this
          )}
          onSuggestionSelected={this.onSuggestionSelected.bind(this)}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      </div>
    );
  }
}

export default TwitterUserInput;
