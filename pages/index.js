import React from "react";
import Main from "./Main";
import { Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { ElementHomeHeader,ElementHomeMethod } from "elements/home";
export default function Home() {
  return (
    <Main>
      <ComponentDidMount />
      <MainComponent />
    </Main>
  );
}

function ComponentDidMount(props) {
  const { action } = props;

  return <></>;
}
function MainComponent(props) {
  const refMethod = React.useRef()
  const onClickBottomScroll = () => {
    refMethod.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <ElementHomeHeader {...props} />
      <ElementHomeMethod ref={refMethod} {...props} />
      <Button
        onClick={onClickBottomScroll}
        style={{
          position: "fixed",
          bottom: 20,
          left: "50%",
          transform: " translateX(-50%)",
          width: 44,
          height: 44,
          borderRadius: "50%",
          borderRadius: "50px",
          boxShadow: "20px 20px 60px #bebebe,-20px -20px 60px #ffffff",
        }}
      >
        <DownOutlined />
      </Button>
    </>
  );
}
