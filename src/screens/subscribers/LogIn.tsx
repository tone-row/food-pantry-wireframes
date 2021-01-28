import Button from "../../components/Button";
import Center from "../../components/Center";
import Input from "../../components/Input";
import Type, { Title } from "../../components/Type";
import VerticalGroup from "../../components/VerticalGroup";
import { brandImage, pantryName } from "../../constants";

export default function LogIn() {
  return (
    <Center>
      <Type size={15} style={{ justifySelf: "center" }}>
        {brandImage}
      </Type>
      <VerticalGroup gap={0.5}>
        <Title>{pantryName}</Title>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Button>Sign In</Button>
      </VerticalGroup>
    </Center>
  );
}
