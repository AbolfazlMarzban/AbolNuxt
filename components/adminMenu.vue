<template>
    <div style="height: 100%;">
        <v-card style="height: 100%;">
            <v-list>
                <v-list-item-group>
                    <v-list-item v-for="(item, i) in menu" :key="i" class="admin-menu">
                        <a style="width: 100%; height: 100%;" :href="`/admin/${item}`">{{ item }}</a>
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

<!-- <style lang="scss">

</style> -->