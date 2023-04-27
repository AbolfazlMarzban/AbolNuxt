<template>
    <div>
        <AdminHeader :submit="true" @submit="submit" />
        <portfolio-comp :state="insert" />
    </div>
</template>

<script>
import portfolioComp from '../../../components/portfolioComp.vue'
export default {
    components: { portfolioComp },
    layout: "admin"

}
</script>

<style></style>