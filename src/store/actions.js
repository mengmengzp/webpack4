/** @file 异步操作 */
export default {
    updateCountAsync(store, data) {
        setTimeout(() => {
            store.commit('updateCount', data.num);
        }, 1000);
    }
};
