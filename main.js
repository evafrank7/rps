// Get user choice
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
      return userInput;
    } else {
      console.log("Error! Invalid Input.");
      return null;
    }
  };
  
  // Get computer choice
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
      default:
        return null;
    }
  };
  
  // Determine winner
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "Tie!";
    }
  
    if (userChoice === "rock") {
      return computerChoice === "paper" ? "Computer wins!" : "User wins!!";
    }
  
    if (userChoice === "paper") {
      return computerChoice === "scissors" ? "Computer wins!" : "User wins!!";
    }
  
    if (userChoice === "scissors") {
      return computerChoice === "rock" ? "Computer wins!" : "User wins!!";
    }
  };
  
  // Play game function
  function playGame(userInput) {
    let userChoice = getUserChoice(userInput);
    if (!userChoice) {
      return;
    }

    let computerChoice = getComputerChoice();
    console.log(`User choice: ${userChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    let result = determineWinner(userChoice, computerChoice);
    console.log(result);
    alert(result);

    // Deselect the choice after playing
    document.querySelectorAll('.choice-img').forEach(i => i.classList.remove('selected'));
    selectedChoice = null;
  }
  
  let selectedChoice = null;
  
  // Handle image selection
  document.querySelectorAll('.choice-img').forEach(img => {
    img.addEventListener('click', function () {
      // Remove 'selected' class from all images
      document.querySelectorAll('.choice-img').forEach(i => i.classList.remove('selected'));
  
      // Add 'selected' class to clicked image
      this.classList.add('selected');
  
      // Store the selected choice
      selectedChoice = this.getAttribute('data-choice');
    });
  });
  
  // Play game when button is clicked
  document.getElementById('playButton').addEventListener('click', function () {
    if (!selectedChoice) {
      alert('Please select Rock, Paper, or Scissors first!');
      return;
    }
    playGame(selectedChoice);
  });
