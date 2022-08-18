<template>
    <div id="app">
        <VueHiPrint v-model="options" />
    </div>
</template>
<script>
import VueHiPrint from '../packages';
export default {
    components: { VueHiPrint },
    data () {
        return {
            options: {

            }
        }
    },
    methods: {

    }
}
</script>
<style lang="less">
* {
    margin: 0;
    padding: 0;
}
</style>
