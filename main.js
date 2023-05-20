// Defining text characters for the empty and full hearts => to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//STARTS HERE => CODE

const likeButtons = document.querySelectorAll('.like-glyph');
const errorModal = document.querySelector('#modal'); // Find error modal
const errorMessage = document.querySelector('#modal-message');

errorModal.classList.add('hidden'); // add class hidden to error model

function toggleLike(event) {
  const heart = event.target; //events created => for hearts
  mimicServerCall() // call mimicServer
    .then(() => { // if resolve 
      heart.classList.toggle('activated-heart');
      if (heart.classList.contains('activated-heart')) {
        heart.innerText = '♥';
      } else {
        heart.innerText = '♡';
      }
    })
    .catch(() => { // if server is reject
      errorMessage.innerText = 'Oops! Something went wrong.'; 
      errorModal.classList.remove('hidden'); // Make appear error model
      setTimeout(() => { // Make dissapear error model after 3 seconds
        errorModal.classList.add('hidden'); // Make error model dissapear
      }, 3000);
    });
}

for (const button of likeButtons) { // loop thru the hearts
  button.addEventListener('click', toggleLike); //add event listener => hearts
}

//ENDS HERE => CODE

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
