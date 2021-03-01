import React from "react";
import Box from "../components/Box";
import Button from "../components/Button";
import { BetweenHorizontalGroup } from "../components/HorizontalGroup";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Table from "../components/Table";
import Type, { Title } from "../components/Type";
import VerticalGroup from "../components/VerticalGroup";
import { defaultLinks } from "../constants";
import { FAKE_PANTRIES } from "./PreferencesPreference";
import { FAKE_FOODS } from "./ThisWeeksInventory";

export default function Packing() {
  return (
    <Layout aside={<Nav links={defaultLinks} active="Dashboard" />}>
      <Box>
        <VerticalGroup gap={1}>
          <Title>Dashboard</Title>
          <Type size={2}>Ready to pack!</Type>
          <Button>Print</Button>
          <Type>3/4 pantries updated their preferences this week</Type>
          <hr />
          <Type size={2}>Packing Instructions</Type>
          {FAKE_PANTRIES.map((pantry) => (
            <VerticalGroup gap={0.5}>
              <Type>{pantry}</Type>
              <Table
                rows={FAKE_FOODS.map((food) => (
                  <BetweenHorizontalGroup>
                    <Type>{food}</Type>
                    <Type>{Math.floor(Math.random() * 2000)}lbs</Type>
                  </BetweenHorizontalGroup>
                ))}
              />
            </VerticalGroup>
          ))}

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
