import wixData from "wix-data"
import { getFileInfo } from "backend/dataTests.web.js"
import wixSiteFrontend from 'wix-site-frontend';

$w.onReady(function () {

    const response = wixSiteFrontend.prefetchPageResources({
  lightboxes: ["First Box", "Second Box"],
  pages: ["/first-page", "/second-page"],
});

console.log(response.errors)
console.log(response.message)

    $w("#text9").customClassList.add("test")

    wixData.query("Documents")
        .find()
        .then((results) => {
            let fileUrl = results.items[0].document
            getFileInfo(fileUrl)
                .then((fileInfo) => {
                    let fileName = fileInfo.originalFileName
                    $w("#text9").text = fileName
                })
        })

});