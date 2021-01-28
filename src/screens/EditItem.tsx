import Box from "../components/Box";
import Button from "../components/Button";
import HorizontalGroup from "../components/HorizontalGroup";
import Input from "../components/Input";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import { Title } from "../components/Type";
import VerticalGroup from "../components/VerticalGroup";
import { defaultLinks } from "../constants";

export default function EditItem() {
  return (
    <Layout aside={<Nav links={defaultLinks} active="Items" />}>
      <Box>
        <VerticalGroup gap={1}>
          <Title>Edit Item</Title>
          <VerticalGroup gap={0.5}>
            <Input placeholder="Name" />
            <Input placeholder="Quantity" />
            <Input placeholder="Serving Size" />
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
