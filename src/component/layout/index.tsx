import { Layout, Menu } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

interface IMenu {
  key: string;
  icon: React.ReactNode;
  label: string;
  link: string;
}

interface IProps {
  children: React.ReactNode;
  activeMenuKey?: string;
}

const MENU = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "Home",
    link: "/",
  },
  {
    key: "2",
    icon: <UserOutlined />,
    label: "Vendor",
    link: "/vendor",
  },
  {
    key: "3",
    icon: <VideoCameraOutlined />,
    label: "Kategori",
    link: "/kategori",
  },
  {
    key: "4",
    icon: <UploadOutlined />,
    label: "Item",
    link: "/item",
  },
  {
    key: "5",
    icon: <UploadOutlined />,
    label: "Pembelian ",
    link: "/pembelian",
  },
  {
    key: "6",
    icon: <UserOutlined />,
    label: "User",
    link: "/user",
  },
] as IMenu[];

const LayoutComponent = (props: IProps) => {
  const { children, activeMenuKey } = props;
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  return (
    <Layout className="layout" hasSider={true}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={MENU}
          selectedKeys={[activeMenuKey!]}
          onClick={(item) =>
            router.push(MENU.find((x) => x.key === item.key)?.link as string)
          }
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
