import HomeLeft from './HomeLeft/HomeLeft'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
  userProfile: state.userProfile,
  params: ownProps.username
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const HomeLeftContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeLeft)

export default HomeLeftContainer
