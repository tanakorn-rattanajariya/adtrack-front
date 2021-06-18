import React from "react";
import { Row, Col, Typography, Input, Button } from "antd";
const { Title, Text } = Typography;
import COLOR from "constants/color";
export default function ElementHomeHeader(props) {
  return (
    <Row style={{ height: "100vh" }}>
      <Col sm={{ span: 12 }} xs={{ span: 24 }}>
        <StartComponent {...props} />
      </Col>
      <Col sm={{ span: 12 }} xs={{ span: 24 }}>
        <AdsComponent {...props} />
      </Col>
    </Row>
  );
}

function StartComponent(props) {
  return (
    <div
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flex: 1,
        height: "100%",
      }}
    >
      <div
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          maxWidth: 350,
        }}
      >
        <Title level={1}>เริ่มต้น</Title>
        <Text
          style={{
            color: COLOR.GREY,
            fontWeight: 300,
            marginBottom: 40,
            marginTop: -18,
          }}
        >
          สร้างลิงก์ เพื่อเพิ่มช่องทางเข้าถึงผลิตภัณฑ์
        </Text>
        <Input
          style={{ marginBottom: 30 }}
          size="large"
          placeholder={"ลิงค์ผลิตภัณฑ์ของคุณ"}
        />
        <Button style={{ width: "100%" }} type="primary" size="large">
          ถัดไป
        </Button>
      </div>
    </div>
  );
}

function AdsComponent(props){
    return (
      <div
        style={{
          flex: 1,
          height: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          background:
            "linear-gradient(180deg, rgba(143,166,225,1) 16%, rgba(218,237,249,1) 100%)",
        }}
      >
        <div>
          <Text style={{ color: COLOR.WHITE }}>คุณเคย</Text>
          <Text style={{ color: COLOR.WHITE }} strong>
            โปรโมทสินค้าออนไลน์
          </Text>
          <Text style={{ color: COLOR.WHITE }}>ไหม</Text>
        </div>
        <div>
          <Text style={{ color: COLOR.WHITE }}>
            แล้วอยากรู้ไหมว่ายอดขายที่ได้มาจากช่องทางไหน
          </Text>
        </div>
        <div>
          <Text style={{ color: COLOR.WHITE }}>มา</Text>
          <Text style={{ color: COLOR.WHITE }} strong>
            สร้างลิงก์
          </Text>
          <Text style={{ color: COLOR.WHITE }}>กับ</Text>
          <Text style={{ color: COLOR.WHITE }} strong>
            AdTrack
          </Text>
          <Text style={{ color: COLOR.WHITE }}>
            เราจะช่วยคุณติดตามทุกยอดขาย
          </Text>
        </div>
        <div style={{ width: "100%", backgroundColor: "white", padding: 10 }}>
          <Row gutter={8}>
            <Col span={8}>
              <Text>ใคร</Text>
            </Col>
            <Col span={8}>
              <Text>ที่มา</Text>
            </Col>
            <Col span={8}>
              <Text>ช่องทางใด</Text>
            </Col>
          </Row>
        </div>
      </div>
    );
}  