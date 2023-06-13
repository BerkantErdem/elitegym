let navState = false;

function toggleNav() {
    navState = !navState;

    if (navState) {
        document.getElementById("dropdown").style.display = "block";
    } else {
        document.getElementById("dropdown").style.display = "none";
    }
}