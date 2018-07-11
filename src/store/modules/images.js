import api from '../../api/imgur';
import { router } from '../../main';

const state = {
  images: [],
  favorites: []
};

const getters = {
  allImages: state => state.images,
  allFavorites: state => state.favorites
};

const actions = {
  async fetchImages({rootState, commit}) {
    const {token} = rootState.auth;
    const response = await api.fetchImages(token);
    commit('setImages', response.data.data);
  },
  async uploadImages({rootState}, images) {
    // Get the access token
    const {token} = rootState.auth;
    // Call API module to do the upload
    await api.uploadImages(images, token);
    // Redirect user to ImageList component
    router.push('/');
  },
  async fetchFavorites({rootState, commit}) {
    const {token} = rootState.auth;
    const response = await api.fetchFavorites(token);
    commit('setFavorites', response.data.data);
  }
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
  setFavorites: (state, images) => {
    state.favorites = images;
  }
};

export default {
  state, 
  getters,
  actions,
  mutations
};