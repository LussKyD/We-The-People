// Function removed as the HTML structure no longer uses the original text toggles.

// --- Simple Chatbot Logic ---

// A dictionary of questions and simple answers (FAQ style) based on all provided data
const knowledgeBase = {
    // NEW HISTORY KNOWLEDGE
    "history": "The 2010 Constitution was created after decades of centralized power and violence following the 2007 elections, forcing leaders to seek lasting reform.",
    "2007 violence": "The widespread violence after the 2007 disputed elections was the main catalyst that forced leaders to agree on fundamental constitutional reforms.",
    "referendum issues": "The main controversial points were land reform, the abortion clause, Kadhi courts, and concerns over the President's remaining power.",
    "land issue": "The land chapter was highly contentious because large landholders feared the reforms would challenge their historic ownership and tenure.",
    "abortion": "The abortion clause was opposed by Christian groups who worried the allowance for abortion in cases of 'maternal health' was too broad.",
    "kadhi courts": "The inclusion of Kadhi Courts (for Muslim civil matters) was controversial, with some groups arguing it violated the secular nature of the Kenyan state.",
    
    // CORE CONCEPTS & ARMS OF GOVERNMENT
    "supreme law": "The Constitution is the supreme law of the land, meaning all other laws and government actions must adhere to it.",
    "bill of rights": "The Bill of Rights (Chapter 4) is a cornerstone, guaranteeing civil, political, economic, and social rights to all Kenyans.",
    "arms of government": "The three arms of government are the Executive (President), the Legislature (Parliament), and the Judiciary (Courts).",
    "executive": "The Executive is led by the President and implements laws and runs the national government.",
    "parliament": "The Legislature (Parliament) is the bicameral body (National Assembly and Senate) that makes laws and oversees the Executive.",
    "judiciary": "The Judiciary is the independent court system that interprets the law and ensures constitutional compliance.",
    
    // DEVOLUTION & ACCOUNTABILITY
    "devolution": "Devolution is key: it created 47 counties with elected leaders to manage local affairs and share power, correcting past centralization.",
    "integrity": "Leadership and Integrity sets high ethical standards for all public officers, demanding honesty, transparency, and accountability (Chapter 6).",
    "elections": "Elections are regulated by the IEBC (Chapter 7) to ensure they are free and fair based on universal suffrage.",
    
    // TECHNICAL
    "schedules": "The Schedules are the technical appendices of the Constitution containing lists, Oaths, and procedural rules to implement the main Articles (e.g., the Fourth Schedule lists county duties).",

    // GENERAL & DEFAULT
    "hello": "Hello! I am the Constitution Bot. Ask me about a topic, like 'What was the main issue with Land Reform?' or 'What is the Bill of Rights?'",
    "default": "I'm sorry, I don't have a simple answer for that. Try asking about the 'history', 'judiciary', 'devolution', or 'abortion'!"
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
