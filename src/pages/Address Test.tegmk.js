// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {

    $w("#button1").onClick(() => {
        let address = $w("#addressInput1").value

        let country = address.country
        console.log(country)

        let latitude = address.location.latitude
        let longitude = address.location.longitude
        let description = address.formatted

        $w("#googleMaps1").location = {
            "latitude": latitude,
            "longitude": longitude,
            "description": description
        }

        if (country === undefined) {
            console.log("Country is undefined")
            $w("#addressInput1").value = null;
            $w("#text11").expand()
        } else {
            $w("#text11").collapse()
            console.log("Selected from dropdown suggestions")
        }
    })

})



