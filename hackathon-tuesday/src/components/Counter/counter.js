import { React, useState} from 'react'

function Counter(){
    const [count, setcount] = useState(0)
    function incrementCount(){
        setcount (count +1 )
    }
function deincrementCount(){
    setcount (count -1 )
}    
return (
    <div>
    <button onClick={incrementCount}>Click me!</button>
    <p>You've clicked {count} times!</p>
    <button onClick={deincrementCount}>Unclick me!</button>
    </div>
    )

}
export default Counter 

