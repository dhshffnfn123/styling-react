import React from 'react';
import styles from './CSSModule.module.scss';

const CSSModule = () => {
    return (
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            {/* 리터럴문법을 사용하고 싶지 않다면 className={[styles.wrapper, styles.inverted].join('')} */}
            안녕하세요, 저는 <span className="something">CSS Module!</span>
        </div>
    );
};

export default CSSModule;

/* console.log(styles)를 하면 wrapper: "CSSModule_wrapper_1SbdQ"가 나온다. */