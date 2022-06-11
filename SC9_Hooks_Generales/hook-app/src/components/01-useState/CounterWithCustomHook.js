import React from 'react'
import { useCounter } from "../../hooks/useCounter";
import './counter.css'

export const CounterWithCustomHook = () => {
	
	const { state , increment , decrement , reset } = useCounter(0)
	
	return (
		<>
			<h1>Counterwith Hook: {state}</h1>
			<hr/>
			<button onClick={()=> increment(1)} className='btn btn-primary mr-2'>+ 1</button>
			<button onClick={()=> reset()} className='btn btn-info mr-2'> Reset </button>
			<button onClick={()=> decrement(1)} className='btn btn-danger'>- 1</button>
		</>
	)
}
