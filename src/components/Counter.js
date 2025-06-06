import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
    const counter = useSelector(state => state.counter.counter);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch({ type: 'increment' });
    }
    const decrementHandler = () => {
        dispatch({ type: 'decrement' });
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counter}</div>
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
        </main>
    )
}

export default Counter;