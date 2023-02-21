<template>
    <div class="main mt-16">
        <base-inputs>
            <template #title>
                Авторизация в личный кабинет
            </template>
            <template #subtitle>
                По данным аккаунта
            </template>
            <template #inputs>
                <div class="inner__input relative flex items-center">
                    <input v-model="emailInput" @click="errorEnter = false"
                        class="inputs__email border rounded-xl py-4 pl-5 outline-none w-full" type="email"
                        placeholder="Ваш логин">
                    <p v-if="checkEmail()" class="login-error absolute right-4 text-red-500">не верный формат</p>
                </div>
                <div class="inner__input">
                    <input v-model="passwordInput" @click="errorEnter = false"
                        class="inputs__password border rounded-xl py-4 pl-5 outline-none w-full" type="password"
                        placeholder="Пароль">
                </div>
            </template>
            <template #remember>
                <div class="inputs__inner flex justify-between mt-5">
                    <div class="inputs__remember flex items-center">
                        <input class="inputs__checker h-6 w-6 opacity-40" type="checkbox">
                        <p class="inputs__text ml-3">Запомнить меня</p>
                    </div>
                    <a class="inputs__link border-b" href="#">Восстановление пароля</a>
                </div>
                <h2 v-if="errorEnter" class="error text-red-500 self-center">Не верные логин или пароль</h2>
            </template>
            <template #buttons>
                <button @click="validUser()" class="buttons__enter rounded-xl py-3 font-semibold bg-cyan-200">Войти</button>
                <router-link :to="{ name: 'register' }"
                    class="buttons__register rounded-xl border-2 py-3 font-semibold text-center">Регистрация
                    аккаунта</router-link>
            </template>
        </base-inputs>
    </div>
</template>

<script>
import BaseInputs from '@/components/UI/BaseInputs.vue';

export default {

    components: {
        BaseInputs,
    },
    data() {
        return {
            emailInput: null,
            passwordInput: null,
            errorEnter: false
        }
    },
    methods: {
        checkEmail() {
            if (this.emailInput === null || this.emailInput.length === 0) {
                return false
            } else {
                const re = /^(?=.*?@)[0-9a-zA-Z_-]{4,23}/ig;
                const result = re.test(this.emailInput);
                if (!result) {
                    return true
                }
            }
        },
        async validUser() {
            if (this.emailInput !== null && this.passwordInput !== null) {
                const result = await this.$store.dispatch('login', {
                    mail: this.emailInput,
                    password: this.passwordInput,
                })
                if (result === false) {
                    this.errorEnter = true
                } else {
                    this.$router.push({ name: 'personal' })
                }
            }
        },
    }
}
</script>

<style lang="scss" scoped></style>