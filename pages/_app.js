import {ChakraProvider} from "@chakra-ui/react";
import Layout from "../components/Layouts/main";
import Fonts from "../components/fonts";
import {AnimatePresence} from "framer-motion";

const Website = ({Component, pageProps, router}) => {
    return (
        <ChakraProvider>
            <Fonts/>
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route}/>
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    );
};

export default Website;