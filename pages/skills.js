import {CircularProgress, Container, Grid, GridItem, Heading} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Image from "next/image";


const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as={'h3'} fontSize={20} mb={4}>
                    Skills
                </Heading>
                <Grid templateColumns='repeat(4, 1fr)' gap={10}>
                    <GridItem w='100%' h='10'>
                        <img className='spin' width={100} height={50}
                             src="https://imgs.search.brave.com/R4g99MdgZ2nNSMEG--f3a5am_Nns0Ib8yrIv_5EU_v4/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9pMS53/cC5jb20vd3d3Lmdv/b2R3b3JrbGFicy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTcvMDcvanMtbG9n/by1iYWRnZS5wbmc"/>
                        Javascript
                    </GridItem>
                    <GridItem w='100%' h='10' alignContent={'center'}>
                        <Image className='spin' width={50} height={50}
                               src={'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'}></Image>
                        React.js, React native, Next.js
                    </GridItem>
                    <GridItem>
                        <img className='spin' width={80} height={50}
                             src={'https://nodejs.org/static/images/logo.svg'}/>
                        Node.js (Express)
                    </GridItem>
                    <GridItem w='100%' h='10'>
                        <img className='spin' width={100} height={50}
                             src="https://webimages.mongodb.com/_com_assets/cms/kuyj3d95v5vbmm2f4-horizontal_white.svg?auto=format%252Ccompress"/>
                    </GridItem>
                    <GridItem w='100%' h='10'>
                        <img className='spin' width={100} height={50}
                             src="https://imgs.search.brave.com/SeIblFXDWOessAiBJQ0XAlB8G4T5citJnDllfSXZe1M/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvbXlzcWwvbXlz/cWxfUE5HMjIucG5n"/>
                    </GridItem>
                    <GridItem w='100%' h='10'>
                        <img className='spin' width={100} height={50}
                             src="https://imgs.search.brave.com/O_Fodv4cqGVBmngL8HGIkvhi57LINPZ5qI0RRgzBsH8/rs:fit:500:300:1/g:ce/aHR0cHM6Ly9hZGFw/dGFiaXouY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA0/L3BocC5wbmc"/>
                    </GridItem>
                    <GridItem w='100%' h='10'>
                        <img className='spin' width={100} height={50}
                             src="https://imgs.search.brave.com/BNClQTh-qkFmBnWavIXrnopCG0EcYTIpvyiw7_4eSkQ/rs:fit:1200:1200:1/g:ce/aHR0cDovL3BuZ2lt/Zy5jb20vdXBsb2Fk/cy9naXRodWIvZ2l0/aHViX1BORzgwLnBu/Zw"/>
                        GitHub
                    </GridItem>
                </Grid>
            </Container>
        </Layout>
    );
};

export default Works;