import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "@/utils/trpc";
import { List, ThemeIcon, Card, TextInput, Button, Stack } from "@mantine/core";
import { CircleCheck, CircleDashed } from "tabler-icons-react";

const Home: NextPage = () => {
  const { data } = trpc.useQuery(["findTodos"]);

  console.log(data);

  return (
    <div>
      <Head>
        <title>To-do APP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Stack align="center" justify="center" style={{ height: "95vh" }}>
          <Card shadow="xl" p="lg" style={{ width: 400 }}>
            <List
              spacing="xs"
              size="sm"
              center
              icon={
                <ThemeIcon color="blue" size={26} radius="xl">
                  <CircleDashed size={16} />
                </ThemeIcon>
              }
            >
              <List.Item>Respond to emails</List.Item>
              <List.Item>Review Pull Requests</List.Item>
              <List.Item
                icon={
                  <ThemeIcon color="teal" size={26} radius="xl">
                    <CircleCheck size={16} />
                  </ThemeIcon>
                }
              >
                Read the Feature Specification Docs
              </List.Item>
            </List>
            <TextInput placeholder="Task" required size="md" my={15} />
            <Button
              size="md"
              fullWidth
              variant="gradient"
              gradient={{ from: "teal", to: "blue", deg: 60 }}
            >
              Add
            </Button>
          </Card>
        </Stack>
      </main>
    </div>
  );
};

export default Home;
