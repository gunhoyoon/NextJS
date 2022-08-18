import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Top from "../src/components/Top/Top";
import Footer from "../src/components/Footer/Footer";
import { Divider } from "semantic-ui-react";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ width: 1000, margin: "0 auto" }}>
      <Top />
      <Component {...pageProps} />
      <Divider />
      <Footer />
    </div>
  );
  // 프롭스로 넘어온 컴포넌트는 현재 페이지를 의미함, 페이지 전환시에 이 컴퍼넌트 프롭스가 변경됨
  // 페이지 프롭스는 데이터 패칭 메서드를 통해 미리 가져온 초기 객체입니다.
  // 이 페이지를 사용하지 않으면 빈 객체가 전달된다.
}

// 앱에서는 가진 컴퍼넌트 랜더
// component => index.js임
//
export default MyApp;

// 레이 아웃을 만들기 위해선 _app을 이용해야함
// 모든 페이지는 이곳을 통할거임
// 페이지 전환시에 레이아웃을 유지할 수 있다.
// 페이지 전환시에 상태값을 유지할 수 있다.
// ComponentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있다.
// 추가적인 데이터를 페이지로 주입시키는게 가능함
// 글로벌 CSS를 이곳에 선언함
