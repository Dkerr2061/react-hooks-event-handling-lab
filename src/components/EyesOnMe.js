import React from "react";



function EyesOnMe() {
  function hadleFocus() {
    console.log('Good!')
  }

  function handleBlur() {
    console.log('Hey! Eyes on me!')
  }

  return (
    <div>
      <button onFocus={hadleFocus} onBlur={handleBlur}>
        Eyes on me
      </button>
    </div>
  )
}

export default EyesOnMe;
