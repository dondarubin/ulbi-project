import { getScrollSaveByPath } from './model/selectors/scrollSaveSelectors';
import { scrollSaveActions, scrollSaveReducer } from './model/slice/scrollSaveSlice';
import { ScrollSaveSchema } from './model/types/ScrollSaveSchema.types';

export {
  type ScrollSaveSchema,
  getScrollSaveByPath,
  scrollSaveReducer,
  scrollSaveActions,
};
