import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoGoogle, IoLogoInstagram, IoLogoGithub , IoLogoWebComponent } from 'react-icons/io5'
import Image from 'next/image'
import Head from 'next/head'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m Harshaj an Web developer based in India!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Harshaj Parihar
          </Heading>
          <p>Web Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/takuya.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Harshaj is a final year undergrad student 2023 batch from Medi-Caps University,Indore
          and a web developer based in Indore with a passion for building digital services/stuff he wants.
          He has a knack When not online, he loves hanging out and travel else you will see him in badminton court.
          <p>
          Apart from development works,he is also working on Data Structures and Algorithms and have solved more than 250 Coding questions on &nbsp;
          <NextLink href="https://leetcode.com/harshajparihar" passHref scroll={false}>
            <Link>LeetCode</Link>
          </NextLink>
          &nbsp; and &nbsp;
          <NextLink href="https://auth.geeksforgeeks.org/user/harshajparihar/practice/" passHref scroll={false}>
            <Link>GeeksForGeeks</Link>
          </NextLink>.
          </p>
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2017</BioYear>
          Completed Class 10th
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Completed Class 12th
        </BioSection>
        <BioSection>
          <BioYear>Jun 2021 to Aug 2021</BioYear>
          Worked as a Web Developer Intern at Dream Choice Inc.
        </BioSection>
        <BioSection>
          <BioYear>Aug 2019 to Present</BioYear>
          Ongoing 4 year Bachelor&apos;s Program(B.Tech) in the Computer Science and Engineering
          at Medi-Caps University,Indore.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Music , Cricket , Travelling
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/harshaj28" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @harshaj28
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://drive.google.com/file/d/1FXNeWkOD2zxMvyS8k2rJjkvkRY0Th-cI/view" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoWebComponent />}
              >
                Resume
              </Button>
            </Link>
          </ListItem>
          <ListItem>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGoogle />}
              >
                harshajparihar@gmail.com
              </Button>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/harshaj_p" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @harshaj_p
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
