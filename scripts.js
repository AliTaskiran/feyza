const messages = ["İyi ki", "Doğdun", "Aşkım", "Seni çooook(baya)", "Seviyorum"];
const messageElement = document.getElementById('message');
const finalMessage = document.getElementById('final-message');

let messageIndex = 0;
let imageIndex = 1; // Başlangıçta 1. resmi göster
let finalImage; // Final görseli için değişken
let messageTimeout; // Mesaj için zamanlayıcı
let imageTimeout; // Resim için zamanlayıcı

function displayNextMessage() {
    const imageElements = document.querySelectorAll('.slider-img');

    // Mesajları göster
    if (messageIndex < messages.length) {
        messageElement.textContent = messages[messageIndex];

        // Resim geçişi
        if (messageIndex > 0 && messageIndex <= imageElements.length) {
            imageElements[messageIndex - 1].classList.remove('active');
            imageElements[messageIndex - 1].classList.add('hidden');
        }

        // İlk mesaj için görseli göster
        if (messageIndex < imageElements.length) {
            imageElements[messageIndex].classList.remove('hidden');
            imageElements[messageIndex].classList.add('active');
        }

        messageIndex++;
        // Mesaj gösterildikten sonra 2 saniye bekle ve bir sonraki mesajı göster
        messageTimeout = setTimeout(displayNextMessage, 2000);
    } else {
        // Tüm mesajlar gösterildi, şimdi paragrafı ve son resmi göster
        messageElement.classList.add('hidden');
        finalMessage.classList.remove('hidden');

        // Eğer finalImage yoksa, ilk resmi oluştur
        if (!finalImage) {
            finalImage = document.createElement('img');
            finalImage.src = 'images/1.jpg'; // İlk resmi ayarla
            finalImage.alt = 'Sevdiğin Kişiyle Fotoğraf';
            finalImage.className = 'mt-6 rounded-lg shadow-lg w-96';
            document.getElementById('animated-text').appendChild(finalImage); // Resmi ekle
        }

        // Son resim değişimi için zamanlayıcıyı başlat
        changeImage();
    }
}

// Resim değişimi fonksiyonu
function changeImage() {
    imageTimeout = setInterval(() => {
        finalImage.src = `images/${imageIndex}.jpg`; // Resmi değiştir
        imageIndex++; // Görsel dizinini bir arttır
        if (imageIndex > 3) { // Eğer 3'ten büyükse, 1'e geri döner
            imageIndex = 1;
        }
    }, 2000);
}

// İlk resmi göster
document.addEventListener('DOMContentLoaded', () => {
    const imageElements = document.querySelectorAll('.slider-img');
    imageElements[0].classList.remove('hidden');
    imageElements[0].classList.add('active');

    // İlk mesajı göster
    displayNextMessage();
});
