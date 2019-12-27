import { connect } from 'react-redux';
import Blog from '../../components/Blog';
import {
    actions as BlogActions,
    selectors as BlogSelectors,
} from '../../reducers/blog';

const mapStateToProps = state => ({
    blogs: BlogSelectors.getBlog(state),
});

const mapDispatchToProps = {
    handleSubmit: BlogActions.handleSubmit,
    handleDelete: BlogActions.handleDelete,
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
