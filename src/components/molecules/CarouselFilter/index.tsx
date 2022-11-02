/* eslint-disable prettier/prettier */
import React, { FC, useEffect, useState } from 'react'
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

const CarouselFilter: FC = (props) => {

  const copyMouths = months()

  const dispatch = useAppDispatch()

  const { themeApp, sort, sortDatePeriod } = useAppSelector(state => state.main)

  const [date, setDate] = useState(sortDatePeriod)

  const COLORS = getThemeApp(themeApp)

  const getTextPeriod = (period) => {
  
    const text = {
      'Day': () => new Date(sortDatePeriod).getDate() + ' ' 
      + copyMouths[new Date(sortDatePeriod).getMonth()].title + ' ' 
      + new Date(sortDatePeriod).getFullYear(), 

      'Week': () => {
        const prevWeek = +sortDatePeriod - (86400000 * 6);
        const currentWeek = +new Date(sortDatePeriod) + 86400000;

        const prevTextWeek = new Date(prevWeek).getDate() + ' ' 
        + copyMouths[new Date(prevWeek).getMonth()].title + ' ' 
        + new Date(prevWeek).getFullYear()

        const currentTextWeek = new Date(currentWeek).getDate() + ' ' 
        + copyMouths[new Date(currentWeek).getMonth()].title + ' ' 
        + new Date(currentWeek).getFullYear()

        return prevTextWeek + ' - ' + currentTextWeek;
      }, 

      'Month': () => copyMouths[new Date(sortDatePeriod).getMonth()].title + ' ' 
      + new Date(sortDatePeriod).getFullYear(), 

      'Year': () => new Date(sortDatePeriod).getFullYear(), 
    }

    return text[period]()
  }
  
  const countCarousel = (prev) => {

    const carousel = {
      'Day': () => {
        if (prev) {
          setDate(new Date(+sortDatePeriod - 86400000))
        } else {
          setDate(new Date(+sortDatePeriod + 86400000))
        }
        
      }, 

      'Week': () => {
        if (prev) {
          setDate(new Date(+sortDatePeriod - (86400000 * 8)))
        } else {
          setDate(new Date(+sortDatePeriod + (86400000 * 8)))
        }
      }, 

      'Month': () => {
        if (prev) {
          setDate(new Date(new Date(sortDatePeriod).setMonth(new Date(sortDatePeriod).getMonth() - 1)))
        } else {
          setDate(new Date(new Date(sortDatePeriod).setMonth(+new Date(sortDatePeriod).getMonth() + 1)))
        }
      }, 

      'Year': () => {
        if (prev) {
          setDate(new Date(`${new Date(sortDatePeriod).getMonth() + 1}/
          ${new Date(sortDatePeriod).getDate()}/${+new Date(sortDatePeriod).getFullYear() - 1}`))

        } else {
          setDate(new Date(`${new Date(sortDatePeriod).getMonth() + 1}/
          ${new Date(sortDatePeriod).getDate()}/${+new Date(sortDatePeriod).getFullYear() + 1}`))
        }
      }, 
    }

    carousel[sort]()
  }

  const nextDisabled = +new Date() < +date + 86400000

  useEffect(() => {
    console.log('CarouselFilter')

    dispatch(setSortDatePeriod(date))
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
            style={[styles.next, styles.arrow, nextDisabled && {opacity: 0.2}]}
            disabled={nextDisabled}
            onPress={() => countCarousel(false)}>
            <IconSvg name={ARROW_SELECT} color={COLORS.colorText}/>
          </TouchableOpacity>

      </View>
  );
};

export default CarouselFilter