import { Header } from "semantic-ui-react";
import Gnb from "../Gnb/Gnb";

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
          <img
            src="/images/star.jpeg"
            alt="logo"
            style={{ display: "black", width: 80 }}
          />
        </div>
        <Header as="h1">블링블링</Header>
      </div>
      <Gnb />
    </div>
  );
}
