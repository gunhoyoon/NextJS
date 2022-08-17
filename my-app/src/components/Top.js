import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
          <img
            src="/images/geonho.jpeg"
            alt="logo"
            style={{ display: "black", width: 80 }}
          />
        </div>
        <Header as="h1">의사 윤건호 기다려라 개발자 윤건호가 간다.</Header>
      </div>
      <Gnb />
    </div>
  );
}
