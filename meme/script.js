const memeImg = document.getElementById('meme');
const loadButton = document.getElementById('loadMeme');

async function getRandomMeme() {
    try {
        const response = await fetch('https://api.imgflip.com/get_memes');
        const data = await response.json();
        
        const randomIndex = Math.floor(Math.random() * data.data.memes.length);
        const randomMeme = data.data.memes[randomIndex];
        
        memeImg.src = randomMeme.url;
    } catch (error) {
        alert('Ошибка при загрузке мема. Попробуйте позже.');
    }
}

loadButton.addEventListener('click', getRandomMeme);

window.onload = getRandomMeme;
