import Post from './Post/Post'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
  posts: state.userProfile.posts
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const PostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)

export default PostContainer
