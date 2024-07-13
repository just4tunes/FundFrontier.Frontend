import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

type ConfirmationModalProps = {
  message: string,
  title: string,
  callBack: Function,
  onClose: Function
}

const ConfirmationModal = ({ message, title, callBack, onClose }: ConfirmationModalProps) => {
  const [opened, { close }] = useDisclosure(true);

  const handleConfirm = () => {
    callBack();
    close();
  }

  const handleClose = () => {
    close();
    onClose();
  }

  return (
    <>
      <Modal
        opened={opened}
        onClose={handleClose}
        title={title}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <div className="flex flex-col gap-4">
          <p>{message}</p>
          <div className="flex gap-4">
            <Button color="gray" onClick={handleClose}>Cancel</Button>
            <Button color="red" onClick={handleConfirm}>Confirm</Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ConfirmationModal;