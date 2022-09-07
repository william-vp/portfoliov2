import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Image from "next/image";

import mern from "../../public/images/works/mern.png";

const Work = () => (
    <Layout title="tasks">
        <Container>
            <Title>
                MERN Tasks <Badge>2021</Badge>
            </Title>
            <P>
                TODO App para administrar tareas.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link target={'_blank'} href="https://mern-tasks-wavp25.netlify.app">
                        https://mern-tasks-wavp25.netlify.app <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>MongoDB, Electron, React, Node.js</span>
                </ListItem>
            </List>

            <Image src={mern} />
        </Container>
    </Layout>
)

export default Work