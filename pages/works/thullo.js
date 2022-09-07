import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Image from "next/image";

import thullo from "../../public/images/works/thullo.png";

const Work = () => (
    <Layout title="thullo">
        <Container>
            <Title>
                Thullo - Trello clone <Badge>2022</Badge>
            </Title>
            <P>
                Clon de trello - organizador de tareas simple.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link target={'_blank'} href="https://trello-react-clone.netlify.app/login">
                        https://trello-react-clone.netlify.app <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>MongoDB, Electron, React, Node.js</span>
                </ListItem>
            </List>

            <Image src={thullo} />
        </Container>
    </Layout>
)

export default Work