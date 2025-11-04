let isLightOn = true;  // Track the state of the light

function toggleLight() {
    isLightOn = !isLightOn;  // Toggle the state
    var pic = isLightOn ? "./media/blank.png" : "./media/boom.png";
    document.getElementById('fuji1707').src = pic;
}
