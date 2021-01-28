import Box, { BoxWithBorder } from "../components/Box";
import Center from "../components/Center";
import VerticalGroup from "../components/VerticalGroup";
import Type from "../components/Type";
import Input from "../components/Input";
import Button from "../components/Button";

export default function LogIn() {
  return (
    <Center>
      <Box>
        <BoxWithBorder>
          <VerticalGroup gap={0.5}>
            <Type size={2}>Log In</Type>
            <Input placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button>Log In</Button>
          </VerticalGroup>
        </BoxWithBorder>
      </Box>
    </Center>
  );
}
