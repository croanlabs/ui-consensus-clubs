import * as actions from '../Actions';
import { connect } from 'react-redux';
import UserInfo from '../Components/Authentication/UserInfo';

const mapStateToProps = state => {
  return {
    unopinionatedMerits: state.unopinionatedMerits
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUnopinionatedMeritsUpdated: unopinionatedMerits => {
      dispatch(actions.updateUnopinionatedMerits(unopinionatedMerits));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
