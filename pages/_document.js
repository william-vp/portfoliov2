import {ColorModeScript} from "@chakra-ui/react";
import NextDocument, { NextScript, Head, Html, Main} from 'next/document'
import theme from "../lib/theme";

const logo= "images/wwlogo.png";

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head title={"Portafolio"}>
                    <link rel="icon" href={logo} />

                    <meta charSet="UTF-8"/>
                    <meta name="description" content="William Viteri Pinchao - Personal Portfolio Website"/>
                    <meta name="keywords"
                          content="portfolio, cv, personal, development, full stack, developer, react, js"/>
                    <meta name="author" content="William Viteri"/>

                    <meta charSet="utf-8"/>
                    <title>William Viteri | Portafolio</title>
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}