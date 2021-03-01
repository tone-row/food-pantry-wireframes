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
import { FAKE_PANTRIES } from "./PreferencesPreference";

export const FAKE_SUBSCRIBERS = ["Nancy", "Craig", "Jim", "Wanda"];

export default function Pantries() {
  return (
    <Layout aside={<Nav links={defaultLinks} active="Pantries" />}>
      <Box>
        <VerticalGroup gap={1}>
          <Title>Pantries</Title>
          <BetweenHorizontalGroup>
            <Input placeholder="Search" />
            <Button>New</Button>
          </BetweenHorizontalGroup>
          <Table
            rows={FAKE_PANTRIES.map((pantry) => (
              <BetweenHorizontalGroup key={pantry} align="center">
                <Type>{pantry}</Type>
                <Button>Edit</Button>
              </BetweenHorizontalGroup>
            ))}
          />
        </VerticalGroup>
      </Box>
    </Layout>
  );
}
