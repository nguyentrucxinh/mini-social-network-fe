import TimelineLeft from './TimelineLeft/TimelineLeft'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
  userProfile: state.userProfile,
  params: ownProps.username
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const TimelineLeftContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineLeft)

export default TimelineLeftContainer
