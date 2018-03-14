import Friend from './Friend/Friend'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
  friends: state.userProfile.friends
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const FriendContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Friend)

export default FriendContainer
