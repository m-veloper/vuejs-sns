export const state = () => ({
  me: null,
  followerList: [],
  followingList: [],
});

/**
 * 동기적 작업 영역
 * @type {{setMe(*, *): void, changeNickname(*, *): void}}
 */
export const mutations = {
  setMe(state, payload) {
    state.me = payload;
  },
  changeNickname(state, payload) {
    state.me.nickname = payload.nickname;
  },
};

/**
 * 비동기적 작업 영역
 * @type {{logIn({commit: *}, *=): void, signUp({commit: *, state: *}, *=): void, logOut({commit: *}, *): void, changeNickname({commit: *}, *=): void}}
 */
export const actions = {
  signUp({ commit, state }, payload) {
    // 서버에 회원가입 요청을 보내는 부분
    commit('setMe', payload);
  },
  logIn({ commit }, payload) {
    commit('setMe', payload);
  },
  logOut({ commit }, payload) {
    commit('setMe', null);
  },
  changeNickname({ commit }, payload) {
    commit('changeNickname', payload);
  },
};