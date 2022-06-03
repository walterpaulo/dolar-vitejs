import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

     @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;600&display=swap');
   
     *{
        margin: 0;
        padding: 0;
        background-color: var(--main-bg-color);
        color: var(--font-bg-color);
        font-family: 'Poppins', sans-serif;

    }
    :root{
        --main-bg-color: #141414;
        --font-bg-color: #ffff;
        --container-bg-primary: #1C1C1C;
        --color-white: #2D2D2D;
        --color-white-clear: #D2D2D2;
    }
`