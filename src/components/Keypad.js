
function Keypad (){
    function handleInput() {
        console.log('Entering password...')
    }
    return (
             <input type="password" placeholder="Enter Password" onChange={handleInput}/>
    )
}

export default Keypad;