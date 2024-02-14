window.onload = function () {
  emailjs.init('tCihxb3UfFaf9D8Dq');
  var img = document.querySelector("img");
  var yesButton = document.getElementById("yes");
  var noButton = document.getElementById("no");
  var h1 = document.getElementById("h1");
  var nextButton = document.getElementById("next");
  var inputMessage = document.getElementById("inputMessage");

  var scale = 1;
  var output = []; 
  var messages = [
    "No?",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "This will go on forever 😂",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "I'll be very very very sad",
    "No",
    "You'll be mine hehe",
  ];
  var currentIndex = 0;
  var talkIndex = 0;
  inputIndexes = [4]
  var talks = [
    "Hi 😘",
    "How are you doing today?",
    "It's that time of the year...",
    "When people confess their feelings and solidify their relationships",
    "What do you love about me the most?",
    "Lovely❤️",
    "The thing I love about you the most?",
    "Obviously other than your smile (I'm serious)",
    "I love being witty and funny with you the most",
    "The times when you called me names...",
    "Handsome, Darling, Beautiful",
    "I love it.",
    "With that, I wanna ask you something..."
  ]
  nextButton.addEventListener("click", function () {
    if (talkIndex < talks.length) {
      if (this.textContent === "Submit") {
        output.push("TYPE " + inputMessage.value);
        emailjs.send("service_iauys6k","template_8tev4xj",{
          message: inputMessage.value,
          });
        this.textContent = "Next";
        inputMessage.style.visibility = "hidden";
      }

      h1.textContent = talks[talkIndex];
      output.push("READ " + h1.textContent);
      //console.log(output);
      if (inputIndexes.includes(talkIndex)) {
        console.log("4");
        this.textContent = "Submit";
        inputMessage.style.visibility = "visible";
      }
      talkIndex += 1;
    } else {
      h1.textContent = "You don't have any nicknames, how about I call you 'mine'?";
      img.style.visibility = "visible";
      yesButton.style.visibility = "visible";
      noButton.style.visibility = "visible";
      nextButton.style.visibility = "hidden";
    }
  })
  yesButton.addEventListener("click", function () {
    output.push("YES " + this.textContent);
    yesButton.style.width = "";
    yesButton.style.height = "";
    yesButton.style.fontSize = ""; // Adjust font size for full screen
    noButton.style.display = "unset";
    img.style.display = "unset";
    h1.style.display = "unset";
    noButton.style.display = "";
    noButton.textContent = "No";
    currentIndex = 0;
    if (this.textContent === "Yes") {
      this.textContent = "Yes ";
      h1.textContent = "You love everything about me. Might as well tell me that you love me?";
      img.src = "Yes.png";
    } else if (this.textContent === "Yes ") {
      this.textContent = "Love you Shravan ❤️";
    } else {
      emailjs.send("service_iauys6k","template_8tev4xj",{
        message: output.join(','),
        });
      document.body.innerHTML =
        "<div style='text-align: center; color: black;'><img src='Yes3.gif' alt='Love Image' style='max-width: 100%; height: auto;'><h1>Love you, Ataaâ ❤️</h1></div>";
    }
  });

  noButton.addEventListener("click", function () {
    // Update "No" button text
    this.textContent = messages[currentIndex];
    output.push("NO " + this.textContent);
    currentIndex = (currentIndex + 1) % messages.length;

    // Resize "Yes" button
    var newWidth =
      parseInt(yesButton.style.width || yesButton.offsetWidth) + 40; // Increase by 40px
    var newHeight =
      parseInt(yesButton.style.height || yesButton.offsetHeight) + 25; // Increase by 25px
    yesButton.style.width = newWidth + "px";
    yesButton.style.height = newHeight + "px";

    // Resize button text
    var fontSize = parseInt(window.getComputedStyle(yesButton).fontSize) + 2; // Increase by 2px
    yesButton.style.fontSize = fontSize + "px";

    // Check if "Yes" button occupies 75% of the screen
    if (
      newWidth >= window.innerWidth * 0.75 ||
      newHeight >= window.innerHeight * 0.75
    ) {
      yesButton.style.width = "100vw";
      yesButton.style.height = "100vh";
      yesButton.style.fontSize = "5em"; // Adjust font size for full screen
      yesButton.textContent = yesButton.textContent;
      noButton.style.display = "none";
      img.style.display = "none";
      h1.style.display = "none";

      // Change content on "Yes" button click when full screen
      // yesButton.onclick = function () {
      //   document.body.innerHTML =
      //     "<div style='text-align: center; color: black;'><h1>I love you, Ataaâ</h1><img src='Yes2.png' alt='Love Image' style='max-width: 100%; height: auto;'></div>";
      // };
    }
  });
};
