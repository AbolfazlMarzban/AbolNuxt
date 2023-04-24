<template>
  <div>
    <v-row>
        <v-col cols="12">
            <v-btn x-small rounded @click="$emit('insert')">insert</v-btn>
            <v-btn  x-small rounded @click="$emit('insert')">delete</v-btn>
        </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>