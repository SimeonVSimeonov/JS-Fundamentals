function isSpeeding([speed, area]) {
    function speeding(limit) {
        if (speed - limit <= 20) {
            console.log("speeding");
        } else if (speed - limit <= 40) {
            console.log("excessive speeding");
        } else {
            console.log("reckless driving");
        }
    }
    if (area == "motorway" && speed > 130) {
        speeding(130);
    } else if (area == "interstate" && speed > 90) {
        speeding(90);
    } else if (area == "city" && speed > 50) {
        speeding(50);
    } else if (area == "residential" && speed > 20) {
        speeding(20);
    }

}

isSpeeding([19, "residential"]);
isSpeeding([201, "motorway"]);