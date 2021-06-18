import {
  Layout,
  Menu,
  Row,
  Col,
  Typography,
  Avatar,
  Space,
  Divider,
  Button,
  Modal,
} from "antd";
const { SubMenu } = Menu;
const { Title,Text } = Typography;
import Router from "next/router";
import { withRouter } from "next/router";
import { ApiFilled } from "@ant-design/icons";
import * as React from "react";
import getConfig from "next/config";
const { Content, Sider, Header } = Layout;
function WebLayout({ router, fullscreen, t, ...props }) {
  const path = router.pathname;
  const [visible,setVisible] = React.useState()
  const _on_click_menu = (e) => {
    Router.push(e.key);
  };
  React.useEffect(() => {
    if (router.asPath !== "/") {
      Router.push(router.asPath);
    }
  }, []);
  const onClickSignIn = () => {
    setVisible(true)
  };
  const onClickCancel = () => {
    setVisible(false);
  }
  return (
    <Layout style={{ height: "100vh" }}>
      <ModalLogin visible={visible} onClickCancel={onClickCancel} {...props} />
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Text strong>AdTrack</Text>
        <Button
          onClick={onClickSignIn}
          style={{ borderRadius: 16, position: "absolute", right: 24, top: 16 }}
          type="primary"
        >
          ลงชื่อเข้าใช้
        </Button>
      </Header>
      <Layout
        style={{
          backgroundColor: "rgba(var(--b3f,250,250,250),1)",
        }}
      >
        <Content>
          <Row
            gutter={8}
            style={{
              backgroundColor: "rgba(var(--b3f,250,250,250),1)",
            }}
          >
            <Col xs={{ span: 0 }} sm={{ span: 0 }} />
            <Col xs={{ span: 24 }} sm={{ span: 24 }}>
              {props.children}
            </Col>
            <Col xs={{ span: 0 }} sm={{ span: 0 }} />
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}
function ModalLogin(props){
  const { visible, onClickOk, onClickCancel } = props;
  return (
    <Modal
      title="Basic Modal"
      visible={visible}
      onOk={onClickOk}
      onCancel={onClickCancel}
    >
      <Button>Login with Facebook</Button>
    </Modal>
  );
}
export default withRouter(WebLayout);
