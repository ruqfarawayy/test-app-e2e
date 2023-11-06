import "../styles/globals.css";
import LayoutComponent from "../component/Layout";
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";

function MyApp({ Component, pageProps }) {
  return (
    <StyleProvider>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Kanit, sans-serif",
          },
        }}
      >
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </ConfigProvider>
    </StyleProvider>
  );
}

export default MyApp;
