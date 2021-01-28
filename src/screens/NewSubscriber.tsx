import Box from "../components/Box";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Input from "../components/Input";
import { Title } from "../components/Type";
import VerticalGroup from "../components/VerticalGroup";
import Button from "../components/Button";
import HorizontalGroup from "../components/HorizontalGroup";
import { defaultLinks } from "../constants";

export default function NewSubscriber() {
  return (
    <Layout aside={<Nav links={defaultLinks} active="Subscribers" />}>
      <Box>
        <VerticalGroup gap={1}>
          <Title>New Subscriber</Title>
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
      </Box>
    </Layout>
  );
}
