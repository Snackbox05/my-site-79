import wixData from 'wix-data';

$w.onReady(function () {

    wixData.query("Test")
        .distinct("arraystring")
        .then((results) => {
            console.log(results.items)

            $w("#checkboxGroup1").options = [
                { "label": results.items[2], "value": results.items[2] },
                { "label": results.items[3], "value": results.items[3] },
                { "label": results.items[0], "value": results.items[0] },
                { "label": results.items[1], "value": results.items[1] }
            ]

        })

});