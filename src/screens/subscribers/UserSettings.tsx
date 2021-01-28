import Box from "../../components/Box";
import Button from "../../components/Button";
import HorizontalGroup from "../../components/HorizontalGroup";
import Input from "../../components/Input";
import Layout from "../../components/Layout";
import Nav from "../../components/Nav";
import { Title } from "../../components/Type";
import VerticalGroup from "../../components/VerticalGroup";
import WithLabel from "../../components/WithLabel";
import { subscriberNav } from "../../constants";
import { FAKE_SUBSCRIBERS } from "../Subscribers";

export default function UserSettings() {
  return (
    <Layout aside={<Nav links={subscriberNav} active="User Settings" />}>
      <Box>
        <VerticalGroup gap={0.5}>
          <Title>User Settings</Title>
          <WithLabel label="Contact Name">
            <Input value={FAKE_SUBSCRIBERS[0]} />
          </WithLabel>
          <WithLabel label="Phone Number">
            <Input placeholder="xxx-xxx-xxxx" />
          </WithLabel>
          <WithLabel label="Primary Email">
            <Input />
          </WithLabel>
          <HorizontalGroup>
            <Button>Save</Button>
          </HorizontalGroup>
        </VerticalGroup>
      </Box>
    </Layout>
  );
}
