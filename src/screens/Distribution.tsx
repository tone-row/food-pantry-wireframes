import Box from "../components/Box";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Table from "../components/Table";
import Type, { Title } from "../components/Type";
import VerticalGroup from "../components/VerticalGroup";
import { defaultLinks } from "../constants";
import { FAKE_SUBSCRIBERS } from "./Subscribers";
import { FAKE_INVENTORY } from "./Items";
import { BetweenHorizontalGroup } from "../components/HorizontalGroup";
import Button from "../components/Button";

export default function Distribution() {
  return (
    <Layout aside={<Nav links={defaultLinks} active="Distribution" />}>
      <Box>
        <VerticalGroup gap={1}>
          <Title>Distribution</Title>
          <Table
            rows={FAKE_SUBSCRIBERS.map((sub) => (
              <BetweenHorizontalGroup>
                <Type>{sub}</Type>
                {
                  <Type>
                    {FAKE_INVENTORY.filter(() => Math.random() > 0.5).join(
                      ", "
                    )}
                  </Type>
                }
              </BetweenHorizontalGroup>
            ))}
          />
          <BetweenHorizontalGroup>
            <Button>Print</Button>
            <Button>Boxes are Ready</Button>
          </BetweenHorizontalGroup>
        </VerticalGroup>
      </Box>
    </Layout>
  );
}
