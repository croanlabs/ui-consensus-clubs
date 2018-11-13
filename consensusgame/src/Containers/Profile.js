import * as actions from '../Actions';
import { connect } from 'react-redux';
import Profile from '../Pages/Profile';

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

const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default ProfileContainer;
