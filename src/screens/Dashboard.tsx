import Box from "../components/Box";
import { BetweenHorizontalGroup } from "../components/HorizontalGroup";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Type, { Title } from "../components/Type";
import VerticalGroup from "../components/VerticalGroup";
import { defaultLinks } from "../constants";

export default function Dashboard() {
  return (
    <Layout aside={<Nav links={defaultLinks} active="Dashboard" />}>
      <Box>
        <VerticalGroup gap={1}>
          <Title>Dashboard</Title>
          <VerticalGroup gap={0.5}>
            <Type>Latest Actions</Type>
            <BetweenHorizontalGroup align="center">
              <Type size={-1}>Box is Ready</Type>
              <Type size={-1}>
                <em>January 21st, 2021</em>
              </Type>
            </BetweenHorizontalGroup>
            <BetweenHorizontalGroup align="center">
              <Type size={-1}>Get User Preferences</Type>
              <Type size={-1}>
                <em>January 14th, 2021</em>
              </Type>
            </BetweenHorizontalGroup>
            <BetweenHorizontalGroup align="center">
              <Type size={-1}>Box is Ready</Type>
              <Type size={-1}>
                <em>December 21st, 2020</em>
              </Type>
            </BetweenHorizontalGroup>
          </VerticalGroup>
        </VerticalGroup>
      </Box>
    </Layout>
  );
}
