import { useState } from "react";
import styled from "styled-components";


const ModalBackground = styled.div`
position: absolute;
left: 0;
top:0;
overflow: auto;
background-color: rgba(0, 0, 0, 0.5);
width: 100%;
height: 100%;
`;
const ModalContent = styled.div`
margin: 12% auto;
padding: 24px;
background-color: wheat;
width: 50%;
`;



export const Modal: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {

    const [show, setShow] = useState(false);

    return (
        <>
            <button onClick={() => setShow(true)}>show modal</button>
            {
                show && (<ModalBackground onClick={() => setShow(false)}>
                    <ModalContent onClick={e => e.stopPropagation()}>
                        <i style={{ cursor: "pointer" }} className="material-icons" onClick={() => setShow(false)}>close</i>
                        {children}
                    </ModalContent>
                </ModalBackground>)
            }
        </>
    )
}