import { classNames } from 'shared/lib/classNames/classNames';
import { memo, Suspense } from 'react';
import { Loader } from 'shared/ui/Loader';
import { Modal } from 'shared/ui/Modal';
import styles from './RegisterModal.module.scss';
import { RegisterFormLazy } from '../RegisterForm/RegisterForm.lazy';

interface RegisterModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal = memo((props: RegisterModalProps) => {
  const {
    className,
    isOpen,
    onClose,
  } = props;

  return (
    <Modal
      className={classNames(styles.RegisterModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <RegisterFormLazy onSuccessLogin={onClose} />
      </Suspense>
    </Modal>
  );
});
