import Box from "../components/Box";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import { Title } from "../components/Type";
import { defaultLinks } from "../constants";

export default function Logs() {
  return (
    <Layout aside={<Nav links={defaultLinks} active="Logs" />}>
      <Box>
        <Title>Logs</Title>
      </Box>
    </Layout>
  );
}
