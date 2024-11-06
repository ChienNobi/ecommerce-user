<template>
  <div>
    <main-header></main-header>
    <div class="container mx-auto">
      <Swiper
          :slides-per-view="1"
          :space-between="50"
          class="border-radius-10 mt-8 mb-8"
          style="border-radius: 10px"
          navigation
          :modules="modules"
          :pagination="{ clickable: true }"
      >
        <SwiperSlide>
          <img
              src="https://cdn.happyskin.vn/media/42/new-launching-4-device-emmie-by-happyskin.jpg" alt="swiper"/>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://cdn.happyskin.vn/media/42/2239-mua-cang-nhieu-qua-cang-to.jpg" alt="swiper"/>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://cdn.happyskin.vn/media/53/sieu-sale-bung-no-thang-11.jpg" alt="swiper"/>
        </SwiperSlide>
      </Swiper>

      <div>
        <p class="font-bold text-[24px] mb-4" style="color: #17a2b8;">Bộ sưu tập skincare</p>
        <el-row :gutter="12">
          <el-col :span="6" v-for="i in 4">
            <div class="px-2 items pb-4">
              <img alt="img"
                   class="w-full"
                   src="https://cdn.happyskin.vn/media/42/6184-gel-rua-mat-diu-nhe-cap-am-sau-emmie-soothing-hydrating-derma-cleansing-180ml.jpg"/>

              <p class="font-bold py-4">Gel Rửa Mặt Dịu Nhẹ Cấp Ẩm</p>
              <p style="color: #17a2b8;" class="font-bold text-6 mb-2">249.000 ₫</p>

              <p class="text-[#444] mb-4">Giúp loại bỏ bụi bẩn, làm sạch sâu và se khít lỗ chân lông.</p>

              <div class="text-center">
                <el-button type="primary" plain :icon="Plus">Mua ngay</el-button>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
</style>
<script setup>
import MainHeader from "@/layout/main-header.vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation, Pagination, Scrollbar} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Plus} from "@element-plus/icons-vue";


const modules = [Navigation, Pagination, Scrollbar];
</script>

<style scoped>
.items {
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  border-radius: 4px;
}
</style>
