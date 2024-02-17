import { FormControl, FormLabel, VStack, Input, Button, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"
import { useToast } from "@chakra-ui/toast";

const Login = () => {
    const [email,setEmail] = useState()
    const [password, setPassword] = useState();
    const [show,setShow] = useState(false)
    const handleClick = () => setShow((prev) => !prev)
    return(
<VStack spacing= "5px">
        <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          placeholder="Enter Your Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
  
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}

      >
        Login
      </Button>
      <Button
        colorScheme="red"
        width="100%"
        style={{ marginTop: 15 }}

      >
        Get Guest User Credentials
      </Button>
      
      


        </VStack>
    )
};

export default Login;