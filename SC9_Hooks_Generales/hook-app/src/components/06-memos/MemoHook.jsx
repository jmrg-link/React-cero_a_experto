import { useMemo, useState } from 'react'
import { useCounter } from "../../hooks"

const heavyStuff = ( ieration=100 ) => {
    for (let i = 0; i < ieration;i++){
        console.log('ahi vamos...');
    }
    return `${ieration} iteraciones realizadas`
}


export const MemoHook = () => {
   const {counter , increment} =  useCounter(4000)
   const [ show, setShow ] = useState(true)

   const memoValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
        <h1>Counter: <small>{counter}</small> </h1>
        <hr/>
        <h4>{memoValue}</h4>
        <button
            className="btn btn-primary"
            onClick={() => increment()}
        >
            +1
        </button>
        <button
            className='btn btn-outline-primary'
            onClick={()=> setShow(!show)}
        >
            Show/Hide {JSON.stringify(show)}
        </button>
    </>
  )
}
