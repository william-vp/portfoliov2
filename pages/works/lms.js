import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Image from "next/image";

import lms from "../../public/images/works/lms.png";

const Work = () => (
    <Layout title="lms">
        <Container>
            <Title>
                Learning Management System <Badge>2019</Badge>
            </Title>
            <P>
                Aplicación web para la administración y visualización de cursos virtuales.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link target={'_blank'} href="https://learning.autobotweb.com">
                        https://learning.autobotweb.com <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>PHP (Laravel), MySql, React</span>
                </ListItem>
            </List>

            <Image src={lms} />
        </Container>
    </Layout>
)

export default Work