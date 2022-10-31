import React, { useState } from 'react'
import { useEffect } from 'react'
import { Keyboard } from 'react-native'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store/index'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAutoFocus = (inputRef) => {

    
  const [inputFocus, setInputFocus] = useState(false)
          
  const focusInputHandler = (value) => {
      setInputFocus(value)

      if (value) {
        inputRef?.current?.focus()
      }
  }

  const fucusHandler = () => {
    
      if (!inputFocus) {
          focusInputHandler(true)
      } else {
          // addTodoHandler()
      }
  }

    useEffect(() => {
  
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            focusInputHandler(false)
        })
      
        return () => {
          hideSubscription.remove()
        }
        
      }, [])
    

    return {
        setFocus: () => fucusHandler()
    }
}