
function Keypad (){
    function handleInput() {
        console.log('Entering password...')
    }
    return (
        <div>
            <form>
             <input type="password" placeholder="Enter Password" onChange={handleInput}/>
            </form>
        </div>
    )
}

export default Keypad;