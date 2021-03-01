import React from "react";
import Box from "../components/Box";
import Button from "../components/Button";
import HorizontalGroup from "../components/HorizontalGroup";
import Input from "../components/Input";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Type, { Title } from "../components/Type";
import VerticalGroup from "../components/VerticalGroup";
import { defaultLinks } from "../constants";

export const FAKE_FOODS = ["Lettuce", "Apples", "Radishes", "Peaches"];

export default function ThisWeeksInventory() {
  return (
    <Layout aside={<Nav links={defaultLinks} active="Dashboard" />}>
      <Box>
        <VerticalGroup gap={1}>
          <Title>Dashboard</Title>
          <Type size={2}>
            Invitations to edit preferences will be sent in 2 days, 3 hours, and
            15 minutes. Make sure the <a href="#">Inventory</a> is up to date.
          </Type>
          <hr />
          <VerticalGroup gap={0.5}>
            {FAKE_FOODS.map((food) => (
              <HorizontalGroup key={food} align="center" gap={0.5}>
                <span className="reorder">☰</span>
                <Type>
                  {food}, 1000lbs, <em>Somebodies farm</em>
                </Type>
                <Button>Remove</Button>
              </HorizontalGroup>
            ))}
            <HorizontalGroup align="center" gap={0.5}>
              <Input placeholder="Add Inventory Item" />
              <Button>Add</Button>
            </HorizontalGroup>
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
