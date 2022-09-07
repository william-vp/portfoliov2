import NextLink from "next/link";
import {Badge, Box, Heading, Image, Link} from "@chakra-ui/react";
import {ChevronRightIcon} from "@chakra-ui/icons";

export const Title = ({children}) => (
    <Box>
        <NextLink href={'/works'}>
            <Link>Works</Link>
        </NextLink>
        <span>
        &nbsp;
            <ChevronRightIcon/>
            &nbsp;
    </span>
        <Heading as="h3" display='inline-block' fontSize={20} mb={4}>
            {children}
        </Heading>
    </Box>
);

export const WorkImage= ({src, alt}) => (
    <Image borderRadius={'lg'} w={'full'} mb={4} src={src} alt={alt}/>
);

export const Meta = ({children}) => (
    <Badge colorScheme={'green'} mr={2}>
        {children}
    </Badge>
);