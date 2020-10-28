import MyName from './MyName';
import Counter from './Counter';
import logo from './logo.svg';
import './App.css';

// JSX는 babel을 통해서 풀어보면 그저 js일뿐
// {} <- JSX 안에서 자바 스크립트 값 사용

function App() {
  return (
    //<MyName name="리액트"/>
    <Counter />
  );
}

export default App;

// function App() {
//   const style = {
//     backgroundColor: 'black',
//     padding: '16px',
//     color: 'white',
//     fontSize: '12px'
//   }
//   const value = 1;
//   return (
//     <div>
//       {
//         // 태그 안에서의 if = 3항연산자 사용
//         // 1 + 1 === 2 ? (<div>맞아요!</div>) : (<div>틀려요!</div>)
        
//         // 태그 안에서의 and 연산
//         // 1 + 1 === 3 && (<div>맞아요!</div>)

//         // 복잡한 조건문, IIFE 사용
//         (() => {
//           if(value === 1) return (<div>하나</div>)
//           if(value === 2) return (<div>둘</div>)
//           if(value === 3) return (<div>셋</div>)
//         })()
//       }
//       <div style={style}>
//         hello world
//       </div>
//       <div className="App">
//         리액트
//       </div>
//       {/* 주석은 이렇게 */}
//     </div>
//   );
// }