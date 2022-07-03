import React from 'react';

export default function Modal(props) {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    // eslint-disable-next-line react/prop-types
    const { open, close, header } = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        {header}
                        <button type="button" className="close" onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>{props.children}</main>
                    <footer>
                        <button type="button" className="close" onClick={close}>
                            close
                        </button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
}
