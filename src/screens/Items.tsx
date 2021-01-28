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

export const FAKE_INVENTORY = ["Cabbage", "Apples", "Pineapple", "Barley"];

export default function Items() {
  return (
    <Layout aside={<Nav links={defaultLinks} active="Items" />}>
      <Box>
        <VerticalGroup gap={1}>
          <Title>Items</Title>
          <BetweenHorizontalGroup>
            <Input placeholder="Search" />
            <Button>New</Button>
          </BetweenHorizontalGroup>
          <Table
            rows={FAKE_INVENTORY.map((el) => (
              <BetweenHorizontalGroup key={el} align="center">
                <Type>{el}</Type>
                <Button>Edit</Button>
              </BetweenHorizontalGroup>
            ))}
          />
          <Button>Inventory Update</Button>
        </VerticalGroup>
      </Box>
    </Layout>
  );
}
