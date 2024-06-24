import { ArticleContent, ArticleContentType } from '@/entities/Article';

export const addValueToArticleContentArray = (
  articles: ArticleContent[],
  newContent: ArticleContent,
): ArticleContent[] => {
  const getCurrentMaxId = (type: ArticleContentType): number => articles
    .filter((article) => article.type === type)
    .reduce((maxId, article) => (article.id && article.id > maxId ? article.id : maxId), 0);

  // Assign an id based on the type of the new content
  if (newContent.type === ArticleContentType.CODE) {
    newContent.id = getCurrentMaxId(ArticleContentType.CODE) + 1;
  } else if (newContent.type === ArticleContentType.TEXT) {
    newContent.id = getCurrentMaxId(ArticleContentType.TEXT) + 1;
  } else if (newContent.type === ArticleContentType.IMAGE) {
    newContent.id = getCurrentMaxId(ArticleContentType.IMAGE) + 1;
  }

  // Return a new array with the new content added
  return [...articles, newContent];
};
