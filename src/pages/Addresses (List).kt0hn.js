// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {

	$w("#dropdown1").onChange(() =>{
		setTimeout(() =>{
			$w("#repeater1").expand()
		}, 500)
	
	})

});