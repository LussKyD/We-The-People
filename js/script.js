// A simple function to toggle the visibility of the original text
function toggleOriginalText(id) {
    var element = document.getElementById(id);
    var button = element.previousElementSibling;
    
    if (element.style.display === "none") {
        element.style.display = "block";
        button.textContent = "Hide Full Article Text";
    } else {
        element.style.display = "none";
        button.textContent = "Show Full Article Text"; // Corrected to generic text
    }
}

// --- Simple Chatbot Logic ---

// A dictionary of questions and simple answers (FAQ style)
const knowledgeBase = {
    // EXPANDED KNOWLEDGE BASE
    "bill of rights": "The Bill of Rights (Chapter 4) is the most important part! It guarantees your basic rights and freedoms, like freedom of speech, movement, and the right to health. These are your guaranteed 'superpowers'!",
    "who is the president": "The President is the head of the country and the main person in the Executive arm of government. They are elected by the people.",
    "what is devolution": "Devolution (Chapter 11) is when power and resources are shared between the national government and county governments. This brings services closer to you!",
    "national values": "The National Values (Article 10) are the rules that ALL leaders and citizens must follow, including things like patriotism, human dignity, and the rule of law. They define Kenya's character.",
    "equality": "The right to equality means everyone is equal before the law, regardless of their background, gender, or religion. It is a key part of your Bill of Rights.",
    "rights": "You have many rights! They are listed in the Bill of Rights (Chapter 4), including the right to life, education, and access to information.",
    "power": "All power belongs to the people of Kenya (Article 1). You lend it to your elected leaders, but you remain the ultimate authority!",
    "hello": "Hello! I am the Constitution Bot. Ask me anything simple about the Kenyan Constitution, like 'What is the Bill of Rights?'",
    "default": "I'm sorry, I don't have a simple answer for that yet. Try asking about the 'Bill of Rights' or 'national values'!"
};

function sendMessage() {
    const inputElement = document.getElementById('chat-input');
    const chatDisplay = document.getElementById('chat-display');
    const userMessage = inputElement.value.toLowerCase().trim();

    if (userMessage === "") return; // Don't send empty messages

    // 1. Display User Message
    chatDisplay.innerHTML += `<p style="text-align: right; background-color: #ccf; padding: 5px; border-radius: 5px;">**You:** ${userMessage}</p>`;

    // 2. Get Bot Response
    let botResponse = knowledgeBase["default"];
    for (const key in knowledgeBase) {
        if (userMessage.includes(key)) {
            botResponse = knowledgeBase[key];
            break;
        }
    }
    
    // 3. Display Bot Response after a small delay
    setTimeout(() => {
        chatDisplay.innerHTML += `<p style="background-color: #eee; padding: 5px; border-radius: 5px;">**Bot:** ${botResponse}</p>`;
        chatDisplay.scrollTop = chatDisplay.scrollHeight; // Scroll to bottom
    }, 500);

    // 4. Clear input
    inputElement.value = "";
}
