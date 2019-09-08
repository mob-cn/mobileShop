<template>
    <div class='wrapper'>
        <label class='label'>{{label}}</label>
        <input 
            type="text" 
            class='inputInfo' 
            @input='setInputValue($event)'
            :value='inputValues' 
        />
        <slot name='right'></slot>
    </div>
    
</template>
<script>
export default {
    props: {
        inputValue: {
            type: String,
            default: ''
        },
        label: String
    },
    data() {
        return {
            inputValues: this.inputValue
        }
    },
    methods: {
        setInputValue($event) {
            this.$emit('setInputValue', $event.target.value)
        }
    }
}
</script>
<style lang="less" scoped>
.wrapper {
    display: flex;
    justify-content: space-between;
    height: 50px;
    border-bottom: 1px solid #eee;
    align-items: center;
    .label {
        width: 80px;
    }
    .inputInfo {
        flex: 1;
    }
}
</style>
