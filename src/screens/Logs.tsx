import Box from "../components/Box";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Type, { Title } from "../components/Type";
import VerticalGroup from "../components/VerticalGroup";
import { defaultLinks } from "../constants";
import { FAKE_SUBSCRIBERS } from "./Subscribers";

export default function Logs() {
  return (
    <Layout aside={<Nav links={defaultLinks} active="Logs" />}>
      <Box>
        <VerticalGroup gap={1}>
          <Title>Logs</Title>
          <VerticalGroup gap={0.5}>
            {FAKE_SUBSCRIBERS.map((sub) => (
              <Type key={sub} size={-1}>
                12/21/2020 11:1{Math.floor(Math.random() * 10)}am – {sub}{" "}
                recieved{" "}
                {
                  ["call", "email", "text message"][
                    Math.floor(Math.random() * 3)
                  ]
                }
              </Type>
            ))}
          </VerticalGroup>
        </VerticalGroup>
      </Box>
    </Layout>
  );
}
