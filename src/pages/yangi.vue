<template>
    <div>
        <h1 class="bg-black">{{salom}}</h1>
        <button @click="bos">ozgartir</button>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed:{
        ...mapState(["salom"])
    },
    methods: {
        ...mapMutations(["ozgartir"]),
        bos(){
            this.ozgartir()
        }
    },
}
</script>
<style scoped>
    
</style>