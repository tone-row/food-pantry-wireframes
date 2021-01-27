import Box, { BoxWithBorder } from "../components/Box";
import Center from "../components/Center";
import VerticalGroup from "../components/VerticalGroup";
import Type from "../components/Type";
import Input from "../components/Input";
import Button from "../components/Button";

export default function LogIn() {
  return (
    <Box>
      <Center>
        <BoxWithBorder>
          <VerticalGroup gap={1}>
            <Type size={2}>Log In</Type>
            <Input placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button>Log In</Button>
          </VerticalGroup>
        </BoxWithBorder>
      </Center>
    </Box>
  );
}
