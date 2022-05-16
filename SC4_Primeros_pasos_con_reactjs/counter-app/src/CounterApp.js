import React, { Fragment , useState  } from 'react';
import { PropTypes } from 'prop-types'

// funcional component
const CounterApp = ({
    value,
}) => {
    //useState
    const [counter , setCounter] = useState(value)

    //reste 

    // handleAdd +1
    const handleAdd = () =>  setCounter((counter)=> counter + 1)
    
    // reset
    const handleReset= () =>{
        setCounter((counter)=>{
            return counter = value
        })
    }
    // handleAdd -1
    const handleSubstract = () =>{
        if (counter <= 0) {
            return counter
        }
        setCounter( counter -1 )
    }

    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </Fragment>
    )
}

CounterApp.prototype = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 0
}

export default CounterApp
