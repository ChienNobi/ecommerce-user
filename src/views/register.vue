<template>
  <div>
    <main-header></main-header>
    <div class="container mx-auto">
      <div>
        <p class="text-center font-bold text-[28px] py-[30px]" style="color: #17a2b8;">Tạo tài khoản mới</p>
        <p class="text-center text-sm">
          Đăng ký để không bỏ lỡ quyền lợi tích luỹ và hoàn tiền cho bất kỳ đơn hàng nào
        </p>

        <el-form class="py-6" label-position="top" :rules="rules" :model="registerData" ref="form">
          <el-form-item label="Email" prop="email">
            <el-input placeholder="Email" v-model="registerData.email"></el-input>
          </el-form-item>

          <el-form-item label="Họ và tên" prop="name">
            <el-input placeholder="Họ và tên" v-model="registerData.name"></el-input>
          </el-form-item>

          <el-form-item label="Mật khẩu" prop="password">
            <el-input placeholder="********" type="password" v-model="registerData.password"></el-input>
          </el-form-item>

          <el-form-item label="Nhập lại mật khẩu" prop="confirmPassword">
            <el-input placeholder="********" type="password" v-model="registerData.confirmPassword"></el-input>
          </el-form-item>
          <el-button type="primary" class="w-full" :loading="loading" @click="registerHandler">Đăng ký ngay</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import MainHeader from "@/layout/main-header.vue";
import {reactive, ref} from "vue";
import {register} from "@/api/auth.js";

import {ElMessage} from 'element-plus'
import {useRouter} from "vue-router";

const rules = reactive({
  email: [
    {required: true, message: "Vui lòng nhập vào email", trigger: "blur"},
    {type: "email", message: "Email không đúng định dạng", trigger: 'blur'}
  ],
  name: [
    {required: true, message: "Vui lòng nhập vào họ và tên", trigger: "blur"}
  ],
  password: [
    {required: true, message: "Mật khẩu không được để trống", trigger: "blur"},
    {min: 8, message: "Mật khẩu phải có ít nhất 8 kí tự", trigger: "blur"}
  ],
  confirmPassword: [
    {required: true, message: "Vui lòng nhập lại mật khẩu", trigger: "blur"},
    {
      validator: (_, value, callback) => {
        if (value !== registerData.password) {
          callback(new Error("Mật khẩu không khớp"));
        } else {
          callback();
        }
      }, trigger: "blur"
    }
  ]
});

const registerData = reactive({
  email: "",
  name: "",
  password: "",
  confirmPassword: "",
});

const router = useRouter()

const loading = ref(false)
const form = ref(null)

const registerHandler = async () => {
  loading.value = true
  try {
    const isValid = form.value.validate();
    if (!isValid) {
      loading.value = false
      return;
    }

    const res = await register({
      email: registerData.email,
      name: registerData.name,
      password: registerData.password
    });
    if (res.status === 201) {
      ElMessage.success({
        message: "Đăng ký thành công",
        type: "success",
        duration: 5000
      });
      await router.push("/login");
    }
  } catch (e) {
    loading.value = false
    ElMessage.error(e.response.data.message);
  } finally {
    loading.value = false
  }
};

</script>

<style lang="css" scoped>
.container {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 16px;
  margin-top: 100px;
  padding: 20px 40px;
  max-width: 600px;
}
</style>
