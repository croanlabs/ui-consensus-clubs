import * as actions from '../Actions';
import { connect } from 'react-redux';
import ModifySlider from '../Components/MeritsSlider/ModifySlider';

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
)(ModifySlider);
