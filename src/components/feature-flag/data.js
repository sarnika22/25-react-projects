 const dummyApiResponse = {
    showLightAndDarkMode : true,
    showTicTacToe : true,
    showRandomColorGenerator : true,
    showAccordian: true,
    showTreeView: true
 };

function featureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {
        if(dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500)
        else reject('Some error occured')
    })
}

export default featureFlagsDataServiceCall;