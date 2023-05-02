<template>
  <div>
    <AdminHeader :submit="true" @submit="submit" />
    <ServiceComp :state="insert" />
  </div>
</template>

<script>
export default {
  layout: "admin"

}
</script>

<style>

</style>