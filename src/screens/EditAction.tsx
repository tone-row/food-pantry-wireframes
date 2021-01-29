import Box, { BoxWithBorder } from "../components/Box";
import Input from "../components/Input";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Select from "../components/Select";
import { Title } from "../components/Type";
import VerticalGroup from "../components/VerticalGroup";
import WithLabel from "../components/WithLabel";
import { defaultLinks } from "../constants";

function SubAction({ group, message }: { group: string; message: string }) {
  return (
    <BoxWithBorder>
      <VerticalGroup gap={0.5}>
        <WithLabel label="Group">
          <Select>
            <option>{group}</option>
          </Select>
        </WithLabel>
        <WithLabel label="Message">
          <Select>
            <option>{message}</option>
          </Select>
        </WithLabel>
      </VerticalGroup>
    </BoxWithBorder>
  );
}

export default function EditAction() {
  return (
    <Layout aside={<Nav links={defaultLinks} active="Actions" />}>
      <Box>
        <VerticalGroup gap={1}>
          <Title>Edit Action</Title>
          <VerticalGroup gap={0.5}>
            <WithLabel label="Title">
              <Input value="Box is Ready" />
            </WithLabel>
            <WithLabel label="Sub Actions">
              <VerticalGroup gap={0.5}>
                <SubAction
                  group="Subscribers who perfer email"
                  message="Box is Ready Email"
                />
                <SubAction
                  group="Subscribers who perfer phone call"
                  message="Box is Ready Call"
                />
                <SubAction
                  group="Subscribers who perfer phone call"
                  message="Box is Ready Text"
                />
              </VerticalGroup>
            </WithLabel>
            <WithLabel label="When to run action">
              <Select>
                <option>Manual Run</option>
                <option>Schedule</option>
              </Select>
            </WithLabel>
          </VerticalGroup>
        </VerticalGroup>
      </Box>
    </Layout>
  );
}
