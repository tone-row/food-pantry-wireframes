import React from "react";
import Box from "../components/Box";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Type, { Title } from "../components/Type";
import VerticalGroup from "../components/VerticalGroup";
import { defaultLinks } from "../constants";

export default function Preferences() {
  return (
    <Layout aside={<Nav links={defaultLinks} active="Preferences" />}>
      <Box>
        <VerticalGroup gap={1}>
          <Title>Preferences</Title>
          <VerticalGroup gap={0.5}>
            <Type size={2}>
              Invitations to edit preferences will be sent in 2 days, 3 hours,
              and 15 minutes. Make sure the <a href="#">Inventory</a> is up to
              date.
            </Type>
            <hr />
            <Type>
              Invitations will be sent to the following pantries:
              <ul>
                <li>pantry a</li>
                <li>pantry b</li>
                <li>pantry c</li>
              </ul>
            </Type>
            <a href="#">Manage Pantries</a>
          </VerticalGroup>
        </VerticalGroup>
      </Box>
    </Layout>
  );
}
