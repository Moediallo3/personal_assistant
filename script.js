let chatBox = document.getElementById("chatBox");
let input = document.getElementById("userInput");
let typeNotifier = document.getElementById("typeNotifier");
function random(items){
    return itens[Math.floor(Math.random() * items.length)];
}
input.addEventListener("keyup", function(event){
    if(input.value.trim() === "") return;
    let message = input.value.trim()
    let newMessageBox = document.createElement("div");
    newMessageBox.classList.add("container");
    newMessageBox.innerHTML = `<img src="" alt="Avatar">
    <p>${message}</p>
    <span class="time-right">${grabTime()}</span>`
    if(event.keyCode === 13){
        event.preventDefault();
        saveChatHistory();
        let response;
        message = message.toLowerCase();
        if(message.include("hello") || message.include("wassup") || message.include("wsg")){
            response = "HI!"
        }else if(message.includes("how are you")){
            response = random(["I'm pretty good...", "you tell me >:( ", "idk, im a robot"])
        }else{
            response = random(["wait, what?", "Que", "bro what you chattin about"])
        }
    }
})