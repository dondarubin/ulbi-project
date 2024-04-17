import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import ThemeDark from 'shared/assets/icons/ThemeIcons/theme-dark.svg';
import ThemeLight from 'shared/assets/icons/ThemeIcons/theme-light.svg';
import { memo } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(styles.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
    >
      {
        theme === Theme.DARK
          ? <ThemeLight />
          : <ThemeDark />
      }
    </Button>
  );
});
