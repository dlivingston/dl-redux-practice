import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, incrementAsync, selectCount } from "./counterSlice";
import styles from './Counter.module.scss'

export function Counter() {
	const count = useSelector(selectCount)
	const dispatch = useDispatch()
	const [incrementAmount, setIncrementAmount] = useState('0');
	
	return (
		<div className={styles['counter-wrapper']}>
			<div className={styles.row}>
				<button
					aria-label="Increment value"
					onClick={() => dispatch(increment())}
				>
					+
				</button>
				<span className={styles['count-display']}>{count}</span>
				<button
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
				>
					-
				</button>
			</div>
			<div className={styles.row}>
				<input 
					type="text" 
					className={styles.textbox} 
					aria-label="Set increment amount" 
					value={incrementAmount}
					onChange={e => setIncrementAmount(e.target.value)}
				 />
				 <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>Add Amount</button>
				 <button onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>Add Async</button>
			</div>
		</div>
	)
}

export default Counter;