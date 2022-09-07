import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Image from "next/image";

import cryptoapp from "../../public/images/works/cryptoapp.png";

const Work = () => (
    <Layout title="crypto">
        <Container>
            <Title>
                Crypto <Badge>2021</Badge>
            </Title>
            <P>
                Aplicación simple hecha con React consumiendo API de conversión de criptomonedas.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link target={'_blank'} href="https://crypt-api-react-app-wavp25.netlify.app">
                        https://crypt-api-react-app-wavp25.netlify.app <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React, Crypto Compare (API)</span>
                </ListItem>
            </List>

            <Image src={cryptoapp} />
        </Container>
    </Layout>
)

export default Work