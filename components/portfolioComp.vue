<template>
    <div>
        <v-row>
            <v-col cols="3">
                <uploader/>
            </v-col>
            <v-col cols="3"></v-col>
            <v-col cols="3"></v-col>
        </v-row>
    </div>
</template>

<script>
import uploader from './uploader.vue'
export default {
  components: { uploader },
    props: ["state"]
}
</script>

<style></style>