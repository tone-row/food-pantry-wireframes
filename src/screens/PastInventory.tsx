import React from "react";
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
import { FAKE_INVENTORY } from "./Items";
import { FAKE_SUBSCRIBERS } from "./Subscribers";

const FAKE_WEEKS = [
  "Week of March 1st, 2021",
  "Week of February 22nd, 2021",
  "Week of February 15th, 2021",
  "Week of February 8th, 2021",
  "Week of February 1st, 2021",
];

export default function PastInventory() {
  return (
    <Layout aside={<Nav links={defaultLinks} active="Past Inventory" />}>
      <Box>
        <VerticalGroup gap={1}>
          <Title>Past Inventory</Title>
          <VerticalGroup gap={0.5}>
            <Table
              rows={FAKE_WEEKS.map((week) => (
                <BetweenHorizontalGroup>
                  <Type>{week}</Type>
                  {<Button>View</Button>}
                </BetweenHorizontalGroup>
              ))}
            />
          </VerticalGroup>
          {/* <VerticalGroup gap={0.5}>
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
          </VerticalGroup> */}
        </VerticalGroup>
      </Box>
    </Layout>
  );
}
