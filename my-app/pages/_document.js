import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
// 이건 nextjs에서 제공하는 document를 커스터 마이징할 수 있음(내 입맛대로 사용 )
// nextjs페이지들은 마크업 정의를 건너뛰기때문에 Html이나 Head body등의 태그를 만들어야될땐 이 파일을 필수적으로 사용해야됨
// 이게 있어야 이 부분들을 수정할 수 있음

// app.js와 document.js의 차이점
// app은 글로벌 css적용하거나 레이아웃을 잡음
// 반면 document는 서버에서만 랜더링되고 온클ㄹ릭같은 이벤트 핸들러는 작동하지 않음 css도 사용안함
// 앱 head랑 document head랑 다름
