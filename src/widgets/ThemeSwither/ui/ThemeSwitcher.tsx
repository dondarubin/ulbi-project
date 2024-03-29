import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import ThemeDark from 'shared/assets/icons/ThemeIcons/theme-dark.svg';
import ThemeLight from 'shared/assets/icons/ThemeIcons/theme-light.svg';
// import ThemeRain from 'shared/assets/icons/ThemeIcons/theme-rain.svg';
import { Button } from 'shared/ui/Button/Button';
import { ButtonTheme } from 'shared/ui/Button/Button.types';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
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
};
