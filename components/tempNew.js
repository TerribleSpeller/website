import { useState } from 'react';
import Change from "./js/random-subtitle.js";




export default function New() {
    const NewText = Change();
    const [buttonText, setButtonText] = useState(NewText); 

    const changeText = (text) => setButtonText(text);
    return (
        <btn onClick={() => changeText(Change())} suppressHydrationWarning >{buttonText}</btn>
    )
    //Yes I'm suppressing the HydrationWarning. It's literally just a cool feature not anything important.
}
