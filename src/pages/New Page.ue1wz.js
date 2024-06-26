// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {

    const currentPage = $w("Page")[0];

    const currentPageId = currentPage.id;

    console.log('currentPageElement with id #' + currentPageId + ' :', currentPage);

    const pageChildren = currentPage.children // < - this gives an error if, for example, any elements on the page is hidden for any specific breakpoint reasons

    console.log(pageChildren)

});