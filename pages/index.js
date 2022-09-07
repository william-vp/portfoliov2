import {Box, Button, Container, Heading, Image, Link, useColorModeValue} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import NextLink from "next/link";
import {ChevronRightIcon} from "@chakra-ui/icons";
import {BioSection, BioYear} from "../components/bio";
import Layout from "../components/layouts/article";

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mb={6} p={3}
                     align="center">
                    Hello, I'm a full-stack developer.
                </Box>
                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            William Alfonso Viteri Pinchao
                        </Heading>
                        <p>Fullstack Developer - Web Developer</p>
                    </Box>
                    <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2} borderStyle={'solid'}
                            maxWidth={'100px'} display={'inline-block'}
                            borderRadius={'full'} src={'/images/wvp.jpg'}
                        />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as={'h3'} variant={'section-title'}>
                        Sobre mí
                    </Heading>
                    <Paragraph>
                        <b>Desarrollador web</b> creativo, con capacidad para desarrollar páginas y/o aplicaciones web
                        elegantes y diseños de aplicaciones para clientes exigentes. Altamente sociable para
                        desempeñarme en mi cargo en grupos de trabajo. Organizado y con capacidad multitarea, con alta
                        experiencia en sistemas de información a la medida. Dispuesto a aportar mis habilidades y
                        abierto a aprender con nuevas experiencias.
                    </Paragraph>
                    <Box align={'center'} my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon/>} colorScheme={'red'}>
                                Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as={'h3'} variant='section-title'>
                        Experiencia
                    </Heading>
                    <BioSection>
                        <BioYear>10/2016 - 04/2017</BioYear>
                        Servicio Nacional de Aprendizaje SENA<br/>
                        Analista y Desarrollador de Sistemas de Información - Práctica (PHP, JS, JQUERY, MYSQL)
                    </BioSection>
                    <BioSection>
                        <BioYear>05/2017 - 08/2019</BioYear>
                        Independiente <br/>
                        Analista y Desarrollador de Sistemas de Información - Práctica (PHP, JS, REACT, MYSQL)
                    </BioSection>
                    <BioSection>
                        <BioYear>09/2019 - 02/2021</BioYear>
                        Cuántica Digital<br/>
                        Desarrollador web - (PHP, JS, REACT, MYSQL)
                    </BioSection>
                    <BioSection>
                        <BioYear>02/2021 - Actualmente</BioYear>
                        Suplos<br/>
                        Ingeniero de soporte y desarrollo - (PHP, JS, VUE, MYSQL)
                    </BioSection>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page;