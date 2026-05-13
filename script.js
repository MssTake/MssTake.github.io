function showGallery(div) {
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
      divStyle.visibility = "hidden"
      divStyle.width = "0";
   }
   else {
      divStyle.height = "100%";
      divStyle.visibility = "visible"
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

      // Comp Sci & Education

      // Projects
      case "compSci1":
         document.getElementById(projectType).innerHTML = "Panther Lounge Database, 2023-2024 <br> This is a wireframe of a Senior Capstone Project completed alongside David Walston and Joseph Robson. The Panther Lounge Database was designed to help club officers to administer and track items from a student-run library. This includes allowing members to check items in and out of the library in addition to letting officers add and remove available items. <br> <a href='https://msstake.github.io/PantherLoungeDatabase/index.html'>Click here to view the progress site featuring extensive documentation through the project lifespan</a>";
         break;
      case "compSci0":
         document.getElementById(projectType).innerHTML = "Worse for Ware, Fall 2022 <br> Worse for Ware is a parody game based on the WarioWare series created using MASM for a computer architecture class. Like the WarioWare games, Worse for Ware features a series of simple minigames with vague instructions the player must complete before running out of time. Every time a minigame is completed, a point is added to the player's score. Every time the player fails the minigame or runs out of time, they lose a life. If the player is out of lives, the game ends, and the player recicives their final score.";
         break;

      // Tutoring
      case "tutoring0":
         document.getElementById(projectType).innerHTML = "Chemistry - Vocabulary, Updated 2026 <br>";
         break;

      // Writing Samples
      case "csWriting1":
         document.getElementById(projectType).innerHTML = "Dynamic Testing, 2025 <br> A class assignment in which a colleague and I were to perform and report a series of black box state tests on a web-based drawing tool. These test included boundary testing and equivalence parittions";
         break;

      case "csWriting0":
         document.getElementById(projectType).innerHTML = "Software Reporting, 2025 <br> A class assignment in which was to discuss the negative consequences that follow inadequate software testing. ";
         break;

      // Art

      // Social Media & Marketing
      case "socialMed2":
         document.getElementById(projectType).innerHTML = "Sample Newsletter Template, 2024 <br> ";
         break;
      case "socialMed1":
         document.getElementById(projectType).innerHTML = "FITSSFF Comic Book Day Flyer, 2023 <br>";
         break;
      case "socialMed0":
         document.getElementById(projectType).innerHTML = "Florida Tech Automotive Engineering and Modification Club Logo, Fall 2021 <br> I was comissioned by a peer to design a logo for the Florida Tech Automotive Engineering and Modification Club. Heavy inspiration was taken from Florida Institute of Technology's recently-retired 'meatball' logo. I wanted to use a car as the focal point, so I recolored a picture of a Mercedes sedan white and used the original meatball logo as the frame. Although it is not advised to use white under normal circumstances, the original logo's frame and meatball are both white, and using another color, such as off-white, could have clashed with the original palatte. To further replicate the meatball, a ring, border around the car, star from the original logo, and a recolored picture of a cylindrical map was laid over the white car. All of the latter elements use the same golden-mustard color as the star and text. ";
         break;

      // Digital Art
      case "digiArt1":
         document.getElementById(projectType).innerHTML = "'labor.' - April 11, 2026 <br> Created and later posted to Instagram, 'labor.' was traced and shaded over a painted sketch that was completed earlier on the same day. The larger figure is meant to appear as if it were sketched using graphite, similar to the original drawing. The graphite look was replicated using the peppermint pencil brush. The smaller figure was created with pencil brush, the smudge tool and some light erasing. Both the smudge and eraser tools were set to the medium airbrush brush. A heavier eraser set to the diagonal texture brush was used to go over the smaller figure once more. All tools and brushes mentioned can be found in Procreate's classic default brush set.";
         break;
      case "digiArt0":
         document.getElementById(projectType).innerHTML = "'melting', October 13, 2022 <br>";
         break;

      // Presentations
      case "slide0":
         document.getElementById(projectType).innerHTML = "Nostalgiamaxxing, 2026 <br>";
         break;

      // Writing Samples
      case "writing0":
         document.getElementById(projectType).innerHTML = "'The Little Mermaid, Revised 2026' <br> This is a re-write of a free-form short story I wrote in middle school. The original story followed the death of a faceless, unnamed protagonist slowly falling to their doom at the bottom of the ocean. I decided to rewrite the story because it still had potential to be something I could be proud of reading; I just needed to tell the story as the protagonist rather than a third-person narrator. I also wanted to make the character's demise more interesting than drowning and falling, and in doing so, I took heavy inspiration from Hans-Christian Anderson's story.";
         break;

      default:
         break;
   }
}
