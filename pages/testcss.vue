<template>
    <!-- Page Wrapper -->
    <div id="wrapper">
        <Sidebar v-bind:isselected ="isselected"></Sidebar>
        <Content @getThisId="getThisId"></Content>
    </div>
<!-- End of Page Wrapper -->

</template>

<script>
export default{
    data(){
        return{
            isselected:1
        } 
    },
    methods: {
        getThisId(value) {
            this.isselected = value;
        }
    }
}

</script>
