import {ColorModeScript} from "@chakra-ui/react";
import NextDocument, { NextScript, NextHead, DocumentContext, Head, Html, Main} from 'next/document'
import theme from "../lib/theme";

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head title={"Portafolio"}>
                    <link rel="icon" href="images/wwlogo.png"/>

                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="description" content="William Viteri Pinchao - Personal Portfolio Website"/>
                    <meta name="keywords"
                          content="portfolio, cv, personal, development, full stack, developer, react, js"/>
                    <meta name="author" content="William Viteri"/>

                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
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