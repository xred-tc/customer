<template>
        <!-- Topbar -->
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

<!-- Sidebar Toggle (Topbar) -->
<button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
    <i class="fa fa-bars"></i>
</button>


<!-- 上方bar的按鈕 -->
<ul class="navbar-nav">
    <li class="nav-item dropdown no-arrow mx-1">
        <a class="nav-link dropdown-toggle"  role="button" id="1" @click="getThisId">
            廟宇管理
        </a>
    </li>

    <li class="nav-item dropdown no-arrow mx-1">
        <a class="nav-link dropdown-toggle" role="button" id="2" @click="getThisId">
            學校系統
        </a>
    </li>

     <li class="nav-item dropdown no-arrow mx-1">
        <a class="nav-link dropdown-toggle" role="button" id="3" @click="getThisId">
           帳務系統
        </a>
    </li>

   <li class="nav-item dropdown no-arrow mx-1">
        <a class="nav-link dropdown-toggle" role="button" id="4" @click="getThisId">
           納骨塔位
        </a>
    </li>

    <li class="nav-item dropdown no-arrow mx-1">
        <a class="nav-link dropdown-toggle" role="button" id="5" @click="getThisId">
           職工管理
        </a>
    </li>
</ul>

<ul class="navbar-nav ml-auto">
    <div class="topbar-divider d-none d-sm-block"></div>

<!-- Nav Item -->
<li class="nav-item dropdown no-arrow">
    <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="mr-2 d-none d-lg-inline text-gray-600 small">User</span>
        <img class="img-profile rounded-circle"
                        src="../assets/img/undraw_profile.svg">
    </a>

    <!-- Dropdown - User Information -->
     <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
    aria-labelledby="userDropdown">
    <a class="dropdown-item" href="#">
        <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
        Profile
    </a>
    <a class="dropdown-item" href="#">
        <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
        Settings
    </a>
    <a class="dropdown-item" href="#">
        <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
        Activity Log
    </a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
        <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
        Logout
    </a>
</div>
</li>
</ul>

</nav>
</template>


<script>

    export default{
        data(){
                return{
                    isselected:1
                }
        },
        methods:{
            getThisId(e){
                if(e.target.id == "1"){
                    this.isselected = 1;
                }else if(e.target.id == "2"){
                    this.isselected = 2;
                }else if(e.target.id == "3"){
                    this.isselected = 3;
                }else if(e.target.id == "4"){
                    this.isselected = 4;
                }else{
                    this.isselected = 5;
                }
                this.$emit('getThisId', this.isselected);
            }
        }
        
    }

</script>