const container = document.querySelector('.content');
const totalImages = 4;

for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement('img');
    const unique = Math.floor(Math.random() * 1000);
    img.src = `https://picsum.photos/300/300?random=${unique}`;
    img.alt = "Random Image";

    const card = document.createElement('div');
    card.classList.add('card');
    card.appendChild(img);
    container.appendChild(card);

    // Click to open modal
    card.addEventListener('click', () => {
        openModal(img.src);
    });
}

// Modal functionality
const modal = document.getElementById('modal');
const modalImg = document.querySelector('.modal-img');
const closeBtn = document.querySelector('.close');

function openModal(src) {
    modal.style.display = "block";
    modalImg.src = src;
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target === modal) {
        modal.style.display = "none";
    }
}
