import { BookmarkStateType, BookmarkActionType } from '../types'

// Webクリップの追加と削除を制御するReducer
export const bookmarkReducer = (state: BookmarkStateType, action: BookmarkActionType) => {
  switch (action.type) {
    case 'ADD_Bookmark':
      return { ...state, bookmarkArticles: [...state.bookmarkArticles, action.article] }
    case 'DELETE_Bookmark':
      return {
        ...state,
        bookmarkArticles: state.bookmarkArticles.filter(
          (bookmarkArticle) => bookmarkArticle.url !== action.article.url
        ),
      }
    default:
      return state
  }
}
