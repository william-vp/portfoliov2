import {Global} from "@emotion/react";

const Fonts = () => {
    return <Global styles={`
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap');
        @keyframes spinning {
            from { transform: rotate(0deg) }
            to { transform: rotate(360deg) }
        }
        .spin {
            animation-name: spinning;
            animation-duration: 3s;
            animation-iteration-count: infinite;
            /* linear | ease | ease-in | ease-out | ease-in-out */
            animation-timing-function: linear;
        }
    `}/>
}

export default Fonts;