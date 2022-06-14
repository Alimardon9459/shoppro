import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    state:{
      orders:[
        {  
          clientfullname:"Alimardon Mullojonov",
          address:"o'rta qishloq ko'chasi 22-uy",
          telnumber:"+998996399459",
          ready:"",
          product:[
            {
              productname:"olma",
              img:"https://cdn.quasar.dev/img/mountains.jpg",
              weight:"2kg", 
              amount:"2ta"
            },
            {
              productname:"olma",
              img:"https://cdn.quasar.dev/img/mountains.jpg",
              weight:"2kg", 
              amount:"2ta"
            },
          ]
        },
        {  
          clientfullname:"Alimardon Mullojonov",
          address:"o'rta qishloq ko'chasi 22-uy",
          telnumber:"+998996399459",
          ready:"",
          product:[
            {
              productname:"olma",
              img:"https://cdn.quasar.dev/img/mountains.jpg",
              weight:"2kg", 
              amount:"2ta"
            },
            {
              productname:"olma",
              img:"https://cdn.quasar.dev/img/mountains.jpg",
              weight:"2kg", 
              amount:"2ta"
            },
          ]
        },
        {  
          clientfullname:"Alimardon Mullojonov",
          address:"o'rta qishloq ko'chasi 22-uy",
          telnumber:"+998996399459",
          ready:"",
          product:[
            {
              productname:"olma",
              img:"https://cdn.quasar.dev/img/mountains.jpg",
              weight:"2kg", 
              amount:"2ta"
            },
          ]
        },
        {  
          clientfullname:"Alimardon Mullojonov",
          address:"o'rta qishloq ko'chasi 22-uy",
          telnumber:"+998996399459",
          ready:"",
          product:[
            {
              productname:"olma",
              img:"https://cdn.quasar.dev/img/mountains.jpg",
              weight:"2kg", 
              amount:"2ta"
            },
          ]
        },
        {  
          clientfullname:"Alimardon Mullojonov",
          address:"o'rta qishloq ko'chasi 22-uy",
          telnumber:"+998996399459",
          ready:"",
          product:[
            {
              productname:"olma",
              img:"https://cdn.quasar.dev/img/mountains.jpg",
              weight:"2kg", 
              amount:"2ta"
            },
          ],
          salom:"salom"
        },
        {  
          clientfullname:"Alimardon Mullojonov",
          address:"o'rta qishloq ko'chasi 22-uy",
          telnumber:"+998996399459",
          ready:"",
          product:[
            {
              productname:"olma",
              img:"https://cdn.quasar.dev/img/mountains.jpg",
              weight:"2kg", 
              amount:"2ta"
            },
          ],
          salom:"salom"
        },
        {  
          clientfullname:"Alimardon Mullojonov",
          address:"o'rta qishloq ko'chasi 22-uy",
          telnumber:"+998996399459",
          ready:"",
          product:[
            {
              productname:"olma",
              img:"https://cdn.quasar.dev/img/mountains.jpg",
              weight:"2kg", 
              amount:"2ta"
            },
          ],
        },
        
      ],
    },
    mutations:{
      PREPARATION:(state,i)=>{
        state.orders[i].ready="Preparation"

      },
      READY:(state,i)=>{
        state.orders[i].ready="Ready"

      },
      SET_OUT:(state ,i)=>{
        state.orders[i].ready="SetOut"
      },
      Delivered:(state ,i)=>{
        state.orders[i].ready="Delivered"
      },
       


    },
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
