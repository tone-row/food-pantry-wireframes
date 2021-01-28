import Box from "../components/Box";
import Button from "../components/Button";
import HorizontalGroup from "../components/HorizontalGroup";
import Input from "../components/Input";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Select from "../components/Select";
import TextArea from "../components/TextArea";
import { Title } from "../components/Type";
import VerticalGroup from "../components/VerticalGroup";
import WithLabel from "../components/WithLabel";
import { defaultLinks } from "../constants";

export default function EditMessage() {
  return (
    <Layout aside={<Nav links={defaultLinks} active="Messages" />}>
      <Box>
        <VerticalGroup gap={1}>
          <Title>Edit Message</Title>
          <VerticalGroup gap={0.5}>
            <WithLabel label="Message Type">
              <Select>
                <option>Email</option>
                <option>Phone Call</option>
              </Select>
            </WithLabel>
            <WithLabel label="Title">
              <Input placeholder="Box is Ready" />
            </WithLabel>
            <WithLabel label="Message">
              <TextArea
                value={`Hello {% SUBSCRIBER_NAME %}, your box is ready!`}
                readOnly
              />
            </WithLabel>
            <WithLabel label="Preview">
              <TextArea disabled value="Hello Nancy, your box is ready!" />
            </WithLabel>
            <HorizontalGroup gap={0.5}>
              <Button>Save</Button>
              <Button>Delete</Button>
            </HorizontalGroup>
          </VerticalGroup>
        </VerticalGroup>
      </Box>
    </Layout>
  );
}
