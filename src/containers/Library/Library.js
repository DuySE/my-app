import { connect } from 'react-redux';
import Library from '../../components/Library';
import {
    actions as LibraryActions,
    selectors as LibrarySelectors,
} from '../../reducers/library';

const mapStateToProps = state => ({
    users: LibrarySelectors.getUsers(state),
});

const mapDispatchToProps = {
    register: LibraryActions.register,
    getJoke: LibraryActions.getJoke,
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);
