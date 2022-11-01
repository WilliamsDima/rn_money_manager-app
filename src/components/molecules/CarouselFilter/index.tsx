/* eslint-disable prettier/prettier */
import React, { FC, useEffect, useState} from 'react'
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native'
import { styles } from './filter.styles'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { months } from '../../../hooks/helpers'
import { setSortDatePeriod } from '../../../store/redusers/main/main'
import { IconSvg } from '../../../services/icons'
import { ARROW_SELECT } from '../../../services/iconsName'
import { getThemeApp } from '../../../services/colors'

const CarouselFilter: FC = React.memo((props) => {

  const dispatch = useAppDispatch()

  const { sort, themeApp } = useAppSelector(state => state.main)

  const COLORS = getThemeApp(themeApp)

  const [date, setDate] = useState(new Date())

  const countCarousel = (prev) => {

    const carousel = {
      'Day': () => {

        if (prev) {
          setDate(new Date(+date - 86400000));
        } else {
          setDate(new Date(+date + 86400000));
        }
        
      }, 

      'Week': () => {
        if (prev) {
          setDate(new Date(+date - (86400000 * 8)));
        } else {
          setDate(new Date(+date + (86400000 * 8)));
        }
      }, 

      'Month': () => {
        if (prev) {
          setDate(new Date(new Date(date).setMonth(new Date(date).getMonth() - 1)));
        } else {
          setDate(new Date(new Date(date).setMonth(+new Date(date).getMonth() + 1)));
        }
      }, 

      'Year': () => {
        if (prev) {
          setDate(new Date(`${new Date(date).getMonth() + 1}/
          ${new Date(date).getDate()}/${+new Date(date).getFullYear() - 1}`));
        } else {
          setDate(new Date(`${new Date(date).getMonth() + 1}/
          ${new Date(date).getDate()}/${+new Date(date).getFullYear() + 1}`));
        }
      }, 
    };

    carousel[sort]();
  };

  const getTextPeriod = (period) => {
  
    const text = {
      'Day': () => new Date(date).getDate() + ' ' 
      + months()[new Date(date).getMonth()].title + ' ' 
      + new Date(date).getFullYear(), 

      'Week': () => {
        const prevWeek = +date - (86400000 * 6);
        const currentWeek = +new Date(date) + 86400000;

        const prevTextWeek = new Date(prevWeek).getDate() + ' ' 
        + months()[new Date(prevWeek).getMonth()].title + ' ' 
        + new Date(prevWeek).getFullYear()

        const currentTextWeek = new Date(currentWeek).getDate() + ' ' 
        + months()[new Date(currentWeek).getMonth()].title + ' ' 
        + new Date(currentWeek).getFullYear()

        return prevTextWeek + ' - ' + currentTextWeek;
      }, 

      'Month': () => months()[new Date(date).getMonth()].title + ' ' 
      + new Date(date).getFullYear(), 

      'Year': () => new Date(date).getFullYear(), 
    };
  
    return text[period]();
  };

  useEffect(() => {
    dispatch(setSortDatePeriod(date));
  }, [date])

  return (
      <View style={styles.container}>
          <TouchableOpacity 
            style={[styles.prev, styles.arrow]} 
            onPress={() => countCarousel(true)}>
            <IconSvg name={ARROW_SELECT} color={COLORS.colorText}/>
          </TouchableOpacity>

          <Text style={{color: COLORS.colorText}}>{getTextPeriod(sort)}</Text>

          <TouchableOpacity 
            style={[styles.next, styles.arrow]}
            onPress={() => countCarousel(false)}>
            <IconSvg name={ARROW_SELECT} color={COLORS.colorText}/>
          </TouchableOpacity>

      </View>
  );
});

export default CarouselFilter