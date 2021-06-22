import React from "react";
import { Row, Col, Typography, Input, Button } from "antd";
const { Title, Text } = Typography;
import COLOR from "constants/color";
import imgAds3 from "images/ads3.png";
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
        boxShadow: "5px 0 rgba(0,0,0,0.12), 5px 0 rgba(0,0,0,0.24)",
        transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
      }}
    >
      <div
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          maxWidth: 350,
        }}
      >
        <Text style={{ fontSize: 40, fontWeight: 600 }}>เริ่มต้น</Text>
        <br />
        <Text
          style={{
            color: COLOR.GREY,
            fontWeight: 300,
            marginBottom: 50,
            fontSize: 16,
            display: "block",
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
  const FONT_BIGGER = {
    fontSize: 22,
    fontWeight: 600,
    color: COLOR.WHITE,
    margin: "0 8px",
  };
  const FONT_NORMAL = {
    fontSize: 16,
    color:COLOR.WHITE
  };
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
        <div
          style={{
            marginBottom: 50,
            flexDirection: "column",
            alignItems: "flex-start",
            display: "flex",
            justifyContent: "flex-start",
            maxWidth: 400,
            width: "100%",
          }}
        >
          <div>
            <Text style={FONT_NORMAL}>คุณเคย</Text>
            <Text style={FONT_BIGGER}>โปรโมทสินค้าออนไลน์</Text>
            <Text style={FONT_NORMAL}>ไหม</Text>
          </div>
          <div>
            <Text style={FONT_NORMAL}>
              แล้วอยากรู้ไหมว่ายอดขายที่ได้มาจากช่องทางไหน
            </Text>
          </div>
        </div>

        <div style={{ marginBottom: 80, maxWidth: 400, width: "100%" }}>
          <Text style={FONT_NORMAL}>มา</Text>
          <Text style={FONT_BIGGER}>สร้างลิงก์</Text>
          <Text style={FONT_NORMAL}>กับ</Text>
          <Text style={FONT_BIGGER}>AdTrack</Text>
          <Text style={FONT_NORMAL}>เราจะช่วยคุณติดตามทุกยอดขาย</Text>
        </div>
        <div
          style={{
            width: "100%",
            backgroundColor: "white",
            padding: "30px 10px",
          }}
        >
          <Row gutter={8}>
            <Col span={8} style={{ textAlign: "center" }}>
              <img src={imgAds3} style={{ width: 80 }}></img>
              <br />
              <Text strong style={{ fontSize: 16 }}>
                ช่องทางใด
              </Text>
              <br />
              <Text>ที่เหมาะกับการโปรโมทของคุณ</Text>
            </Col>
            <Col span={8} style={{ textAlign: "center" }}>
              <img src={imgAds3} style={{ width: 80 }}></img>
              <br />
              <Text strong style={{ fontSize: 16 }}>
                ช่องทางใด
              </Text>
              <br />
              <Text>ที่เหมาะกับการโปรโมทของคุณ</Text>
            </Col>
            <Col span={8} style={{ textAlign: "center" }}>
              <img src={imgAds3} style={{ width: 80 }}></img>
              <br />
              <Text strong style={{ fontSize: 16 }}>
                ช่องทางใด
              </Text>
              <br />
              <Text>ที่เหมาะกับการโปรโมทของคุณ</Text>
            </Col>
          </Row>
        </div>
      </div>
    );
}  