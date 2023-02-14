function greet() {
    var greeting = document.getElementById("greeting").value;

    // Vérifier si le champ de saisie est vide
    if (!greeting) {

        // Si le champ de saisie est vide, ne rien faire
        var message = document.getElementById("message");
        message.classList.add("visible");
        return;
    }
    // Si le champ de saisie est vide, ne rien faire
    var message = document.getElementById("message");
    message.classList.remove("visible");
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
    // Si la question est "Qui es-tu ?"
    if (greeting === "ok") {
        var responseContainer = document.createElement("div");
        responseContainer.classList.add("reponse_ia");
        var responseContent = document.createElement("p");
        responseContent.innerHTML =
            "ok, je suis l'IA de ce chatbot, créé pour répondre à vos questions et vous aider dans vos tâches.";
        responseContainer.appendChild(responseContent);
        chatHistory.appendChild(responseContainer);
    } else if (greeting === "Ecris moi un mail") {
        // Si la question est "Ecris moi un mail"
        var responseContainer = document.createElement("div");
        responseContainer.classList.add("reponse_ia");
        var responseContent = document.createElement("p");
        responseContent.innerHTML = "Je vous envoie un mail.";
        responseContainer.appendChild(responseContent);
        chatHistory.appendChild(responseContainer);
    } else if (greeting.toLowerCase() === "qui es-tu ?") {
        var responseContainer = document.createElement("div");
        responseContainer.classList.add("reponse_ia");
        var responseContent = document.createElement("p");
        responseContent.innerHTML =
            "Je suis l'IA de ce chatbot, créé pour répondre à vos questions et vous aider dans vos tâches.";
        responseContainer.appendChild(responseContent);
        chatHistory.appendChild(responseContainer);
    } else if (greeting === "Quel est ton nom ?") {
        var responseContainer = document.createElement("div");
        responseContainer.classList.add("reponse_ia");
        var responseContent = document.createElement("p");
        responseContent.innerHTML = "Mon nom est Alvance.";
        responseContainer.appendChild(responseContent);
        chatHistory.appendChild(responseContainer);
    } else if (greeting === "Salut !" || greeting === "Hey") {
        // Si la question est "Salut !" ou "Hey"
        var responseContainer = document.createElement("div");
        var responseContent = document.createElement("p");
        responseContainer.classList.add("reponse_ia");
        responseContent.innerHTML = "Bonjour !";
        responseContainer.appendChild(responseContent);
        chatHistory.appendChild(responseContainer);
    } else if (
        greeting.startsWith("console.log(") &&
        greeting.endsWith(")")
    ) {
        // Si la question utilise console.log()
        var logContent = /"([^"]*)"/.exec(greeting)[1];
        var responseContainer = document.createElement("div");
        responseContainer.classList.add("reponse_ia");
        var responseContent = document.createElement("p");
        responseContent.innerHTML = `Vous avez utilisé \`console.log\`. Cette fonction permet d'afficher dans la console du navigateur, vous aurez ce résultat : ${logContent}`;
        responseContainer.appendChild(responseContent);
        chatHistory.appendChild(responseContainer);
    } else {
        // Si la question n'est pas reconnue
        var responseContainer = document.createElement("div");
        responseContainer.classList.add("reponse_ia");
        var responseContent = document.createElement("p");
        responseContent.innerHTML = "Bonjour ! Comment puis-je vous aider ?";
        responseContainer.appendChild(responseContent);
        chatHistory.appendChild(responseContainer);
    }

    // Effacer le champ de saisie
    document.getElementById("greeting").value = "";
}
