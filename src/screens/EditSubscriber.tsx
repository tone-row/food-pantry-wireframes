import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Box from "../components/Box";
import { Title } from "../components/Type";
import { defaultLinks } from "../constants";
import VerticalGroup from "../components/VerticalGroup";
import Input from "../components/Input";
import Button from "../components/Button";
import HorizontalGroup from "../components/HorizontalGroup";
import WithLabel from "../components/WithLabel";
import Checkbox from "../components/Checkbox";

export default function EditSubscriber() {
  return (
    <Layout aside={<Nav links={defaultLinks} active="Subscribers" />}>
      <Box>
        <VerticalGroup gap={1}>
          <Title>Edit Subscriber</Title>
          <VerticalGroup gap={0.5}>
            <Input placeholder="Contact Name" />
            <Input placeholder="Email Address" />
            <Input placeholder="Phone Number" />
            <Input placeholder="Street Address" />
            <Input placeholder="ZIP Code" />
            <WithLabel label="Preferred Method of Contact">
              <HorizontalGroup gap={0.5}>
                <Checkbox label="Email" />
                <Checkbox label="Phone" />
              </HorizontalGroup>
            </WithLabel>
            <HorizontalGroup gap={0.5}>
              <Button>Update</Button>
              <Button>Delete</Button>
            </HorizontalGroup>
          </VerticalGroup>
        </VerticalGroup>
      </Box>
    </Layout>
  );
}
