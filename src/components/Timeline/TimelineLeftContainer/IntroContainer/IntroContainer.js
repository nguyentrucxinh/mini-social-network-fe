import Intro from './Intro/Intro'
import { connect } from 'react-redux'
import { getUserProfile } from '../../../../actions/homeAction'

const mapStateToProps = (state, ownProps) => ({
  userProfile: state.userProfile
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGetUserProfile: () => {
    dispatch(getUserProfile(ownProps.username))
  }
})

const IntroContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Intro)

export default IntroContainer
