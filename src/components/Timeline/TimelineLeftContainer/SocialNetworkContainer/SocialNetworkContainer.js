import SocialNetwork from './SocialNetwork/SocialNetwork'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
  profile: state.userProfile.profile
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const SocialNetworkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialNetwork)

export default SocialNetworkContainer
