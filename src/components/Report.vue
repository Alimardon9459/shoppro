<template >
    <div class= " content-report w-100pr p-50px row justify-center   ">
        <div class="report w-100pr  bg-white row justify-between br-20px" >
            <div class="report-text w-60pr p-30px  ">
                <div class="w-100pr text-center fs-22px ">
                    Bugungi xisobot
                </div>
                <div class="w-100pr  fs-18px mb-20px ">
                    <div class=" mt-35px row justify-between">
                        <div class="w-60pr row justify-between ">
                            <span >
                            Buyurtmalar soni:
                            </span>
                            <span >
                                18ta
                            </span>
                        </div>
                        <span class="">
                            9924000so'm
                        </span>
                    </div>
                    <q-separator  size="2px" />
                    <div class=" mt-35px row justify-between">
                       <div class="w-60pr row justify-between ">
                            <span >
                            Yetkazilganlari:
                            </span>
                            <span >
                                18ta
                            </span>
                        </div>
                        <span>
                            42425som
                        </span>
                    </div>
                    <q-separator  size="2px" />
                    <div class=" mt-35px row justify-between">
                        <div class="w-60pr row justify-between ">
                            <span >
                            Jonatilayotganlar soni:
                            </span>
                            <span >
                                18ta
                            </span>
                        </div>
                        <span >
                            42425som
                        </span>
                    </div>
                    <q-separator  size="2px" />
                    <div class=" mt-35px  row justify-between">
                        <div class="w-60pr row justify-between ">
                            <span >
                            Rad etilganlari:
                            </span>
                            <span >
                                18ta
                            </span>
                        </div>
                        <span >
                            42425som
                        </span>
                    </div>  
                    <q-separator  size="2px" />
                </div>
            </div>
            <div class="content-carta w-40pr p-20px ">
               <q-img height="100%" src="https://cdn.quasar.dev/img/mountains.jpg"></q-img>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .report{ 
        box-shadow: 2px 2px 10px 1px grey; 
    }
    @media screen and (min-width:1000px) {
        .report{
            width: 1000px;
        } 
    }
    @media screen and (max-width:800px) {
        .report{
            justify-content: center;
            padding-bottom: 20px;
        }
        .report-text{
            width: 90%;
        }
        
        .content-carta{
            width: 90%;
        }
    }
     @media screen and (max-width:590px) {
        .fs-22px{
            font-size: 18px;
        }
        .fs-18px{
            font-size: 14px;
        }
        .p-30px{
            padding: 15px;
        }
        .p-20px{
            padding: 10px;
        }
        .p-50px{
            padding: 25px;
        }
    }
    @media screen and (max-width:420px) {
        .fs-22px{
            font-size: 16px;
        }
        .fs-18px{
            font-size: 13px;
        }
        .p-30px{
            padding: 10px;
        }
        .p-20px{
            padding: 8px;
        }
        .p-50px{
            padding: 20px;
        }
    }

</style>