import React from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import searchIcon from '../../assets/icons/coloursearch-icon.png';
import searchIconWhite from '../../assets/icons/rewards/Find Icon@2x.png';
import addIcon from '../../assets/icons/add.png';
import deleteButton from '../../assets/icons/remove-icon2.png';
import './TwitterUserInput.scss';

class TwitterUserInput extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: [],
      noResults: false
    };
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    });
  }

  async onSuggestionsFetchRequested({ value }) {
    const suggestions = await this.getSuggestions(value);
    const isInputBlank = value.trim().length < 3;
    const noResults = !isInputBlank && suggestions.length === 0;
    this.setState({
      suggestions,
      noResults
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
    console.log(suggestions);
    return suggestions;
  }

  handleValueClear() {
    this.setState({ value: '', noResults: false });
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
    this.setState({ value: '' });
  }

  renderSuggestion(suggestion) {
    return (
      <li className="card">
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
              <div className="add-icon">
                <img src={addIcon} alt="add-icon" className="add-icon" />
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }

  render() {
    const { value, suggestions, noResults } = this.state;
    const { placeholder, searchImg } = this.props;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder,
      value,
      onChange: this.onChange.bind(this),
      className: 'find'
    };

    let searchIcons =
      searchImg == 'white' ? (
        value.length > 0 ? (
          // Rewards page
          <img
            className="delete-button"
            src={deleteButton}
            alt="delete"
            onClick={this.handleValueClear.bind(this)}
          />
        ) : (
          <img className="search-icon" src={searchIconWhite} alt="Find" />
        )
      ) : (
        // Add Candidate page
        <React.Fragment>
          <img
            className="delete-button"
            src={deleteButton}
            alt="delete"
            onClick={this.handleValueClear.bind(this)}
          />
          <img className="search-icon" src={searchIcon} alt="Find" />
        </React.Fragment>
      );

    return (
      <div className="twitter-autosuggest">
        {searchIcons}
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
        {noResults && <div className="no-results">no results</div>}
      </div>
    );
  }
}

export default TwitterUserInput;
