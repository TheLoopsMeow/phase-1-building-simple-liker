// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const userToLike = document.getElementsByClassName("like-glyph")
const updateLike = userToLike[0]

updateLike.addEventListener("click", (e)=>{

mimicServerCall()
.then((r)=>{
  //   When the "server" returns a success status:
// Change the heart to a full heart

updateLike.classList.add("activated-heart")
//added the full heart to make it more visually appealing
updateLike.innerText = FULL_HEART
// updateLike.innerHTML = ""

})
.catch((error)=>{
  const pageError = document.querySelector("h2")
  const modal = document.getElementById("modal")

  pageError.classList.add("")
  // Use setTimeout to hide the modal after 3 seconds (add the .hidden class)

  modal.innerContent = error
  setTimeout(modal.id = ".hidden")
  
//closes the server call chain, the last of which is the .catch
})
//closes the event listener
})

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
