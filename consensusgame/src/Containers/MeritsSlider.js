import * as actions from '../Actions';
import { connect } from 'react-redux';
import MeritsSlider from '../Components/MeritsSlider/MeritsSlider';

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
)(MeritsSlider);
