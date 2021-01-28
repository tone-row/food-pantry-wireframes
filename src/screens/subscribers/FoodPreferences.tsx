import Box, { BoxWithBorder } from "../../components/Box";
import Layout from "../../components/Layout";
import Nav from "../../components/Nav";
import RadioGroup from "../../components/RadioGroup";
import { Title } from "../../components/Type";
import VerticalGroup from "../../components/VerticalGroup";
import { subscriberNav } from "../../constants";
import { FAKE_INVENTORY } from "../Items";

const BREAK_AT = 2;

function Item({ name }: { name: string }) {
  return (
    <VerticalGroup gap={0.5}>
      <Title size={1}>{name}</Title>
      <RadioGroup
        name={name}
        choices={[
          "Love",
          "Like",
          "No Preference",
          "Dislike",
          "Allergic / Cannot Eat",
        ]}
      />
    </VerticalGroup>
  );
}

export default function FoodPreferences() {
  return (
    <Layout aside={<Nav links={subscriberNav} active="Food Preferences" />}>
      <Box>
        <VerticalGroup gap={1}>
          <Title>Food Preferences</Title>
          <BoxWithBorder>
            <VerticalGroup gap={1}>
              <Title size={2}>Changed Since Your Last View</Title>
              {FAKE_INVENTORY.slice(0, BREAK_AT).map((item) => (
                <Item name={item} key={item} />
              ))}
            </VerticalGroup>
          </BoxWithBorder>
          {FAKE_INVENTORY.slice(BREAK_AT).map((item) => (
            <Item name={item} key={item} />
          ))}
        </VerticalGroup>
      </Box>
    </Layout>
  );
}
