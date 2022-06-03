import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        background-color: var(--main-bg-color);
        color: var(--font-bg-color);
    }
    :root{
        --main-bg-color: #141414;
        --font-bg-color: #ffff;
    }
`