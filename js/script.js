// A simple function to toggle the visibility of the original text
function toggleOriginalText(id) {
    var element = document.getElementById(id);
    var button = element.previousElementSibling;
    
    if (element.style.display === "none") {
        element.style.display = "block";
        button.textContent = "Hide Full Article Text";
    } else {
        element.style.display = "none";
        button.textContent = "Show Full Article Text"; 
    }
}

// --- Simple Chatbot Logic ---

// A dictionary of questions and simple answers (FAQ style)
const knowledgeBase = {
    // CHAPTER 1-3: FOUNDATION, IDENTITY, CITIZENSHIP
    "power": "All power belongs to the people of Kenya (Article 1). You lend it to your elected leaders, but you remain the ultimate authority!",
    "citizenship": "Citizenship (Chapter 3) defines who is legally Kenyan, usually by birth, and allows for dual citizenship (holding two passports)!",
    
    // CHAPTER 4-7: RIGHTS, LAND, INTEGRITY, ELECTIONS
    "bill of rights": "The Bill of Rights (Chapter 4) guarantees your fundamental rights, like freedom of speech, health, and education. They are your legal 'superpowers'!",
    "integrity": "Leadership and Integrity (Chapter 6) requires ALL public officials to be honest, transparent, and serve the public good, not their own pockets.",
    "elections": "Elections (Chapter 7) are the process where citizens use their vote to choose leaders in a free, fair, and transparent way. Your vote is your power!",

    // CHAPTER 8-10: ARMS OF GOVERNMENT
    "legislature": "The Legislature (Chapter 8 - Parliament) is the arm that **makes and debates** national laws.",
    "executive": "The Executive (Chapter 9) is the arm led by the President. Its job is to **run the country and implement** the laws.",
    "judiciary": "The Judiciary (Chapter 10 - Courts) is the arm that **interprets** the Constitution and laws, ensuring justice and settling disputes.",
    
    // CHAPTER 11-13: GOVERNANCE & FINANCE
    "what is devolution": "Devolution (Chapter 11) shares power between the national government and 47 county governments to bring services closer to you!",
    "public finance": "Public Finance (Chapter 12) sets the rules for collecting and spending government money, demanding transparency and accountability.",
    
    // CHAPTER 14-18: SECURITY, COMMISSIONS, AMENDMENT, TRANSITION
    "national security": "National Security (Chapter 14) covers the military and police, ensuring they protect citizens and respect human rights.",
    "commissions": "Commissions (Chapter 15) are independent bodies (like EACC, IEBC) that are free from government control and protect the Constitution.",
    "amendment": "Amendment (Chapter 16) sets out the very strict rules for **changing** the Constitution.",
    
    // NEW SCHEDULES KNOWLEDGE
    "schedules": "The Schedules are the technical appendices of the Constitution. They contain essential lists and procedural rules that help implement the main Articles.",
    "fourth schedule": "The Fourth Schedule is crucial! It lists exactly which duties belong to the National Government and which belong to the County Governments (Devolution).",
    
    // GENERAL & DEFAULT
    "who is the president": "The President is the head of the country and the main person in the Executive arm of government. They are elected by the people.",
    "hello": "Hello! I am the Constitution Bot. Ask me anything simple about the Kenyan Constitution, like 'What is the Fourth Schedule?'",
    "default": "I'm sorry, I don't have a simple answer for that. Try asking about the 'Judiciary', 'Elections', or 'Public Finance'!"
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
