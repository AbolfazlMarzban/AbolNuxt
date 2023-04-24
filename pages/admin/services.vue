<template>
  <div>
    <AdminHeader/>
    <v-data-table
      :headers="headers"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data(){
    return{
      headers:[
        {
          text: 'image', 
          value: 'image',
          sort: false,
          align: 'center'
        },
        {
          text: 'name', 
          value: 'name',
          sort: false,
          align: 'center'
        },
        {
          text: 'link', 
          value: 'link',
          sort: false,
          align: 'center'
        }
      ]
    }
}
}
</script>

<style></style>