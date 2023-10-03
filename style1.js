    function millisecond(hours, minutes, seconds) {
    const hoursInMilliseconds = hours * 3600000; // 1 hour = 3600000ms
    const minutesInMilliseconds = minutes * 60000; // 1 minute = 60000ms
    const secondsInMilliseconds = seconds * 1000; // 1 second = 1000ms

    return hoursInMilliseconds + minutesInMilliseconds + secondsInMilliseconds;
}

console.log(millisecond(0, 0, 0)); // 0ms
console.log(millisecond(0, 1, 1)); // 61000ms
console.log(millisecond(1, 0, 0)); // 3600000ms
console.log(millisecond(1, 0, 1)); // 3601000ms
console.log(millisecond(1, 1, 1)); // 3661000ms
