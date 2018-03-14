import SocialNetwork from './SocialNetwork/SocialNetwork'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
  userProfile: state.userProfile
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const SocialNetworkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialNetwork)

export default SocialNetworkContainer
