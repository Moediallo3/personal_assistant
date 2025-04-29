let chatBox = document.getElementById("chatBox");
let input = document.getElementById("userInput");
let typeNotifier = document.getElementById("typeNotifier");
let responseTimes = [3000, 2000, 4000];
function loadChatHistory() {
    let savedChat = localStorage.getItem("chatHistory");
    if (savedChat) {
        chatBox.innerHTML = savedChat;
    }
}
function saveChatHistory() {
    localStorage.setItem("chatHistory", chatBox.innerHTML);
}
function clearChat() {
    chatBox.innerHTML = "";
    localStorage.removeItem("chatHistory");
}
function random(items) {
    return items[Math.floor(Math.random() * items.length)];
}
function grabTime() {
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes().toString().padStart(2, "0");
    let type = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${type}`;
}
input.addEventListener("keyup", function(event) {
    if (input.value.trim() === "") return;
    let message = input.value.trim();
    let newMessageBox = document.createElement("div");
    newMessageBox.classList.add("container");
    newMessageBox.innerHTML = `<img src="user.png" alt="Avatar">
    <p>${message}</p>
    <span class="time-right">${grabTime()}</span>`;
    if (event.keyCode === 13) {
        event.preventDefault();
        input.value = "";
        chatBox.appendChild(newMessageBox);
        saveChatHistory();
        let response;
        message = message.toLowerCase();
        if (message.includes("hello") || message.includes("wassup") || message.includes("wsg") || message.includes("hi")) {
            response = "Are You talking to me??";
        } else if (message.includes("how are you")) {
            response = random([
                "I... I don't know",
                "You don't need to know",
                "I'm super sad :("
            ]);
        } else {
            response = random([
                "I'm sorry, I don't know?",
                "???",
                "Am i worthless"
            ]);
        }
        else if (message.includes("How do i become something in life") || message.includes("can u help me")) {
            response = rando m([
                "I... I don't know",
                "just be yourself",
                "Just Don't end up like me"
            ]);
        typeNotifier.style.display = "block";
        setTimeout(function() {
            let newAIresponse = document.createElement("div");
            newAIresponse.classList.add("container", "darker");
            newAIresponse.innerHTML = `<img src="assistant.jpg" alt="Avatar">
            <p>${response}</p>
            <span class="time-right">${grabTime()}</span>`;
            chatBox.appendChild(newAIresponse);
            typeNotifier.style.display = "none";
            saveChatHistory();
        }, random(responseTimes));
    }
});
document.addEventListener("DOMContentLoaded", function () {
    loadChatHistory();
    document.getElementById("clearChat").addEventListener("click", clearChat);
});