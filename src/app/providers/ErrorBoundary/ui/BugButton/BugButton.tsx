import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';

export const BugButton = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  const onClickThrowErrorHandler = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button
      onClick={onClickThrowErrorHandler}
    >
      {t('throw error')}
    </Button>
  );
};
