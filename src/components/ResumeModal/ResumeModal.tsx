import "./ResumeModal.css";

import { Newspaper } from "phosphor-react";

import * as Dialog from "@radix-ui/react-dialog";

interface ResumeModalProps {
  children: any;
}

export const ResumeModal = (props: ResumeModalProps) => {
  return (
      <Dialog.Root>
        <Dialog.Trigger>
          <Newspaper size={32} />
          <span>Curriculo</span>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="resume-overlay" />
          <Dialog.Content className="resume-container">
            <div className="box-img">{props.children}</div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
  );
};
