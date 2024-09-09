# 🎥 Netflix Clone Coding

### npm install🧚‍♂️

```bash
npm install
npm start
```

👉 http://localhost:3000/ 접속됩니니다.

<br />

### Using🥷

- Styled Components
- Recoil
- React Query
- React Router DOM
- Apex Charts
- React Spring
- Typescript
- Firebase

<br />

### styled-components🎨

<details>
  <summary>
    <strong>styled-components에 대해 생각해보기 (👈 Click!)</strong>
  </summary>

  <br />

- **🎨 인라인 스타일이나 CSS모듈 스타일을 권장하지 않는 이유는?**

- **🎨 Box 컴포넌트 스타일을 Input 컴포넌트 스타일을 가져오고 싶다면?  
  +) 추가로 Input 컴포넌트에 color: red; 만 별도로 추가하고 싶다면?**

- **🎨 같은 컴포넌트를 사용하지만 배경색만 다르게 적용하고 싶다면?**

- **🎨 동일한 컴포넌트 사용하고 같은 스타일을 사용한다. 하지만 경우에 따라 태그를 다르게 설정하고 싶다면?**

- **🎨 4개의 input태그에 공통된 속성을 적용하고 싶다면?**

- **🎨 keyframes 사용해서 컴포넌트에 animation 적용하고 싶다면?**

- **🎨 스타일 컴포넌트 안에 자식 요소가 HTML태그로 적용되어 있는 요소에 스타일을 적용하고 싶다면?**

  1. 특정 부모 요소 안에 자식요소로만 존재하는 경우
  2. 공통적으로 많이 사용되는 요소이지만, 특정 부모 요소 안에 있을 때 별도로 적용하고 싶은 스타일이 있는 경우

- **🎨 전체 theme(ThemeProvider) 사용하여 다크모드 사용하려면?**

</details>

<br />

### TypeScript💙

<details>
  <summary>
    <strong>TypeScript에 대해 생각해보기 (👈 Click!)</strong>
  </summary>

  <br />

- **💙 TypeScript VS PropTypes(React) 차이점은?**

- **💙 Interface 란?**

- **💙 Interface를 사용하지 않고 타입을 정의하고 싶다면?**

- **💙 useState 상태 초기값 타입 외 다른 타입도 함께 정의하고 싶다면?**

- **💙 Event Type 설정 하기 (input태그의 onChange 이벤트 함수 만들어본다면?)**

- **💙 styled-components 공통 스타일 속성 TypeScript 로 셋팅하기**

</details>

<br />

### React Router V6📑

<details>
  <summary>
    <strong>React Router에 대해 생각해보기 (👈 Click!)</strong>
  </summary>

🔗 https://reactrouter.com/en/main

<br />

- 📄 BrowserRouter(React V5) → CreateBrowserRouter(React V6)

- 📄 Outlet 컴포넌트를 사용해서 자식 컴포넌트들을 렌더링 하고싶다면?

- 📄 errorElement 사용하면 좋은 점은? 왜 필요할까?

  → Route로 경로 설정이 안된 페이지로 이동하면 빈화면으로 노출되는게 아니라 작성한 에러 컴포넌트가 노출되면서 방어할 수 있습니다.

  → 최상위 루트에서만 적용할 수 있는 것이 아니라 각 컴포넌트 루트마다 errorElement 를 설정할 수 있습니다.

  → 개발자모드에서 에러가 난 경우 친절하게 에러 문구와 표시로 알려주지만,
  실환경에서 에러가 날 경우 아예 빈화면으로 보여서 사용자가 아무것도 사용할 수 없게 됩니다.
  실환경의 경우 런타임에서 에러가 나기 때문이지요!

- 📄 useNavigate 와 Link 태그의 사용 차이점은?

  1. `useNavigate`는 프로그래밍적으로 페이지 이동을 제어하는 데 사용되고,
     `Link`는 사용자가 클릭했을 때 페이지를 이동(SPA방식으로)하는 링크를 제공합니다.

  2. `useNavigate`는 조건부 이동이나 이벤트 기반 이동과 같은 더 복잡한 네비게이션 로직에 적합하고,
     `Link`는 단순한 네비게이션에 적합합니다.

- 📄 useParams는 URL로 부터 정보를 얻습니다. 어떤 경우에 사용할까요?

- 📄 Outlet 은 Route의 모든 children들을 렌더합니다.
  children으로 되어 있는 것들을 <Outlet /> 컴포넌트 하나로 대체시키는 것입니다.

- 📄 Link 사용시 절대경로로 이동하는 방법과 현재 경로 유지하면서 그대로 이동하는 방법은?

  - www.example.com/home 에서 아래 Link 컴포넌트 클릭시 이동될 경로는?

    ```jsx
    <Link to="/page1" /> // www.example.com/page1
    <Link to="page1" /> // www.example.com/home/page1
    ```

- 📄 Outlet을 사용해서 렌더되는 자식요소에서 데이터를 넘겨 보여줄 내용이 있다면?

  - 방법1) useParams : url을 참조하는 방식

  - 방법2) useOutletContext : 모든 자식들이 사용할 수 있도록 데이터를 보내는 방식

- 📄 이제 react-router-dom 은 페이지 이동 기능만 가능한것이 아니라 데이터를 가져오거나 폼데이터를 보내거나 다양한 것을 수행하려고 합니다. (ex. useLoaderData, Form 등)

</details>

<br />
