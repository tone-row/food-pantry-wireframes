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

export const FAKE_SUBSCRIBERS = ["Nancy", "Craig", "Jim", "Wanda"];

export default function Users() {
  return (
    <Layout aside={<Nav links={defaultLinks} active="Users" />}>
      <Box>
        <VerticalGroup gap={1}>
          <Title>Users</Title>
          <BetweenHorizontalGroup>
            <Input placeholder="Search" />
            <Button>New</Button>
          </BetweenHorizontalGroup>
          <Table
            rows={FAKE_SUBSCRIBERS.map((sub) => (
              <BetweenHorizontalGroup key={sub} align="center">
                <Type>{sub}</Type>
                <Button>Edit</Button>
              </BetweenHorizontalGroup>
            ))}
          />
        </VerticalGroup>
      </Box>
    </Layout>
  );
}
