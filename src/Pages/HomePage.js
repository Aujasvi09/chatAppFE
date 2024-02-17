import { Container, Text, Box, Tabs, TabPanel, TabPanels, Tab, TabList} from "@chakra-ui/react"
import Signup from "../Components/Signup"
import Login from "../Components/Login"

const HomePage = () => {
    return (
<Container maxW="xl" centerContent>
  <Box
    display="flex"
    justifyContent="center"
    p={3}
    bg="white"
    w="100%"
    m="40px 0 15px 0"
    borderRadius="lg"
    borderWidth="1px"
  >
    <Text fontSize="4xl" fontFamily="Work sans">
      Talk-A-Tive
    </Text> 
  </Box>
  <Box bg="white" borderRadius="lg" w = "100%" borderWidth="1px">
  <Tabs variant = "soft-rounded">
  <TabList p ={3} d ="flex" justifyContent="space-evenly" mb= "1em" >
    <Tab w="40%">Login</Tab>
    <Tab w="40%" >Signup</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
      <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
  </Box>
</Container>

    )
}

export default HomePage