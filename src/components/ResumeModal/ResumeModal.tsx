import "./ResumeModal.css";

import { Newspaper, X } from "phosphor-react";

import * as Dialog from "@radix-ui/react-dialog";

interface ResumeModalProps {
  children: React.ReactNode;
}

export const ResumeModal = ({children}: ResumeModalProps) => {
  return (
      <Dialog.Root>
        <Dialog.Trigger>
          <Newspaper size={32} />
          <span>Curriculo</span>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="resume-overlay" />
          <Dialog.Content className="resume-container">
            <div className="box-img">{children}</div>
          <Dialog.Close className="btn-close"><X size={35}/> </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
  );
};
