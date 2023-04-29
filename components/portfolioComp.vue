<template>
    <div>
        <v-row>
            <v-col cols="3">
                <uploader />
            </v-col>
            <v-col cols="3">
                <v-text-field label="project Name" v-model="name"></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field label="project Type" v-model="type"></v-text-field>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import uploader from './uploader.vue'
export default {
    components: { uploader },
    props: ["state"],
    data() {
        return {
            name: "",
            type: ""
        }
    }
}
</script>

<style></style>