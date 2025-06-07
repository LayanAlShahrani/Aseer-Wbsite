// Codes From line 1 to line 80 for history cards 

// Data array to hold the content for each card
const cardData = [
    { image: "../photos/1.png", text: "Early and Middle Islamic Ages: “Administrative Independence”" },
    { image: "../photos/2.png", text: "End of the 12th to Early 13th Century: “Emergence of Aseer as a Defined Region”" },
    { image: "../photos/3.png", text: "19th Century (Early Years): “Influence of Reform and Tribal Rule”" },
    { image: "../photos/4.png", text: "1288 AH / 1871 AD: “Ottoman Campaign and Control”" },
    { image: "../photos/5.png", text: "1337 AH / 1919 AD: “Limited Ottoman Authority”" },
    { image: "../photos/5.png", text: "1338 AH / Early Modern Saudi Era: “Integration into the Saudi State”" },
    { image: "../photos/4.png", text: "Post-Ottoman Period: “Unification under King Abdul Aziz”" },
    { image: "../photos/3.png", text: "1358 AH (Royal Decree): “Formal Administrative Organization”" },
    { image: "../photos/2.png", text: "Modern Saudi Era - Post Founding King: “Continued Development under Royal Governance”" },
    { image: "../photos/1.png", text: "New Renaissance Era: “Strategic Transformation Towards Global Standards”" },
];

// Get the container for the cards
const container = document.getElementById('historyCardsContainer');

// Loop to create each card dynamically
cardData.forEach((data, index) => {
  // Create card elements
  const card = document.createElement('div');
  card.className = 'historyCrad';

  const cardHead = document.createElement('div');
  cardHead.className = 'historyCradHead';

  const img = document.createElement('img');
  img.src = data.image;
  img.alt = '';

  const cardBody = document.createElement('div');
  cardBody.className = 'historyCradBody';

  // Create number div and set the card's number
  const numberDiv = document.createElement('div');
  numberDiv.className = `cardNumber ${getImageClass(data.image)}`; // Add dynamic class based on image
  numberDiv.textContent = ` ${index + 1}`; // Card numbers start from 1

  // Create a container for p and button
  const contentContainer = document.createElement('div');
  contentContainer.className = 'contentContainer';

  const p = document.createElement('p');
  p.textContent = data.text;

  const button = document.createElement('button');


  // Append elements to build the card structure
  cardHead.appendChild(img);
  cardBody.appendChild(numberDiv); // Add the number div to cardBody

  // Append p to contentContainer
  contentContainer.appendChild(p);


  // Add contentContainer to cardBody
  cardBody.appendChild(contentContainer);
  
  card.appendChild(cardHead);
  card.appendChild(cardBody);

  // Append the card to the container
  container.appendChild(card);
});

// Function to generate a class name based on the image source
function getImageClass(imageSrc) {
    const imageMap = {
        "../photos/1.png": "color1",
        "../photos/2.png": "color2",
        "../photos/3.png": "color3",
        "../photos/4.png": "color4",
        "../photos/5.png": "color5"
    };
    return imageMap[imageSrc] || "defaultColor"; // Return a default class if no match is found
}
// End of History cards code 

const readMoreBtn = document.getElementById('readMoreBtn');
  const artParagraph = document.getElementById('artParagraph');

  readMoreBtn.addEventListener('click', function() {
    if (artParagraph.style.display === 'none' || artParagraph.style.display === '') {
      artParagraph.style.display = 'block';
      readMoreBtn.textContent = 'Show Less';
    } else {
      artParagraph.style.display = 'none';
      readMoreBtn.textContent = 'Read More about Al-Qatt Al-Asiri'; 
    }
  });
