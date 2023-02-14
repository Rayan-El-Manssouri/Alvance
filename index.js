function greet() {
    var greeting = document.getElementById("greeting").value;

    // Créer un nouveau message
    var messageContainer = document.createElement("div");
    var messageContent = document.createElement("p");
    messageContent.innerHTML = greeting;
    messageContainer.classList.add("visible");
    messageContainer.classList.add("message_user");
    messageContainer.appendChild(messageContent);

    // Ajouter le message au chat
    var chatHistory = document.getElementById("chat-history");
    chatHistory.appendChild(messageContainer);

    // Effacer le champ de saisie
    document.getElementById("greeting").value = "";

    if (greeting === "Salut !" || greeting === "Hey") {
        var responseContainer = document.createElement("div");
        var responseContent = document.createElement("p");
        responseContent.innerHTML = "Bonjour !";
        responseContainer.appendChild(responseContent);
        chatHistory.appendChild(responseContainer);
    } else if (
        greeting.startsWith("console.log(") &&
        greeting.endsWith(")")
    ) {
        var logContent = /"([^"]*)"/.exec(greeting)[1];
        var responseContainer = document.createElement("div");
        responseContainer.classList.add("reponse_ia");
        var responseContent = document.createElement("p");
        responseContent.innerHTML = `Vous avez utilisé \`console.log\`. Cette fonction permet d'afficher dans la console du navigateur, vous aurez ce résultat : ${logContent}`;
        responseContainer.appendChild(responseContent);
        chatHistory.appendChild(responseContainer);
    } else {
        var responseContainer = document.createElement("div");
        responseContainer.classList.add("reponse_ia");
        var responseContent = document.createElement("p");
        responseContent.innerHTML = "Bonjour ! Comment puis-je vous aider ?";
        responseContainer.appendChild(responseContent);
        chatHistory.appendChild(responseContainer);
    }
}
