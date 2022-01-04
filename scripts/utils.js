const keyEscHandler = (evt) => {
  if(evt.key === 'Escape') {
    hidePopUp(document.querySelector('.pop-up_shown'))
  }
}

const mouseHandler = (evt) => {
  hidePopUp(evt.target)
}

function showPopUp (target) {
  target.classList.add('pop-up_shown')
  document.addEventListener('keydown', keyEscHandler)
  target.addEventListener('click', mouseHandler)
}

function hidePopUp (target) {
  target.classList.remove('pop-up_shown')
  document.removeEventListener('keydown', keyEscHandler)
  target.removeEventListener('click', mouseHandler)  
}

export {showPopUp, hidePopUp}