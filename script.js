function divShow(div) {
   // Making sure all other divs are closed first
   // const otherDivs = document.getElementsByTagName("div").style;
   // if (otherDivs.width != "0") {
   //    otherDivs.width = "0";
   //    otherDivs.height = "0";
   // }

   // Opening selected div
   const divStyle = document.getElementById(div).style;
   if (divStyle.height == "100%") {
      divStyle.height = "0";
      divStyle.width = "0";
   }
   else {
      divStyle.height = "100%";
      divStyle.width = "100%";
   }
}

// Enlarge elements when selected
function enlarge() { }

function showDescription(projectType, project) {
   // I cannot use a variable in place of
   // document.getElementById(projectType).innerHTML
   // It's very annoying
   const placeholder = document.getElementById(projectType).innerHTML;
   switch (project) {
      // Comp Sci
      case "compSci1":
         document.getElementById(projectType).innerHTML = "Panther Lounge Database, 2023-2024 <br> This is a wireframe of a Senior Capstone Project completed alongside David Walston and Joseph Robson. The Panther Lounge Database was designed to help club officers to administer and track items from a student-run library. This includes allowing members to check items in and out of the library in addition to letting officers add and remove available items. <br> <a href='https://msstake.github.io/PantherLoungeDatabase/index.html'>Click here to view the progress site featuring extensive documentation through the project lifespan</a>";
         break;
      case "compSci0":
         document.getElementById(projectType).innerHTML = "Worse for Ware, Fall 2022 <br> Worse for Ware is a parody game based on the WarioWare series created using MASM for a computer architecture class. Like the WarioWare games, Worse for Ware features a series of simple minigames with vague instructions the player must complete before running out of time. Every time a minigame is completed, a point is added to the player's score. Every time the player fails the minigame or runs out of time, they lose a life. If the player is out of lives, the game ends, and the player recicives their final score.";
         break;
      // Social Media & Marketing
      case "socialMed3":
         document.getElementById(projectType).innerHTML = "";
         break;
      case "socialMed2":
         document.getElementById(projectType).innerHTML = "";
         break;
      case "socialMed1":
         document.getElementById(projectType).innerHTML = "";
         break;
      case "socialMed0":
         document.getElementById(projectType).innerHTML = "";
         break;
      // Digital Art
      case "digiArt1":
         document.getElementById(projectType).innerHTML = "'labor.' - April 11, 2026 <br> Created and later posted to Instagram, 'labor.' was traced and shaded over a painted sketch that was completed earlier on the same day. The larger figure is meant to appear as if it were sketched using graphite, similar to the original drawing. The graphite look was replicated using the peppermint pencil brush. The smaller figure was created with pencil brush, the smudge tool and some light erasing. Both the smudge and eraser tools were set to the medium airbrush brush. A heavier eraser set to the diagonal texture brush was used to go over the smaller figure once more. All tools and brushes mentioned can be found in Procreate's classic default brush set";
         break;
      case "digiArt0":
         document.getElementById(projectType).innerHTML = "'melting', October 13, 2022 <br></p>";
         break;
      default:
         break;
   }
}
