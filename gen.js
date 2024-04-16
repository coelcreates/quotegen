/*const quotesArr = [
    "This one", 
    "This one too", 
    "This one three"
];*/

const defaultQuotes = {
    'Ayanna Howard': "Your best champion and cheerleader is yourself. Always be proud of your accomplishments, big or small. -Robocist",
    'Alexa Irene Canady': "The greatest challenge I faced in becoming a neurosurgeon, was believing it was possible. - Neurosurgeon",
    'Mae Jemison': "The future never just happened. It was created. -Astronaut",
    'Jeanette Eps': "Anything you don't know is going to be hard at first, but if you stay the course, put the time and effort in, it will become seamless eventually. -Astronaut",
    'Katherine Johnson': "Like what you do, and then you will do your best. - Mathematician",
    'Nicol Turner Lee': "How we relate to one another both online and offline is at the core of civic engagement. -Tech Governance Expert",
    'Rapelang Rabana': "Time pushes everything forward. No stunning success and no sorrowful failure lasts forever. -Computer Scientist",
    'Annie Easley': "I’m out here to get the job done, and I knew I had the ability to do it, and that’s where my focus was. -rocket scientist",
    'Dwana Franklin Davis': "When Black women and other women of color are left behind, innovation and progress are left on the table. -technologist",
    'Shirley Ann Jackson': "Treasure your curiosity and nurture your imagination. -physicist",
    'Odunayo Eweniyi': "The lack of women in tech [can’t be explained away] with innate biological differences. It’s really down to a combination of systemic bias, men funding men and a working culture that excludes women. When women are given an opportunity they excel. -DEI tech start-up founder",
    'Mae Jemison': "Never be limited by other people's imaginations. -Astronaut",
    'Juliana Rotich': "I am guided each day by these three questions: ‘What are you fixing?’ ‘What are you making?’ and ‘Who are you helping? -Tech Start-up Founder",
    'Jacky Wright': "You cannot innovate if you do not have diversity of thought, diversity of experience, and perspectives. Leaders need to cultivate an inclusive environment so we can innovate and solve the world’s problems. -Chief Digital Officer at Microsoft",

}

const quoteElement = document.getElementById("rando-quote");

async function displayRandoQuote() {
    try {
      const response = await fetch('quotes.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();  // Parse JSON response
      const quotesObj = data;
      const shuffledKeys = Object.keys(quotesObj);
  
      // Shuffle keys using the fetched quotes data - Fisher-Yates or Knuth Shuffle - Modifies OG array for 0(1) sapce - 0(n) time
      for (let i = shuffledKeys.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledKeys[i], shuffledKeys[j]] = [shuffledKeys[j], shuffledKeys[i]];
      }
  
      const randoIndex = Math.floor(Math.random() * shuffledKeys.length);
      const randoKey = shuffledKeys[randoIndex];
      const randoQuote = quotesObj[randoKey];
      const quoteElement = document.getElementById("rando-quote");
      quoteElement.textContent = `"${randoQuote}" - ${randoKey}`;
    } catch (error) {
      console.error("Error fetching quotes:", error);
      const shuffledDefaultKeys = Object.keys(defaultQuotes);
  
      // Shuffle keys using the default quotes object
      for (let i = shuffledDefaultKeys.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledDefaultKeys[i], shuffledDefaultKeys[j]] = [shuffledDefaultKeys[j], shuffledDefaultKeys[i]];
      }
  
      const randoIndex = Math.floor(Math.random() * shuffledDefaultKeys.length);
      const randoKey = shuffledDefaultKeys[randoIndex];
      const randoQuote = defaultQuotes[randoKey];
      const quoteElement = document.getElementById("rando-quote");
      quoteElement.textContent = `"${randoQuote}" (Default)`; // Indicate using default quote
    }
  }

  const quoteButton = document.getElementById("generate");
  quoteButton.addEventListener("click", displayRandoQuote);