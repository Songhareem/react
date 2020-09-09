
# typescript react 환경구축

- ref : 
    - 직접 세팅 : https://jeonghwan-kim.github.io/dev/2019/06/25/react-ts.html
    - CRA를 이용한 세팅
        - ref: https://the-illusionist.me/77
        - npx create-react-app appName --typescript
        - 직접 세팅 경로 들어가서 webpack 설치할것

# react 

- ref :
    - 공식 docs : https://ko.reactjs.org/docs/getting-started.html
    - todo List 프로젝트 : https://velog.io/@yesdoing/TypeScript-with-React-Redux-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-k5jsis62ah
    - todo List + redux : https://velog.io/@yesdoing/TypeScript-with-React-Redux-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-k5jsis62ah
    - 기본적인 개념 : https://velog.io/@velopert/using-react-with-typescript
    - 벨로퍼트 docs : https://react.vlpt.us/basic/

# react 관련

- 화살표 함수 : 익명 함수 또는 콜백 함수로만 사용
    - 익명함수
        - es5 : var pow = function (x) { return x * x; };
        - ex6 : var pow = x => x*x;
    - 콜백함수
        - es5 : var pow = arr.map(function (x) { return x*x });
        - es6 : var pow = arr.map(x => x*x)

- this
    - 생성자 함수 및 객체의 메소드를 제외한 모든 함수(내부 함수 및 콜백 함수) 내부의 this는 전역 객체를 가르킴
        - !! 화살표 함수 내의 this는 언제나 상위 스코프의 this를 가르킴 (Lexical this)

- props / state (속성 / 상태)
    - props : 컴포넌트에서 필요한 정적 데이터, 변하지 않는 값으로 사용한다. 컴포넌트 내에서 변경하지 말 것.
    - state : 컴포넌트에서 필요한 동적 데이터, 사용자에 의해 변경되는 것을 관리할 때, 상태를 저장해야할 때 사용. 컴포넌트 내에서 변경된다. 변경시 반드시 setState() 사용

- 구조 분해
    - ```
        var person = { name : 'song', age : 100, area : 'seoul' };
      
        const { name, age, area } = person
      ```

- useState
    - const [number, setNumber] = useState(0);
    - useState() 함수 호출시, 배열 반환 
        - 첫번째 원소 = 현재상태
        - 두번째 원소 = Setter함수