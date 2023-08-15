import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';
import { ButtonTheme } from '../Button.types';

describe('Button', () => {
  // Наличие кнопки на странице
  test('Test render', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  // Наличие класса 'clear'
  test('Test param theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
    screen.debug(); // выводит логи в консоль
  });
});
