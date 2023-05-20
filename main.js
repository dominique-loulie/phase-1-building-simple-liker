// Defining text characters for the empty and full hearts => to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//STARTS HERE => CODE
const errorModel = document.getElementById('model') // Find error model
errorModel.classList.add('hidden') // add class hidden to error model


const heartClicked = (event) => { // events created => for hearts
  
  mimicServerCall()  // call mimicServer
  .then(()=>{  // if resolve 
    if(event.target.textContent == EMPTY_HEART){  // check if heart => empty
      event.target.textContent = FULL_HEART       // reassign content => full heart
      event.target.classList.add('activated-heart') // add class t=> give colour heart
    }else{
      event.target.textContent = EMPTY_HEART      // reassign content => empty heart
      event.target.classList.remove('activated-heart')   // remove class => colour heart
    }

  })
  .catch(()=>{  // if server is reject
    errorModel.classList.remove('hidden')  // Make appear error model
    setTimeout(function(){  // Make dissapear error model after 3 seconds
      errorModel.classList.add('hidden') // Make error model dissapear
    }, 3000)
  })
  
}

let hearts = document.getElementsByClassName('like-glyph') //Search for all => avaiable hearts
for (let heart of hearts) { // loop thru the hearts
  heart.addEventListener('click', heartClicked) //add event listener => hearts
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
