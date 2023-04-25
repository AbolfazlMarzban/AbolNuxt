<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-btn v-if="insert" x-small rounded @click="$emit('insert')">insert</v-btn>
        <v-btn v-if="delet" x-small rounded @click="$emit('insert')">delete</v-btn>
        <v-btn v-if="submit" x-small rounded @click="$emit('insert')">submit</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["insert", "delet", "submit"]
}
</script>

<style></style>