
// 스타일링된 엘리먼트 만들기 
import { link } from 'fs-extra';
import styled from 'styled-components';
const MyComponent = styled.div`
font-size: 2rem;
`;  // styled.div 뒤에 Tagged 템플릿 리터럴 문법을 통해 스타일을 넣어주면, 
// 해당 스타일이 적용된 div로 이루어진 리액트 컴포넌트가 생성된다. 
// div가 아닌 button이나 input으로도 넣어서 사용이 가능하다.

// 태그의 타입을 styled 함수의 인자로 전달
const MyInput = styled('input')`
    background: gray;
`

// 아예 컴포넌트 형시의 값을 넣어 줌
const StyledLink = styled(link)`
    color: blue; 
`