<template >
    <div class="bg-grey-3">
        <q-btn to="carrier" >carrier</q-btn>
        <q-btn to="report" >report</q-btn>
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
<style lang="css">
    
</style>