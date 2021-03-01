import React from "react";
import Box from "../components/Box";
import { BetweenHorizontalGroup } from "../components/HorizontalGroup";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Table from "../components/Table";
import Type, { Title } from "../components/Type";
import VerticalGroup from "../components/VerticalGroup";
import { defaultLinks } from "../constants";

export const FAKE_PANTRIES = ["Pantry A", "Pantry B", "Pantry C", "Pantry D"];

export default function PreferencesPreference() {
  return (
    <Layout aside={<Nav links={defaultLinks} active="Dashboard" />}>
      <Box>
        <VerticalGroup gap={1}>
          <Title>Dashboard</Title>
          <VerticalGroup gap={0.5}>
            <Type size={2}>
              Invitations have been sent! Ability to edit preferences will end
              in 1 day, 3 hours, 10 minutes
            </Type>
            <hr />
            <Type size={2}>Preferences Confirmed</Type>
            <Table
              rows={FAKE_PANTRIES.map((pantry) => (
                <BetweenHorizontalGroup>
                  <Type>{pantry}</Type>
                  <Type>{Math.random() > 0.5 ? `✅` : `❌`}</Type>
                </BetweenHorizontalGroup>
              ))}
            />
          </VerticalGroup>
        </VerticalGroup>
      </Box>
    </Layout>
  );
}
