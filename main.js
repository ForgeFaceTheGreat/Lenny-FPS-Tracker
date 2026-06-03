let fps = 144

setInterval(() => {
    document.getElementById("fps").innerText = `FPS: ${fps}`;

    fps++;
}, 100);

overwolf.windows.getCurrentWindow(function(result) {
    console.log(result);
});

// document.getElementById("game-name").innerText = "Test Game";
window.onload = function() {
    overwolf.games.getRunningGameInfo(function(result) {
        console.log('Game Info: ', result);
    });

    overwolf.games.onGameInfoUpdated.addListener(function(info) {
        console.log("Updated: ", info);
    });
}