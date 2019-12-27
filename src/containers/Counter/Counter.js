import { connect } from 'react-redux';
import Counter from '../../components/Counter';
import {
    actions as CounterActions,
    selectors as CounterSelectors,
} from '../../reducers/counters';

const mapStateToProps = state => ({
    counter: CounterSelectors.getCounter(state),
});

// const mapDispatchToProps = dispatch => ({
//     increase: () => dispatch(CounterActions.increase()),
//     increase: (param) => dispatch(CounterActions.increase(param)),
// })

const mapDispatchToProps = {
    increase: CounterActions.increase,
    decrease: CounterActions.decrease,
    handleChange: CounterActions.handleChange,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
