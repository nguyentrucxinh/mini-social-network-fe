import TimelineLeft from './TimelineLeft/TimelineLeft'
import { connect } from 'react-redux'
import { getUserProfile } from '../../../actions/homeAction'

const mapStateToProps = (state, ownProps) => ({
  userProfile: state.userProfile
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGetUserProfile: () => {
    dispatch(getUserProfile(ownProps.username))
  }
})

const TimelineLeftContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineLeft)

export default TimelineLeftContainer
