function roadRadar([speed, area]) {
    speed = Number(speed);

    function getLimit(area) {
        switch (area) {
            case 'motorway' :
                return 130;
            case 'interstate' :
                return 90;
            case 'city' :
                return 50;
            case 'residential' :
                return 20;
        }
    }

    let areaSpeedLimit = getLimit(area);

    function getInfraction(speed, areaSpeed) {

        let overSpeed = speed - areaSpeed;

        if (overSpeed <= 0) {
            return false;
        } else if (overSpeed > 0 && overSpeed <= 20) {
            return 'speeding'
        } else if (overSpeed > 20 && overSpeed <= 40) {
            return 'excessive speeding'
        } else {
            return 'reckless driving'
        }
    }

    let infraction = getInfraction(speed, areaSpeedLimit);

    if (infraction) {
        console.log(infraction);
    }

}

roadRadar([201, "motorway"]);
roadRadar([19, "residential"]);
roadRadar([120, "interstate"]);
