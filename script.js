document.addEventListener("DOMContentLoaded", () => {
  const quoteDisplay = document.getElementById("quote-display");
  const userInput = document.getElementById("user-input");
  const wpmDisplay = document.getElementById("wpm");

  const quotes = [
    "Believe in yourself.",
    "Success is not final, failure is not fatal.",
    "Stay hungry. Stay foolish.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Do something today that your future self will thank you for.",
    "Little things make big days.",
    "It’s going to be hard, but hard does not mean impossible.",
    "Don’t wait for opportunity. Create it.",
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
    "The key to success is to focus on goals, not obstacles.",
    "Dream bigger. Do bigger.",
    "Wake up with determination. Go to bed with satisfaction.",
    "It always seems impossible until it’s done.",
    "Work hard in silence. Let success make the noise.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Doubt kills more dreams than failure ever will.",
    "If you want something you’ve never had, you must be willing to do something you’ve never done.",
    "Hard work beats talent when talent doesn’t work hard.",
    "The future depends on what you do today.",
    "Don’t quit. Suffer now and live the rest of your life as a champion.",
    "Start where you are. Use what you have. Do what you can.",
    "You didn’t come this far to only come this far.",
    "One day or day one. You decide.",
    "The expert in anything was once a beginner.",
    "Don’t count the days. Make the days count.",
    "The only way to do great work is to love what you do.",
    "If you’re going through hell, keep going.",
    "Opportunities don’t happen. You create them.",
    "You are never too old to set another goal or dream a new dream.",
    "Stay positive. Work hard. Make it happen.",
    "The best way to predict the future is to create it.",
    "Success is what comes after you stop making excuses.",
    "Strive for progress, not perfection.",
    "A goal without a plan is just a wish.",
    "Discipline is doing what needs to be done, even if you don’t want to do it.",
    "Everything you can imagine is real.",
    "Success is not for the lazy.",
    "Action is the foundational key to all success.",
    "Make each day your masterpiece.",
    "You get what you work for, not what you wish for.",
    "Success doesn’t come from what you do occasionally. It comes from what you do consistently.",
    "Be stubborn about your goals, and flexible about your methods.",
    "If it doesn’t challenge you, it won’t change you.",
    "You are stronger than you think.",
    "Don’t be afraid to fail. Be afraid not to try.",
    "Train your mind to see the good in every situation."
    // Add more if needed!
  ];

  let currentQuote = "";
  let startTime;

  function getNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    currentQuote = quotes[randomIndex];
    quoteDisplay.innerText = currentQuote;
    userInput.value = "";
    startTime = new Date();
    wpmDisplay.innerText = "0";
  }

  userInput.addEventListener("input", () => {
    const enteredText = userInput.value;
    if (enteredText === currentQuote) {
      const endTime = new Date();
      const timeTaken = (endTime - startTime) / 1000;
      const words = currentQuote.split(" ").length;
      const wpm = Math.round((words / timeTaken) * 60);
      wpmDisplay.innerText = wpm;
      setTimeout(getNewQuote, 1000);
    }
  });

  getNewQuote();
});
