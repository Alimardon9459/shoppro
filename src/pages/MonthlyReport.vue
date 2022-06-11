<template>
  <div class="q-pa-md">
    <q-table
      class="my-sticky-header-table "
      style="height:600px"
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="index"
      virtual-scroll
      v-model:pagination="pagination"
      :rows-per-page-options="[0]"
    >
    
    </q-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns : [
  {
    name: 'name',
    required: true,
    label: 'Tr',
    align: 'left',
    field: row => row.id,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'name',
    required: true,
    label: 'Maxsulot Nomi',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'weight', align: 'center', label: 'Vazni/o\'lchami', field: 'weight', sortable: true },
  { name: 'number',align: 'center', label: 'Soni', field: 'number', sortable: true },
  { name: 'price',align: 'center', label: 'Narxi 1kg/1ta uchun (so\'m)', field: 'price' },
  { name: 'totalcost',align: 'center', label: 'Umumiynarx (so\'m)', field: 'totalcost' },
  
  
],

  rows: [
  {
    id: '1',
    name:"olma",
    weight: 2,
    number:0,
    price: 15000,
    totalcost:30000
  },
   {
    id: '1',
    name:"olma",
    weight: 2,
    number:0,
    price: 15000,
    totalcost:30000
  },
   {
    id: '1',
    name:"olma",
    weight: 2,
    number:0,
    price: 15000,
    totalcost:30000
  },
   {
    id: '1',
    name:"olma",
    weight: 2,
    number:0,
    price: 15000,
    totalcost:30000
  },
   {
    id: '1',
    name:"olma",
    weight: 2,
    number:0,
    price: 15000,
    totalcost:30000
  },
   {
    id: '1',
    name:"olma",
    weight: 2,
    number:0,
    price: 15000,
    totalcost:30000
  },
   {
    id: '1',
    name:"olma",
    weight: 2,
    number:0,
    price: 15000,
    totalcost:30000
  },
   {
    id: '1',
    name:"olma",
    weight: 2,
    number:0,
    price: 15000,
    totalcost:30000
  },
   {
    id: '1',
    name:"olma",
    weight: 2,
    number:0,
    price: 15000,
    totalcost:30000
  },
   {
    id: '1',
    name:"olma",
    weight: 2,
    number:0,
    price: 15000,
    totalcost:30000
  },
   {
    id: '1',
    name:"olma",
    weight: 2,
    number:0,
    price: 15000,
    totalcost:30000
  },
   {
    id: '1',
    name:"olma",
    weight: 2,
    number:0,
    price: 15000,
    totalcost:30000
  },
   {
    id: '1',
    name:"olma",
    weight: 2,
    number:0,
    price: 15000,
    totalcost:30000
  },
   {
    id: '1',
    name:"olma",
    weight: 2,
    number:0,
    price: 15000,
    totalcost:30000
  },
   {
    id: '1',
    name:"olma",
    weight: 2,
    number:0,
    price: 15000,
    totalcost:30000
  },
]

    }
  },
}
</script>
<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 310px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: #ffff

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
</style>