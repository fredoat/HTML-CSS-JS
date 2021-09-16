const delayedColor = async (color, delay) => {
    return new Promise((resolved, rejected) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolved()
        }, delay)
    })
}

delayedColor('red', 1000)
    .then(() => delayedColor('blue', 1000))
    .then(() => delayedColor('green', 1000))
    .then(() => delayedColor('orange', 1000))
    .then(() => delayedColor('pink', 1000))
    .then(() => delayedColor('yellow', 1000))
    .then(() => delayedColor('olive', 1000))
    .then(() => delayedColor('purple', 1000))