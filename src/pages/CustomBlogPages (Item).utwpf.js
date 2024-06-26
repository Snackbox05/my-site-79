import wixData from 'wix-data';

$w.onReady(function () {

	let item = $w("#dynamicDataset").getCurrentItem()
	console.log(item)
});