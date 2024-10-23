const messages = ["İyi ki", "Doğdun", "Aşkım", "Seni çooook(baya)", "Seviyorum"];
const messageElement = document.getElementById('message');
const finalMessage = document.getElementById('final-message');
const finalImage = document.getElementById('final-image');

let messageIndex = 0;

function displayNextMessage() {
  if (messageIndex < messages.length) {
    messageElement.textContent = messages[messageIndex];
    messageIndex++;
  } else {
    // Tüm mesajlar gösterildi, şimdi paragraf ve resmi göster
    messageElement.classList.add('hidden');
    finalMessage.classList.remove('hidden');
    finalImage.classList.remove('hidden');
  }
}

// Her 2 saniyede bir sonraki mesajı göster
setInterval(displayNextMessage, 2000);

