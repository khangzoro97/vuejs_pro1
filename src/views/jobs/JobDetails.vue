<template>
    <h1>Job Details Page</h1>
    <p>The job id is <strong>{{ $route.params.id }} </strong></p>
</template>
<script>
export default {
    props: ['id'],
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // }
}
</script>
<style>
strong {
    color: red;
}
</style>