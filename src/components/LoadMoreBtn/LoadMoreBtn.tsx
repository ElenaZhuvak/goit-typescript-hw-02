import { FC } from 'react'
import css from './LoadMoreBtn.module.css'

export interface LoadMoreBtnProps {
  onClick: () => void
}

export const LoadMoreBtn : FC<LoadMoreBtnProps>= ({onClick}) => {
  return (
    <button className={css.btnLoadMore} onClick={onClick} type='button'>Load More</button>
  )
}
