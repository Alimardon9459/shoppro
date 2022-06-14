<template >
    <div class="bg-grey-3">
        <q-btn to="carrier" >carrier</q-btn>
        <q-btn to="report" >report</q-btn>
        <q-btn to="login" >login</q-btn>
        <q-btn to="yangi" >yangi</q-btn>
        <div class="w-100pr text-center fs-32px">
            Qadoqlovchi uchun
        </div>
        <div class="bacgraund">
           <div class="bacgraund-img">
                <q-img width="100%" src="https://previews.123rf.com/images/stori/stori1602/stori160200074/53461014-world-map-on-a-technological-background-glowing-lines-symbols-of-the-internet.jpg" /> 
           </div>
        </div>
        <Report/>
        <ProductForPacker/>
    </div>
</template>
<script>
import Report from 'src/components/Report.vue';
import ProductForPacker from 'src/components/ProductForPacker.vue';
export default {
    components: { Report, ProductForPacker }
}
</script>
<style scoped>
    
    .bacgraund{
        position: absolute;
        top: 0px;
        z-index: -99;
        width: 100%;
        height: 100vh;
    }
    .bacgraund-img{
        position: fixed;
        width: 100%;
        height: 100%;
    }
</style>