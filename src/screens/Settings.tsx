import Box from "../components/Box";
import BrandBlock from "../components/BrandBlock";
import Input from "../components/Input";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Select from "../components/Select";
import { Title } from "../components/Type";
import VerticalGroup from "../components/VerticalGroup";
import WithLabel from "../components/WithLabel";
import { defaultLinks, pantryName } from "../constants";

export default function Settings() {
  return (
    <Layout aside={<Nav links={defaultLinks} active="Settings" />}>
      <Box>
        <VerticalGroup gap={1}>
          <Title>Settings</Title>
          <VerticalGroup gap={0.5}>
            <WithLabel label="Name">
              <Input readOnly value={pantryName} />
            </WithLabel>
            <WithLabel label="Pantry Logo">
              <BrandBlock />
            </WithLabel>
            <WithLabel label="Default Boxes are Ready Message">
              <Select>
                <option>Box is Ready</option>
              </Select>
            </WithLabel>
          </VerticalGroup>
        </VerticalGroup>
      </Box>
    </Layout>
  );
}
