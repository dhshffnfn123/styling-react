import classNames from "classnames";

classNames('one', 'two'); // = 'one two'
classNames('one', { two: true }); // = 'one two'
classNames('one', { two: false }); // = 'one'
classNames('one', ['two', 'three']); // = 'one two three'

const myClass = 'hello';
classNames('one', myClass, { mycondition: true }); // = 'one hello myCondition'


const MyComponent = ({ highlighted, theme}) => (
    <div className={classNames('MyComponent', { highlighted }, theme)}>Hello</div>
);
/* 위 엘리먼트의 클래스에 highlighted 값이 true이면 highlighted 클래스가 적용되고, false이면 적용되지 않는다.*/

const MyComponent2 = ({ highlighted, theme }) => (
    <div className={`MyComponent ${theme} ${highlighted ? 'highlighted' : ''}`}>HELLO</div>
);
/*  */

