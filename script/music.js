const ulPlayList = document.querySelector('.play-list')
const play = document.querySelector('.play')
const playLeft = document.querySelector('.play-prev')
const playRight = document.querySelector('.play-next')
let isPlay = false;
let playNum = 1;
import playList from './playList.js';

const audio = new Audio();

function playAudio(name) {
    if (!isPlay) {
        audio.src = `../assets/sounds/${name.split(' ').join('')}.mp3`;
        audio.currentTime = 0;
        audio.play();
        isPlay = true
    } else {
        audio.pause();
        isPlay = false
    }
}

function playListAudio(name) {
    audio.src = `../assets/sounds/${name.split(' ').join('')}.mp3`;
    audio.currentTime = 0;
    audio.play();
}

const renderPlayListName = (musicName) => {
    ulPlayList.insertAdjacentHTML('beforeend', `
    <li class="play-item">${musicName.title}</li>
    `)
}

const playListActive = (num) => {
    liAidio.forEach(item => {
        item.classList.remove('item-active')
    })
    liAidio[num].classList.add('item-active')
}

const playNext = (num) => {
    if (num === playList.length) {
        playNum = 1
    } else {
        playNum = num + 1
    }
    playListAudio(playList[playNum - 1].title);
}

const playPrev = (num) => {
    if (num === 1) {
        playNum = playList.length
    } else {
        playNum = num - 1
    }
    playListAudio(playList[playNum - 1].title);
}

playList.forEach(item => {
    renderPlayListName(item)
})
const liAidio = document.querySelectorAll('.play-item')

play.addEventListener('click', () => {
    if (!isPlay){
        playAudio(playList[playNum - 1].title);
        play.classList.remove('pause')
        playListActive(playNum - 1)
    } else {
        playAudio(playList[playNum - 1].title)
        play.classList.add('pause');
    }
    play.classList.toggle('pause')
});

playRight.addEventListener('click', () => {
    play.classList.add('pause')
    isPlay = true
    playNext(playNum)
    playListActive(playNum - 1)
})

playLeft.addEventListener('click', () => {
    play.classList.add('pause')
    isPlay = true
    playPrev(playNum)
    playListActive(playNum - 1)
})