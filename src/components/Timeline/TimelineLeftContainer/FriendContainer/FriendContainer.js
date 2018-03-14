import Friend from './Friend/Friend'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
  userProfile: state.userProfile
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const FriendContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Friend)

export default FriendContainer
