<template>
    <div>
        <AdminHeader :submit="true" @submit="submit" />
        <course-comp state="insert" />
    </div>
</template>

<script>
import CourseComp from '../../../components/courseComp.vue'
export default {
    components: { CourseComp },
    layout: "admin"

}
</script>

<style></style>