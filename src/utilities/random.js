export function getRandomNumber(min, max) {
    (min > max) && ([max, min] = [min, max]); 
    return Math.floor(Math.random() * (max+1 - min) + min);
}


export function getRandomElement(array) {
    return array[getRandomNumber(0, array.length - 1)];
}

export function getRandomDate(minYear, maxYear) {
    const year = getRandomNumber(minYear, maxYear);
    const month = getRandomNumber(0, 11);
    const day = getRandomNumber(1, 31);
    const date = new Date(year, month, day);
    return date;
    
}

