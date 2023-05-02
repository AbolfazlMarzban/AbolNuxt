<template>
    <div>
        <v-row class="pa-5">
            <v-col cols="6">
                <uploader />
            </v-col>
            <v-col cols="6" class="d-flex flex-column">
                <v-text-field label="service Name" v-model="name"></v-text-field>
                <v-text-field label="service link" v-model="link"></v-text-field>
                <v-textarea label="service description" v-model="description"></v-textarea>
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
            type: "",
            link: "",
            description: ""
        }
    }
}
</script>

<style></style>