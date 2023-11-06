import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Collapse, Layout, Menu, Typography, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: "/dashboard",
    icon: <PieChartOutlined />,
    label: "Dashboard",
  },
  {
    key: "/test-scenario",
    icon: <TeamOutlined />,
    label: "Test Skenario",
  },
];

const LayoutComponent = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          {collapsed === true ? (
            <Typography.Title style={{ color: "#fff" }} level={3}>
              TB
            </Typography.Title>
          ) : (
            <Typography.Title style={{ color: "#fff" }} level={3}>
              TestBorg
            </Typography.Title>
          )}
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["/dashboard"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            margin: "1rem",
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
