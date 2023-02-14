<template>

    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="">
                <div class="sidebar-brand-icon">
                    <i class="fas fa-yin-yang"></i>
                </div>
                <div class="sidebar-brand-text mx-3">白蓮寺</div>
            </a>
            <!-- Divider --> 
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->
            <li class="nav-item active">
                <a class="nav-link" href="">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>廟宇管理系統</span></a>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider">
            <div v-if="(isselected=='1')">
            <!-- Heading -->
            <div class="sidebar-heading">
                <i class="fas fa-user-edit"></i>
                廟宇管理
            </div>

            <!-- Nav Item - Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#work"
                    aria-expanded="true" aria-controls="work">
                    <i class="fas fa-feather-alt"></i>
                    <span>建檔作業</span>
                </a>
                <div id="work" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <a class="collapse-item" href="">立牌</a>
                        <a class="collapse-item" href="">點燈</a>
                        <a class="collapse-item" href="">太歲</a>
                        <a class="collapse-item" href="">油箱</a>
                    </div>
                </div>
            </li>

            <!-- Nav Item - Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#">
                    <i class="fas fa-search"></i>
                    <span>查詢作業</span>
                </a>
            </li>
            <!-- Nav Item - Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#manage"
                    aria-expanded="true" aria-controls="manage">
                    <i class="fas fa-tasks"></i>
                    <span>信徒管理</span>
                </a>
                <div id="manage" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <a class="collapse-item" href="">新增</a>
                        <a class="collapse-item" href="">查詢/匯出</a>
                    </div>
                </div>
            </li>
            
            <!-- Divider -->
            <hr class="sidebar-divider">
        </div>
            <div v-if="(isselected=='2')">
            <!-- Heading -->
            <div class="sidebar-heading">
                <i class="fas fa-school"></i>
                學校系統
            </div>

            <!-- Nav Item - Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#">
                    <i class="fas fa-keyboard"></i>
                    <span>上課登記作業</span>
                </a>
            </li>

            <!-- Nav Item - Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#">
                    <i class="fas fa-user-edit"></i>
                    <span>講師登記</span>
                </a>
            </li>

            <!-- Nav Item - Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#">
                    <i class="fas fa-search-plus"></i>
                    <span>查詢</span>
                </a>
            </li>
            
            <!-- Divider -->
            <hr class="sidebar-divider">
        </div>
            <div v-if="(isselected=='4')">
            <!-- Heading -->
            <div class="sidebar-heading">
                <i class="fas fa-skull"></i>
                納骨塔管理
            </div>

            <!-- Nav Item  -->
            <li class="nav-item">
                <a class="nav-link" href="">
                    <i class="fas fa-plus-square"></i>
                    <span>新增</span></a>
            </li>

            <!-- Nav Item  -->
            <li class="nav-item">
                <a class="nav-link" href="">
                    <i class="fas fa-search-plus"></i>
                    <span>查詢</span></a>
            </li>
            
            <!-- Divider -->
            <hr class="sidebar-divider">
        </div>
        <div v-if="(isselected=='5')">
            <!-- Heading -->
            <div class="sidebar-heading">
                <i class="fas fa-briefcase"></i>
                職工管理
            </div>

            <!-- Nav Item  -->
            <li class="nav-item">
                <a class="nav-link" href="">
                    <i class="fas fa-plus-square"></i>
                    <span>新增</span></a>
            </li>
            
            <!-- Nav Item  -->
            <li class="nav-item">
                <a class="nav-link" href="">
                    <i class="fas fa-search-plus"></i>
                    <span>查詢</span></a>
            </li>
            <!-- Divider -->
            <hr class="sidebar-divider">
        </div>
            <div v-if="(isselected=='3')">
            <!-- Heading -->
            <div class="sidebar-heading">
                <i class="fas fa-money-bill"></i>
                帳務查詢
            </div>

            <!-- Nav Item  -->
            <li class="nav-item">
                <a class="nav-link" href="">
                    <i class="fas fa-plus-square"></i>
                    <span>新增</span></a>
            </li>
            
            <!-- Nav Item  -->
            <li class="nav-item">
                <a class="nav-link" href="">
                    <i class="fas fa-search-plus"></i>
                    <span>查詢</span></a>
            </li>
    
            <!-- Divider -->
            <hr class="sidebar-divider d-none d-md-block">
            </div>
            <!-- Sidebar Toggler (Sidebar) -->
            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
            
    </ul>
    <slot name="sidebar"/>
</template>

<script>
export default{
    props: {
        isselected : {
            type: Number
        }
    }   
}

</script>