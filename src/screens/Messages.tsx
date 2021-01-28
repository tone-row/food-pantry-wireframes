import Box from "../components/Box";
import Button from "../components/Button";
import { BetweenHorizontalGroup } from "../components/HorizontalGroup";
import Input from "../components/Input";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Table from "../components/Table";
import Type, { Title } from "../components/Type";
import VerticalGroup from "../components/VerticalGroup";
import { defaultLinks } from "../constants";

const FAKE_MESSAGES = [
  "Box is Ready Email",
  "Box is Ready Phone Call",
  "Box is Ready Text Message",
  "Inventory Update Email",
  "Inventory Text Message",
];

export default function Messages() {
  return (
    <Layout aside={<Nav links={defaultLinks} active="Messages" />}>
      <Box>
        <VerticalGroup gap={1}>
          <Title>Messages</Title>
          <BetweenHorizontalGroup>
            <Input placeholder="Search" />
            <Button>New</Button>
          </BetweenHorizontalGroup>
          <Table
            rows={FAKE_MESSAGES.map((message) => (
              <BetweenHorizontalGroup key={message} align="center">
                <Type>{message}</Type>
                <Button>Edit</Button>
              </BetweenHorizontalGroup>
            ))}
          />
        </VerticalGroup>
      </Box>
    </Layout>
  );
}
