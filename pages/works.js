import {Container, Heading, SimpleGrid} from "@chakra-ui/react";
import Section from "../components/section";
import {WorkGridItem} from "../components/grid-item";
import Layout from "../components/layouts/article";

import thullo from "../public/images/works/thullo.png";
import cryptoapp from "../public/images/works/cryptoapp.png";
import mern from "../public/images/works/mern.png";
import lms from "../public/images/works/lms.png";

const Works = () => {
  return (
    <Layout>
        <Container>
            <Heading as={'h3'} fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id={'thullo'} title={'Thullo - Trello clone'} thumbnail={thullo}/>
                </Section>
                <Section>
                    <WorkGridItem id={'crypto'} title={'Crypto converter API'} thumbnail={cryptoapp}/>
                </Section>
                <Section>
                    <WorkGridItem id={'tasks'} title={'MERN Tasks'} thumbnail={mern}/>
                </Section>
                <Section>
                    <WorkGridItem id={'lms'} title={'Learning Management System Laravel'} thumbnail={lms}/>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
  );
};

export default Works;