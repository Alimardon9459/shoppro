<template >
    <div class="w-100pr p-50px ">
        <div class="w-100pr text-center fs-22px">
            Buyurtmalar
        </div>
        <div class="w-100pr row justify-between ">
            <q-card :class="color" class="my-card w-300px p-2pr mt-50px ">
                <img src="https://cdn.quasar.dev/img/mountains.jpg">

                <q-card-section>
                
                    <div class="q-mt-sm">
                        <div class="fs-18px ">Mahsulot: Olma</div>
                        <q-separator  size="1px" class="bg-dark" />
                    </div>
                    <div class="q-mt-sm">
                        <div class="fs-18px ">Soni/Vazni: 15ta</div>
                        <q-separator  size="1px" class="bg-dark" />
                    </div>
                    
                    <q-expansion-item
                        expand-separator
                        icon="perm_identity"
                        label="Qabul Qiluvchi"
                        caption="Mullajonov Alimardon"
                        class="text-grey-7 bg-grey-2 q-mt-md"
                    >
                        <q-card>
                        <q-card-section>
                            <div class="w-100pr">
                                <div class="fs-16px">Oluvchi: Muhammadrasul Abdukarimov</div>
                                <q-separator  size="1px" class="bg-grey-7" />
                            </div>
                            <div class="w-100pr">
                                <div class="fs-16px">Tel raqami: +998991234567</div>
                                <q-separator  size="1px" class="bg-grey-7" />
                            </div>
                            <div class="w-100pr">
                                <div class="fs-16px">Manzili: o'rta qishloq ko'chasi 22-uy </div>
                                <q-separator  size="1px" class="bg-grey-7" />
                            </div>
                        </q-card-section>
                        </q-card>
                    </q-expansion-item>
                </q-card-section>
                
                <q-card-section class="q-pt-none ">
                    <div class="w-100pr row justify-center">
                        <q-btn @click="Preparation" class="bg-yellow">Tayyorlash</q-btn>
                    </div>
                    <div class="mt-20px w-100pr row justify-center">
                        <q-btn class="bg-green-6">Tayyor</q-btn>
                    </div>
                    
                </q-card-section>
            </q-card>
            <q-card class="my-card w-300px p-2pr mt-50px ">
                <img src="https://cdn.quasar.dev/img/mountains.jpg">

                <q-card-section>
                
                    <div class="q-mt-sm">
                        <div class="fs-18px ">Mahsulot: Olma</div>
                        <q-separator  size="1px" class="bg-dark" />
                    </div>
                    <div class="q-mt-sm">
                        <div class="fs-18px ">Soni/Vazni: 15ta</div>
                        <q-separator  size="1px" class="bg-dark" />
                    </div>
                    
                    <q-expansion-item
                        expand-separator
                        icon="perm_identity"
                        label="Qabul Qiluvchi"
                        class="text-grey-7 bg-grey-2 q-mt-md"
                    >
                        <q-card>
                        <q-card-section>
                            <div class="w-100pr">
                                <div class="fs-16px">Oluvchi: Muhammadrasul Abdukarimov</div>
                                <q-separator  size="1px" class="bg-grey-7" />
                            </div>
                            <div class="w-100pr">
                                <div class="fs-16px">Tel raqami: +998991234567</div>
                                <q-separator  size="1px" class="bg-grey-7" />
                            </div>
                            <div class="w-100pr">
                                <div class="fs-16px">Manzili: o'rta qishloq ko'chasi 22-uy </div>
                                <q-separator  size="1px" class="bg-grey-7" />
                            </div>
                        </q-card-section>
                        </q-card>
                    </q-expansion-item>
                </q-card-section>
                
                <q-card-section class="q-pt-none ">
                    <div class="w-100pr row justify-center">
                        <q-btn class="bg-yellow">Tayyorlash</q-btn>
                    </div>
                    <div class="mt-20px w-100pr row justify-center">
                        <q-btn class="bg-green-6">Tayyor</q-btn>
                    </div>
                    
                </q-card-section>
            </q-card>
            <q-card class="my-card w-300px p-2pr mt-50px ">
                <img src="https://cdn.quasar.dev/img/mountains.jpg">

                <q-card-section>
                
                    <div class="q-mt-sm">
                        <div class="fs-18px ">Mahsulot: Olma</div>
                        <q-separator  size="1px" class="bg-dark" />
                    </div>
                    <div class="q-mt-sm">
                        <div class="fs-18px ">Soni/Vazni: 15ta</div>
                        <q-separator  size="1px" class="bg-dark" />
                    </div>
                    
                    <q-expansion-item
                        expand-separator
                        icon="perm_identity"
                        label="Qabul Qiluvchi"
                        class="text-grey-7 bg-grey-2 q-mt-md"
                    >
                        <q-card>
                        <q-card-section>
                            <div class="w-100pr">
                                <div class="fs-16px">Oluvchi: Muhammadrasul Abdukarimov</div>
                                <q-separator  size="1px" class="bg-grey-7" />
                            </div>
                            <div class="w-100pr">
                                <div class="fs-16px">Tel raqami: +998991234567</div>
                                <q-separator  size="1px" class="bg-grey-7" />
                            </div>
                            <div class="w-100pr">
                                <div class="fs-16px">Manzili: o'rta qishloq ko'chasi 22-uy </div>
                                <q-separator  size="1px" class="bg-grey-7" />
                            </div>
                        </q-card-section>
                        </q-card>
                    </q-expansion-item>
                </q-card-section>
                
                <q-card-section class="q-pt-none ">
                    <div class="w-100pr row justify-center">
                        <q-btn class="bg-yellow">Tayyorlash</q-btn>
                    </div>
                    <div class="mt-20px w-100pr row justify-center">
                        <q-btn class="bg-green-6">Tayyor</q-btn>
                    </div>
                    
                </q-card-section>
            </q-card>
            <q-card class="my-card w-300px p-2pr mt-50px ">
                <img src="https://cdn.quasar.dev/img/mountains.jpg">

                <q-card-section>
                
                    <div class="q-mt-sm">
                        <div class="fs-18px ">Mahsulot: Olma</div>
                        <q-separator  size="1px" class="bg-dark" />
                    </div>
                    <div class="q-mt-sm">
                        <div class="fs-18px ">Soni/Vazni: 15ta</div>
                        <q-separator  size="1px" class="bg-dark" />
                    </div>
                    
                    <q-expansion-item
                        expand-separator
                        icon="perm_identity"
                        label="Qabul Qiluvchi"
                        class="text-grey-7 bg-grey-2 q-mt-md"
                    >
                        <q-card>
                        <q-card-section>
                            <div class="w-100pr">
                                <div class="fs-16px">Oluvchi: Muhammadrasul Abdukarimov</div>
                                <q-separator  size="1px" class="bg-grey-7" />
                            </div>
                            <div class="w-100pr">
                                <div class="fs-16px">Tel raqami: +998991234567</div>
                                <q-separator  size="1px" class="bg-grey-7" />
                            </div>
                            <div class="w-100pr">
                                <div class="fs-16px">Manzili: o'rta qishloq ko'chasi 22-uy </div>
                                <q-separator  size="1px" class="bg-grey-7" />
                            </div>
                        </q-card-section>
                        </q-card>
                    </q-expansion-item>
                </q-card-section>
                
                <q-card-section class="q-pt-none ">
                    <div class="w-100pr row justify-center">
                        <q-btn class="bg-yellow">Tayyorlash</q-btn>
                    </div>
                    <div class="mt-20px w-100pr row justify-center">
                        <q-btn class="bg-green-6">Tayyor</q-btn>
                    </div>
                    
                </q-card-section>
            </q-card>

            <!-- <q-card class="my-card  row justify-between w-600px wrap  ">
                <div class="row justify-between w-600px wrap h-450px">
                    <div class="w-300px p-3pr h-140px">
                        <q-img src="https://cdn.quasar.dev/img/mountains.jpg"/>
                        <q-card-section>
                            <div>
                                <div class="fs-18px ">Mahsulot: Olma</div>
                                <q-separator  size="1px" class="bg-dark" />
                            </div>
                            <div>
                                <div class="fs-18px ">Soni: 15ta</div>
                                <q-separator  size="1px" class="bg-dark" />
                            </div>
                            
                        </q-card-section>
                    </div>
                    <div class="w-300px p-3pr h-140px">
                        <q-img src="https://cdn.quasar.dev/img/mountains.jpg"/>
                        <q-card-section>
                            <div>
                                <div class="fs-18px ">Mahsulot: Olma</div>
                                <q-separator  size="1px" class="bg-dark" />
                            </div>
                            <div>
                                <div class="fs-18px ">Soni: 15ta</div>
                                <q-separator  size="1px" class="bg-dark" />
                            </div>
                            
                        </q-card-section>
                    </div>

                    <div class="w-100pr p-3pr h-100px">
                        <q-expansion-item
                            expand-separator
                            icon="perm_identity"
                            label="Qabul Qiluvchi"
                            class="text-grey-7 bg-grey-2   q-mt-md w-100pr"

                        >
                            <q-card>
                            <q-card-section>
                                <div class="w-100pr">
                                    <div class="fs-16px">Oluvchi: Muhammadrasul Abdukarimov</div>
                                    <q-separator  size="1px" class="bg-grey-7" />
                                </div>
                                <div class="w-100pr">
                                    <div class="fs-16px">Tel raqami: +998991234567</div>
                                    <q-separator  size="1px" class="bg-grey-7" />
                                </div>
                                <div class="w-100pr">
                                    <div class="fs-16px">Manzili: o'rta qishloq ko'chasi 22-uy </div>
                                    <q-separator  size="1px" class="bg-grey-7" />
                                </div>
                            </q-card-section>
                            </q-card>
                        </q-expansion-item>
                    </div>
                   
                </div>
                <div style="position:relative;" class="w-100pr mb-20px h-40px" >
                    <div style="position:absolute; top: -35px;" class="w-100pr mb-20px h-40px row justify-around">
                        <q-btn class="bg-yellow">Tayyorlash</q-btn>
                        <q-btn class="bg-green-6">Tayyor</q-btn>
                    </div>
                </div>
                
            </q-card> -->
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            color:''
        }
    },
    methods:{
        Preparation(){
            this.color="bg-purple-14"
        }
    }
}
</script>
<style scoped>
    .q-item{
        padding: 0px;
    }
    .q-card__section--vert {
    padding: 8px;
    } 
    
</style>