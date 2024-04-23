//import { Component } from "react"


 export default function FeatureFlag() {
    showLightAndDarkMode : false,
    showTicTacToe : true,
    showRandomColorGenerator : true,
    showAccordian: false,
    showTreeView: true

    const componentToRender = {
        key: 'showLightAndDarkMode',
        component : <LightDarkMode/>
    }
     return <div>
        <h1>Feature Flag</h1>
     </div>
 }