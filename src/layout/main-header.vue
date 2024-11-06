<template xmlns="http://www.w3.org/1999/html">
  <header class="main-header px-4 py-2">
    <section class="container mx-auto px-[8px]">
      <div class="flex justify-items-center items-center mb-2">
        <p class="font-bold text-xl">Beauty Spa</p>

        <p class="ml-auto">
          <span class="px-1">Liên hệ</span>
          <span class="px-1">Về chúng tôi</span>
        </p>
      </div>

      <div class="flex items-center py-2">
        <div class="flex gap-[28px] items-center mr-auto">
          <img src="@/assets/image/logo-s.png" alt="logo">
          <p>Skin store</p>
          <p>Happy Skin</p>
          <p>Blog làm đẹp</p>

          <div>
            <el-input placeholder="Tìm kiếm sản phẩm"></el-input>
          </div>
        </div>

        <router-link to="/login">
          <el-icon size="20">
            <User/>
          </el-icon>
        </router-link>
      </div>
    </section>
  </header>
</template>

<script setup>
</script>

<style>
.main-header {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: unset;
}
</style>
