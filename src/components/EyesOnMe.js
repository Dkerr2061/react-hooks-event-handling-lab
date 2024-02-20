
function EyesOnMe() {
  function hadleFocus() {
    console.log('Good!')
  }

  function handleBlur() {
    console.log('Hey! Eyes on me!')
  }

  return (
      <button onFocus={hadleFocus} onBlur={handleBlur}>
        Eyes on me
      </button>
  )
}

export default EyesOnMe;
