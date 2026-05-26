function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    // Add a leading zero if the number is less than 10
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('clockDisplay').innerHTML = h + ":" + m + ":" + s;

    // Update the time every 1000 milliseconds (1 second)
    setTimeout(startTime, 1000);
}

// Helper function to add a leading zero
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
