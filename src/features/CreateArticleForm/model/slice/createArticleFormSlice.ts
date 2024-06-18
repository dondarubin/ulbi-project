import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleContent, ArticleContentType, ArticleTypeWithoutAll } from 'entities/Article';
import { addValueToArticleContentArray } from 'shared/lib/addValueToArticleContentArray/addValueToArticleContentArray';
import { CreateArticleFormSchema } from '../types/createArticleForm.types';

const initialState: CreateArticleFormSchema = {
  // articleForm: undefined,
  title: '',
  subtitle: '',
  img: '',
  type: [],
  titleField: '',
  paragraphField: '',
  paragraphsArray: [],
  imageUrlField: '',
  imageCaptionField: '',
  codeField: '',
  content: [
    // {
    //   id: 0,
    //   type: ArticleContentType.CODE,
    //   code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
    // },
    // {
    //   id: 1,
    //   type: ArticleContentType.TEXT,
    //   title: 'Заголовок этого блока',
    //   paragraphs: [
    //     'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
    //     'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
    //   ],
    // },
  ],
  isLoading: false,
  validateError: undefined,
};

export const createArticleFormSlice = createSlice({
  name: 'createArticleForm',
  initialState,
  reducers: {
    // setArticleData: (state, action: PayloadAction<CreatedArticleType>) => {
    //   state.articleForm = {
    //     ...state.articleForm,
    //     ...action.payload,
    //   };
    // },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setSubtitle: (state, action: PayloadAction<string>) => {
      state.subtitle = action.payload;
    },
    setImg: (state, action: PayloadAction<string>) => {
      state.img = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleTypeWithoutAll>) => {
      const index = state.type.indexOf(action.payload);
      if (index === -1) {
        state.type.push(action.payload);
      } else {
        state.type = state.type.filter((type) => type !== action.payload);
      }
    },
    setTitleField: (state, action: PayloadAction<string>) => {
      state.titleField = action.payload;
    },
    setParagraphField: (state, action: PayloadAction<string>) => {
      state.paragraphField = action.payload;
    },
    addValueToParagraphsArray: (state, action: PayloadAction<string>) => {
      state.paragraphsArray.push(action.payload);
    },
    deleteValueFromParagraphsArray: (state, action: PayloadAction<string>) => {
      const index = state.paragraphsArray.indexOf(action.payload);

      if (index !== -1) {
        state.paragraphsArray = state.paragraphsArray.splice(index, 1);
      }
      // state.paragraphsArray = state.paragraphsArray?.filter((paragraph) => paragraph !== action.payload);
    },
    setImageUrlField: (state, action: PayloadAction<string>) => {
      state.imageUrlField = action.payload;
    },
    setImageCaptionField: (state, action: PayloadAction<string>) => {
      state.imageCaptionField = action.payload;
    },
    setCodeField: (state, action: PayloadAction<string>) => {
      state.codeField = action.payload;
    },
    setContent: (state, action: PayloadAction<ArticleContent>) => {
      const currentContentArray = addValueToArticleContentArray(state.content, action.payload);
      state.content = [
        ...currentContentArray,
      ];
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchProfileData.pending, (state) => {
  //       state.isLoading = true;
  //       state.error = undefined;
  //     })
  //     .addCase(fetchProfileData.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //     })
  //     .addCase(fetchProfileData.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // },
});

export const { actions: createArticleFormActions } = createArticleFormSlice;
export const { reducer: createArticleFormReducer } = createArticleFormSlice;
