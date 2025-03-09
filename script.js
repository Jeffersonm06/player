const backBtn = document.getElementById('backButton');
const pauseBtn = document.getElementById('pauseButton');
const playBtn = document.getElementById('playButton');
const forBtn = document.getElementById('forButton');
const img = document.getElementById('img');
const progress = document.getElementById('progresso');
const progressContainer = document.getElementById('barra-progresso')
const audio = document.getElementById('audio')
const title = document.getElementById('name')

const songList = [
    'Die with a smile',
    'Francis Forever',
    'Serenata existencialista'
]

let currentIndex = 0;

function loadSong() {
    audio.src = `music/${songList[currentIndex]}.mp3`;
    title.textContent = songList[currentIndex];
}

function playSong() {
    audio.play();
    img.style.animation = 'rotate 2s linear infinite';
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
}

function pauseSong() {
    audio.pause();
    img.style.animation = ''
    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
}

function proxSong() {
    if (currentIndex >= songList.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    loadSong();
    playSong();
}

function prevSong() {
    if (currentIndex <= 0) {
        currentIndex = songList.length - 1;
    } else {
        currentIndex--;
    }
    loadSong();
    playSong();
}

backBtn.addEventListener('click', prevSong);
forBtn.addEventListener('click', proxSong);
playBtn.addEventListener('click', playSong);
pauseBtn.addEventListener('click', pauseSong);
audio.addEventListener('ended', proxSong)

audio.addEventListener('timeupdate', () => {
    let progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = progressPercent + '%';
})

loadSong()