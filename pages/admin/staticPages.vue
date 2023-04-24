<template>
  <div>
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
          text: 'name', 
          value: 'name',
          sort: false,
          align: 'center'
        },
      ]
    }
}
}
</script>

<style></style>