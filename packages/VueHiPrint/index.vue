<template>
    <div>
        hiprint
    </div>
</template>
<script>
export default {
    name: 'VueHiPrint',
    model: {
        value: 'options',
        event: 'change'
    },
    props: {
        options: {
            required: false,
            type: [Object],
            default: () => { }
        },
    },
    data () {
        return {

        };
    },
    mounted () {
        this.init();
        //监听窗口变化
        window.addEventListener('resize', () => {
            if (this.resizeTimer) clearTimeout(this.resizeTimer);
            this.resizeTimer = setTimeout(() => {
                this.init()
            }, 100);
        });
    },

    watch: {
        options: {
            handler () {
                this.init();
            },
            deep: true
        }
    },

    methods: {
        init () {
            const options = this.options;

        }
    }
};
</script>
