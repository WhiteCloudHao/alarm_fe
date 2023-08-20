const state = {
  isSidebar: false,
  isAddTaskModal: false,
  isAddCategoryModal: false,
  isUpdateTagModal: false,
};

const getters = {
  getSideState(state) {
    return state.isSidebar;
  },
};

const mutations = {
  setSideState(state, sideState) {
    state.isSidebar = sideState;
  },
  toggleSideState(state) {
    console.log(state.isSidebar);
    state.isSidebar = !state.isSidebar;
  },
  setShowAddTask(state, payload) {
    state.isAddTaskModal = payload;
  },
  setShowAddCategory(state, payload) {
    state.isAddCategoryModal = payload;
  },
  setShowUpdateTag(state, payload) {
    state.isUpdateTagModal = payload
    console.log('update tag', state.isUpdateTagModal)
  },
};

const actions = {};

export const app = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
