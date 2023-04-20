<template>
    <div>
        <v-card>
            <v-list>
                <v-list-item-group>
                    <v-list-item v-for="(item, i) in menu" :key="i">
                        <a :href="`/admin/${item}`">{{ item }}</a>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                'portfolio', 'courses', 'services', 'staticPages', 'aboutYou',
            ]
        }
    }
}
</script>

<style></style>