// set asymc for js delays
async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// change theme
function changeTheme(selection) {
  theme = document.getElementsByTagName('link')[1];
  switch (selection) {
    case "artDeco":
      theme.href = 'artDeco.css';
      break;
    case "minimalist":
      theme.href = 'minimalist.css';
      break;
    case "typographic":
      theme.href = 'typographic.css';
      break;
    default:

  }
}

async function closeBook(book) {
  chosenBook = document.getElementById(book)
  bookContent = document.getElementById('open-' + book)
  // open book content slides off screen
  bookContent.style.transform = "translatey(60em)"
  await delay (500)
  // book covr reappears on stack
  chosenBook.style.transform = "translatey(-.015em)"
  await delay (500)
}

async function openBook(book) {
  chosenBook = document.getElementById(book)
  bookContent = document.getElementById('open-' + book)
  // if (chosenBook = "notebook") {
  //   otherBook = document.getElementById("sketchbook")
  // }
  // else {
  //   otherBook = document.getElementById("notebook")
  // }
  // moving books in the stack
  chosenBook.style.transform = "rotate(90deg)"
  // otherBook.style.transform = "translatey(20em)"
  await delay(500)
  // slide book down off screen
  chosenBook.style.transform = "translatey(50em)"
  // slide open book on screen
  await delay (500)
  bookContent.style.transform = "translatey(-60em)"
}

// reveal samples
function showSamples(selection) {
  var samples = document.getElementById("change");
    switch (selection) {
      case "webApplications":
      // when you have time, add css that,
      // on hover:, tells users to click on the embed to open the site in another window
      samples.innerHTML =
      '<a target="_blank"><embed src="https://msstake.github.io/PantherLoungeDatabase"></a>';
      break;
      case "art":
samples.innerHTML =
      '<img src="photos/melting.png" alt="Oct 13, 2022">';
        break;
      case "tumblrThemes":
        // add tumblr themes later
        break;
      default:
        samples.innerHTML = '<p id="change"> </p>'
        break;
  }
}

function seeDesk() {
  if (window.outerWidth < 1000) {
    alert("Can't see the desk? Try resizing")
  }
}
