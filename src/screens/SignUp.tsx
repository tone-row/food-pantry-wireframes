import Box from "../components/Box";
import Input from "../components/Input";
import { Title } from "../components/Type";
import VerticalGroup from "../components/VerticalGroup";
import Button from "../components/Button";
import HorizontalGroup from "../components/HorizontalGroup";
import Center from "../components/Center";
import Type from "../components/Type";
import { brandImage, pantryName } from "../constants";

export default function NewSubscriber() {
  return (
    <Box>
      <Center>
        <Type size={15} style={{ justifySelf: "center" }}>
          {brandImage}
        </Type>
        <VerticalGroup gap={1}>
          <Title>{pantryName}</Title>
          <VerticalGroup gap={0.5}>
            <Input placeholder="Contact Name" />
            <Input placeholder="Email Address" />
            <Input placeholder="Phone Number" />
            <Input placeholder="Street Address" />
            <Input placeholder="ZIP Code" />
            <HorizontalGroup gap={0.5}>
              <Button>Create</Button>
            </HorizontalGroup>
          </VerticalGroup>
        </VerticalGroup>
      </Center>
    </Box>
  );
}
