export type Article = {
  source_id: string
  author: string
  title: string
  description: string
  link: string
  // url: string
  image_url: string
  pubDate: string
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
