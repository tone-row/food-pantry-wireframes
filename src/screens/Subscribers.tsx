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

export const FAKE_SUBSCRIBERS = ["Nancy", "Craig", "Robert", "Andrew"];

export default function Subscribers() {
  return (
    <Layout aside={<Nav links={defaultLinks} active="Subscribers" />}>
      <Box>
        <VerticalGroup gap={1}>
          <Title>Subscribers</Title>
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
