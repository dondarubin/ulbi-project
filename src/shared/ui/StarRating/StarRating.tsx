import { memo, useState } from 'react';
import styles from './StarRating.module.scss';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { StarIcon } from '@/shared/assets/icons/StarIcon/StarIcon';
import { HStack } from '../Stack';

interface StarRatingProps {
  className?: string;
  onSelect?: (starCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
  const {
    className,
    size = 30,
    selectedStars = 0,
    onSelect,
  } = props;

  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onCLick = (starCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starCount);
      setCurrentStarsCount(starCount);
      setIsSelected(true);
    }
  };

  const mods: Mods = {
    [styles.selected]: isSelected,
  };

  return (
    <HStack max justify="center" className={classNames('', {}, [className])}>
      {stars.map((starNumber) => (
        <div
          key={starNumber}
          className={classNames(
            styles.starContainer,
            mods,
            [currentStarsCount >= starNumber ? styles.hovered : styles.normal],
          )}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(starNumber)}
          onClick={onCLick(starNumber)}
        >
          <StarIcon
            color="var(--secondary-color)"
            key={starNumber}
            size={size}
          />
        </div>
      ))}
    </HStack>
  );
});
