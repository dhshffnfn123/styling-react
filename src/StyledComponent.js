import React from "react";
import styled, { css } from 'styled-components';

const sizes = {
    desktop: 1024,
    tablet: 768
};

// 위에 있는 size 객체에 따라 자동으로 media 쿼리 함수를 만들어 줍니다.
// 참고 : https://www,styled-components.com/docs/advanced#media-templates
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media(max-width: ${sizes[label] / 16}em) {
        ${css(...args)};
    }
    `;

    return acc;
}, {});

const Box = styled.div`
/* props로 넣어 준 값을 직접 전달해 줄 수 있습니다. */
background: ${props => props.color || 'blue'}; /* 조건부 props 요소에 스타일을 따로 지정하지 않으면 'blue'가 적용된다 */
padding: 1rem;
display: flex;
/* 기본적으로는 가로 크기 1024px에 가운데 정렬을 하고 가로 크기가 작아짐에 따라 크기를 줄이고 768px 미만이 되면 꽉 채운다.*/
width: 1024px;
margin: 0 auto;
${media.desktop`width: 768px;`}
${media.tablet`width: 100%;`};

/*@media (max-width: 1024px) {
    width: 768px;
}
@media (max-width: 768px) {
    width: 100%;
}*/
`;

const Button = styled.button`
background: white;
color: black;
border-radius:4px;
padding: 0.5rem;
display: flex;
align-items: center;
justify-content: center;
box-sizing: border-box;
font-size: 1rem;
font-weight: 600;

/* & 문자를 사용하여 Sass처럼 자기 자신 선택가능 */
&:hover {
    background: rgba(255,255,255,0.9);
}

/* 다음 코드는 inverted 값이 true일 때 특정 스타일을 부여해 줍니다. */
${props =>
props.inverted && 
css `
    background: none;
    border: 2px solid white;
    color: white;
    &:hover {
        background white;
        color: black;
    }
`};
& + button {
    margin-left: 1rem;
}
`;

const StyleComponent = () => (
    <Box color="black"> 
        <Button>안녕하세요</Button>
        <Button inverted={true}>테두리만</Button>
    </Box>
);

export default StyleComponent;