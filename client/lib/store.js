import { createStore, action } from 'easy-peasy';

const store = createStore({
  user: null,
  userList: { name: '', list: [] },
  lists: [],
  stories: null,
  setList: action((state, payload) => {
    state.userList = { ...state.userList, ...payload };
  }),
  setUser: action((state, payload) => {
    state.user = payload;
  }),
  setLists: action((state, payload) => {
    state.lists = payload;
  }),
  setStories: action((state, payload) => {
    state.stories = payload;
  }),
});
export default store;
