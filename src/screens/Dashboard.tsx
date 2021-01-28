import Box from "../components/Box";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import { Title } from "../components/Type";
import { defaultLinks } from "../constants";

export default function Dashboard() {
  return (
    <Layout aside={<Nav links={defaultLinks} active="Dashboard" />}>
      <Box>
        <Title>Dashboard</Title>
      </Box>
    </Layout>
  );
}
