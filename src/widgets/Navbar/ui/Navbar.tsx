import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { useCallback, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { ButtonTheme } from 'shared/ui/Button/Button.types';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuth, setIsAuth] = useState(false);

  const onClickToggleModal = useCallback(() => {
    setIsAuth((prev) => !prev);
  }, []);

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <Button
        className={classNames(styles.links, {}, [])}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onClickToggleModal}
      >
        {t('Войти')}
      </Button>

      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpen={isAuth} onClose={onClickToggleModal}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae illum minima mollitia pariatur provident
        quibusdam quidem rerum tempora tenetur.
      </Modal>
    </div>
  );
};
