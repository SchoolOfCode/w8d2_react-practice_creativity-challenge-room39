import { React, useState} from 'react'
import './Counter.css' 

function Counter(){
    const [count, setcount] = useState(0)
    function incrementCount(){
        setcount (count +1 )
    }
function deincrementCount(){
    setcount (count -1 )
}    
return (
    <div className='Button'>
    <button className='incbutton' onClick={incrementCount}>Click me!</button>
    <p>You've clicked {count} times!</p>
    <button className='deincbutton' onClick={deincrementCount}>Unclick me!</button>
    </div>
    )

}
export default Counter 

