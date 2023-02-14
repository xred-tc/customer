<template>
            <!-- Content Wrapper -->
            <div id="content-wrapper" class="d-flex flex-column">

<!-- Main Content -->
<div id="content">

    <Topbar @getThisId="getThisId"></Topbar>

    <!-- Begin Page Content -->
    <div class="container-fluid">
        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">我是內容</h1>
        </div>
    </div>
    <!-- /.container-fluid -->
</div>
<!-- End of Main Content -->

<!-- Footer -->
<footer class="sticky-footer bg-white">
    <div class="container my-auto">
        <div class="copyright text-center my-auto">
            <span>Copyright &copy; Xred 2023</span>
        </div>
    </div>
</footer>
<!-- End of Footer -->

</div>
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
           // console.log(value);
            this.isselected = value;
            this.$emit('getThisId', this.isselected);
        }
    }
}

</script>
