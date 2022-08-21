export type Article = {
  source: { id: string; name: string }
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export type Articles = Article[]

export type BookmarkStateType = {
  bookmarkArticles: Articles
}

export type BookmarkActionType = { type: string; article: Article }

export type BookmarkType = {
  bookmarkState: BookmarkStateType
  bookmarkDispatch: React.Dispatch<BookmarkActionType>
}

export type HandleCategoryContextType = {
  category: string
  handleCategory: (param: string) => void
}

export type Props = {
  screen: string;
};

export type Visible = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
