// random.js

// Function to generate a random integer between min and max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random floating-point number between min and max
function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = getRandomInt(0, i);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to generate a random color in hex format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[getRandomInt(0, 15)];
    }
    return color;
}

// Function to create a random string of a given length
function getRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(getRandomInt(0, characters.length - 1));
    }
    return result;
}

// Example usage
console.log("Random Integer (1-100):", getRandomInt(1, 100));
console.log("Random Float (1-10):", getRandomFloat(1, 10));
console.log("Shuffled Array:", shuffleArray([1, 2, 3, 4, 5]));
console.log("Random Color:", getRandomColor());
console.log("Random String (10 characters):", getRandomString(10));
