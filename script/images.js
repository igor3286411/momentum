const slideLeft = document.querySelector('.slide-prev')
const slideRight = document.querySelector('.slide-next')

const getTimeOfDayName = (num) => {
    if (num < 6) {
        return 'night'
    } if (num < 12) {
        return 'morning'
    } if (num < 18) {
        return 'afternoon'
    } if (num < 24) {
        return 'evening'
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNum = getRandomIntInclusive(1, 20)

const renderImg = (num, day) => {
    document.body.style.backgroundImage = `url("./images/${day}/${num}.jpg")`;
}

const getSlideNext = (num) => {
    if (num === 20) {
        randomNum = 1
    } else {
        randomNum = num + 1
    }
    renderImg(randomNum, timeName);
}

const getSlidePrev = (num) => {
    if (num === 1) {
        randomNum = 20
    } else {
        randomNum = num - 1
    }
    renderImg(randomNum, timeName);
}

const timeName = getTimeOfDayName(hoursNum)
renderImg(randomNum, timeName)

slideLeft.addEventListener('click', () => {
    getSlidePrev(randomNum)
})

slideRight.addEventListener('click', () => {
    getSlideNext(randomNum)
})
