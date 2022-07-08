import { createStore, action } from 'easy-peasy';

const store = createStore({
  user: {},
  lists: {},
  stories: {},

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
