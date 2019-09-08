export default {
    namespaced: true,
    state: {
        myForm: [],
        flag: false,
        loadingComplete: false
    },
    mutations: {
        deleteMyFormItem(state, id) {
            let idx = state.myForm[0].findIndex(item => item.id === id);
            state.myForm[0].splice(idx, 1);
            // 强制改变整个store的值
            // this.store.replaceState(state.myForm.splice(idx, 1))
        },
        setOriginalMyForm(state, data) {
            if (state.myForm.length === 0) {
                state.myForm.push(data);
                setTimeout(() => {
                  state.loadingComplete = true;
                }, 500)
            }
        },
        changeFlag(state, data) {
            state.flag = data;
        },
        changeFormStatus(state, data) {
            let idx = state.myForm[0].findIndex(item => item.id === data.id);
            let arr = state.myForm[0][idx][data.type] = data.msg;
            // console.log(arr)
            state.myForm = arr;
            // console.log(state.myForm)
        }
    },
    actions: {
        
    }
}