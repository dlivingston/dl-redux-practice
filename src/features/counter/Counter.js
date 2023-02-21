import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, incrementAsync, selectCount } from "./counterSlice";
import styles from './Counter.module.scss'

export function Counter() {
	const count = useSelector(selectCount)
	const dispatch = useDispatch()
	
	return (
		<div className={styles['counter-wrapper']}>
			<div className={styles.row}>
				<button
					aria-label="Increment value"
					onClick={() => dispatch(increment())}
				>
					Increment
				</button>
				<span className={styles['count-display']}>{count}</span>
				<button
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</button>
			</div>
		</div>
	)
}

export default Counter;