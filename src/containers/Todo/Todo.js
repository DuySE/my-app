import { connect } from 'react-redux';
import Todo from '../../components/Todo';
import {
    actions as TodoActions,
    selectors as TodoSelectors,
} from '../../reducers/todo';

const mapStateToProps = state => ({
    items: TodoSelectors.getItem(state),
});

// const mapDispatchToProps = dispatch => ({
//     increase: () => dispatch(CounterActions.increase()),
//     increase: (param) => dispatch(CounterActions.increase(param)),
// })

const mapDispatchToProps = {
    handleChange: TodoActions.handleChange,
    handleSubmit: TodoActions.handleSubmit,
    handleDelete: TodoActions.handleDelete,
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
