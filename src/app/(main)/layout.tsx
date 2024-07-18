"use client";

import { Flex, Layout, theme, Typography } from "antd";
import Link from "next/link";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    token: { colorBgContainer, borderRadiusLG, colorWhite },
  } = theme.useToken();

  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Title level={3}>タイトル</Title>
      </Header>
      <Layout>
        <Sider width={200}>
          <Flex vertical gap="large">
            <Link href="/create">金額入力</Link>
            <Link href="/list">過去の入力を見る</Link>
          </Flex>
        </Sider>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}
