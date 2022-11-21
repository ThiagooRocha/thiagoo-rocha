import "./EducationModal.css";

import { Medal, CaretRight, CaretLeft } from "phosphor-react";
import { useRef } from "react";

import * as Dialog from "@radix-ui/react-dialog";

interface EducationProps {
  children: any;
}

export const EducationModal = (props: EducationProps) => {
  const refImgs = useRef<any>(null);

  const handleLeftClick = () => {
    refImgs.current.scrollLeft -= refImgs.current.offsetWidth;
  };
  const handleRightClick = () => {
    refImgs.current.scrollLeft += refImgs.current.offsetWidth;
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Medal size={32} />
        <span>Certificados</span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="education-overlay" />
        <Dialog.Content className="education-container">
          <div
            className="box-imgs"
            ref={refImgs}
          >
            {props.children}
          </div>
          <div className="box-btn">
            <button className="leftBtn" onClick={handleLeftClick}><CaretLeft size={32} /></button>
            <button className="rightBtn" onClick={handleRightClick}><CaretRight size={32} /></button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
