import {useEffect, useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {FOLD_SIZE} from '../_data/data';

const useIsFold = () => {
  const {width} = useWindowDimensions();
  const [isFold, setIsFold] = useState(false);

  useEffect(() => {
    if (width >= FOLD_SIZE) {
      setIsFold(true);
    } else {
      setIsFold(false);
    }
  }, [width]);

  return {
    isFold,
  };
};

export {useIsFold};
