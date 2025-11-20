import styled from 'styled-components';

const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
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

const CloseIcon = styled.i`
  cursor: pointer;
  font-size: 24px;
`;

export const Modal: React.FunctionComponent<{
  children: React.ReactNode;
  shouldDisplay: boolean;
  onClose: () => void;
}> = ({ children, shouldDisplay, onClose }) => {
  return (
    <>
      {shouldDisplay && (
        <ModalBackground onClick={onClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <section style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <CloseIcon className="material-icons" onClick={onClose}>
                close
              </CloseIcon>
            </section>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

export default Modal;
