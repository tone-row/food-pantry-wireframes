import Box from "../components/Box";
import Button from "../components/Button";
import HorizontalGroup, {
  BetweenHorizontalGroup,
} from "../components/HorizontalGroup";
import Input from "../components/Input";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Table from "../components/Table";
import Type, { Title } from "../components/Type";
import VerticalGroup from "../components/VerticalGroup";
import { defaultLinks } from "../constants";

const FAKE_ACTIONS = ["Inventory Updated", "Boxes are Ready"];

export default function Actions() {
  return (
    <Layout aside={<Nav links={defaultLinks} active="Actions" />}>
      <Box>
        <VerticalGroup gap={1}>
          <Title>Actions</Title>
          <BetweenHorizontalGroup>
            <Input placeholder="Search" />
            <Button>New</Button>
          </BetweenHorizontalGroup>
          <Table
            rows={FAKE_ACTIONS.map((action) => (
              <BetweenHorizontalGroup align="center">
                <Type>{action}</Type>
                <HorizontalGroup gap={0.5}>
                  <Button>Edit</Button>
                  <Button>Run</Button>
                </HorizontalGroup>
              </BetweenHorizontalGroup>
            ))}
          />
        </VerticalGroup>
      </Box>
    </Layout>
  );
}
