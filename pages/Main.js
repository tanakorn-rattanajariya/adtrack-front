import stylesheet from "styles/index.less";
import { api, classes } from "../nredux.config";
import { useNReduxDispatcher,useNReduxMapping } from "../nredux";
import { connect } from "react-redux";
import Head from "next/head";
import { Row, Col, message } from "antd";

import { Navigator } from "components";
function errorMessage(error) {
  message.error(error);
}
function successMessage() {
  message.success("success");
}

function Main(props) {
  const { fullscreen, loadMap, noLayout } = props;
  const { error, success } = props.reducer.component;
  React.useEffect(() => {
    if (error) {
      errorMessage(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (success) {
      successMessage();
    }
  }, [success]);
  return (
    <Navigator fullscreen={fullscreen} noLayout={noLayout}>
      <Head>
        <title>React Starter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Description" content="Amazon Deepmap" />
        <link
          rel="preload"
          href="/fonts/prompt/Prompt-Thin.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/prompt/Prompt-ExtraLight.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/prompt/Prompt-Light.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/prompt/Prompt-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/prompt/Prompt-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/prompt/Prompt-SemiBold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/prompt/Prompt-ExtraBold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/prompt/Prompt-Black.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <style
        dangerouslySetInnerHTML={{
          __html: stylesheet,
        }}
      />
      <div>
        {React.Children.map(props.children, (child) => {
          return React.cloneElement(child, {
            action: props.action,
            reducer: props.reducer,
          });
        })}
      </div>
    </Navigator>
  );
}
export default connect(useNReduxMapping, useNReduxDispatcher)(Main);
