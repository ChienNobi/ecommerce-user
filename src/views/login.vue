<template>
  <div>
    <main-header></main-header>
    <div class="container mx-auto">
      <div>
        <p class="text-center font-bold text-[28px] py-[30px]" style="color: #17a2b8;">
          Đăng nhập vào tài khoản của bạn
        </p>
        <p class="text-center text-sm">
          Đăng nhập để không bỏ lỡ quyền lợi tích luỹ và hoàn tiền cho bất kỳ đơn hàng nào
        </p>

        <el-form class="py-6" label-position="top" :rules="rules" :model="loginData" ref="form">
          <el-form-item label="Email" prop="email">
            <el-input placeholder="Email" v-model="loginData.email"></el-input>
          </el-form-item>


          <el-form-item label="Mật khẩu" prop="password">
            <el-input placeholder="********" type="password" v-model="loginData.password"></el-input>
          </el-form-item>
          <el-button type="primary" class="w-full" :loading="loading" @click="loginHandler">Đăng nhập ngay</el-button>

          <p class="mt-3">
            <span>Bạn chưa có tài khoản?</span>
            <router-link to="/register" class="pl-1" style="color: rgb(23, 162, 184);">Đăng ký ngay</router-link>
          </p>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import MainHeader from "@/layout/main-header.vue";
import {reactive, ref} from "vue";
import {login} from "@/api/auth.js";
import {useRouter} from "vue-router";
import {ElMessage} from 'element-plus'

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
        if (value !== loginData.password) {
          callback(new Error("Mật khẩu không khớp"));
        } else {
          callback();
        }
      }, trigger: "blur"
    }
  ]
});

const loginData = reactive({
  email: "",
  name: "",
  password: "",
  confirmPassword: "",
});

const loading = ref(false)
const form = ref(null)
const router = useRouter()
const loginHandler = async () => {
  loading.value = true
  try {
    const isValid = form.value.validate();
    if (!isValid) {
      loading.value = false
      return;
    }

    const res = await login({
      email: loginData.email,
      password: loginData.password
    });
    if (res.status === 200) {
      ElMessage.success({
        message: "Đăng nhập thành công",
        type: "success",
        duration: 5000
      });
      await router.push("/");
    }
  } catch (e) {
    loading.value = false
    ElMessage.error(e.response.data.message);
    return;
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
