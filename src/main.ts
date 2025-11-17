/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";


console.log('Script started successfully');

// Waiting for the API to be ready
WA.onInit().then(() => {
    
    if(WA.player.tags.includes("team")) {
        WA.player.setOutlineColor(0, 119, 141);
    }
    
    
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));
    
}).catch(e => console.error(e));



export {};
