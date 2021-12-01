import { createSelector } from 'reselect'

const selectState = (state) => state.weather

export const getCurrentTemp = createSelector(selectState, state => state.main.temp)
export const getName = createSelector(selectState, state => state.name)
export const getApp = createSelector(selectState, state => state.initApp)
export const getInfo = createSelector(selectState, state => state.weather[0].main)
export const getError = createSelector(selectState, state => state.error)



