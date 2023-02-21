<template>
    <div class="main mt-16">
        <base-inputs>
            <template #title>
                Регистрация в личный кабинет
            </template>
            <template #subtitle>
                Через почту или телефон
            </template>
            <template #inputs>
                <div class="inner__input flex items-center">
                    <input v-model="userInputs.fullNameInput" @click="hideErrors()"
                        class="inputs__fullname border rounded-xl py-4 pl-5 outline-none w-full" type="text"
                        placeholder="Имя и фамилия">
                </div>
                <div class="inner__input relative flex items-center">
                    <input v-model="userInputs.emailInput" @click="hideErrors()"
                        class="inputs__email border rounded-xl py-4 pl-5 outline-none w-full" type="email"
                        placeholder="Почта">
                    <p v-if="checkEmail()" class="login-error absolute right-4 text-red-500">не верный формат</p>
                </div>
                <div class="inner__input">
                    <input v-model="userInputs.passwordInput" @click="hideErrors()"
                        class="inputs__fullname border rounded-xl py-4 pl-5 outline-none w-full" type="password"
                        placeholder="Пароль">
                </div>
            </template>
            <template #phone>
                <div class="form__phone flex items-center">
                    <div @click="showCounties()"
                        class="form__country text-lg font-semibold py-4 px-2 border rounded-l-xl flex items-center gap-2 w-36 justify-center relative cursor-pointer">
                        <img class="form__flag" :src="require(`@/assets/img${activeCountry.flag}`)" alt="" width="25">
                        <h2 class="form__code">{{ activeCountry.countryCode }}</h2>
                        <arrow-icon />
                        <div v-show="isShowCountries"
                            class="form__inner flex bg-white border rounded-b-lg z-10 flex-col justify-center gap-2 absolute w-full top-full cursor-pointer">
                            <div @click="changeCountry(country.id)" class="form__coutries flex gap-2 p-2"
                                v-for="country of countries" :key="country.id" @mouseenter="activeCountry = country"
                                :class="{ 'bg-cyan-200': activeCountry === country }">
                                <img class="form__flag" :src="require(`@/assets/img${country.flag}`)" alt="" width="25">
                                <h2 class="form__code">{{ country.countryCode }}</h2>
                            </div>
                        </div>
                    </div>
                    <div class="phone w-full relative flex items-center">
                        <input v-model="userInputs.phoneInput" @click="hideErrors()"
                            class="form__input py-4 pl-5 border rounded-r-xl text-lg outline-none w-full" type="number"
                            placeholder="Телефон">
                        <p v-if="checkPhone()" class="login-error absolute right-4 text-red-500">не верный формат</p>
                    </div>
                </div>
                <h2 v-if="errors.registerError" class="error text-red-500 self-center">Не верные данные</h2>
                <h2 v-if="errors.errorLogin" class="error text-red-500 self-center">Такой человек уже зарегистрирован</h2>
                <h2 v-if="showSuccessReg" class="success text-green-600 self-center">Вы успешно зарегистрировались</h2>
            </template>
            <template #buttons>
                <button @click="regUserBtn()"
                    class="buttons__enter rounded-xl py-3 font-semibold bg-cyan-200">Регистрация</button>
                <router-link :to="{ name: 'auth' }"
                    class="buttons__register rounded-xl border-2 py-3 font-semibold text-center">Назад</router-link>
            </template>
        </base-inputs>
    </div>
</template>

<script>
import BaseInputs from '@/components/UI/BaseInputs.vue';
import ArrowIcon from '@/assets/img/arrow-right.svg'
import register from '@/API/register/register.js'

export default {
    components: {
        BaseInputs,
        ArrowIcon,
    },
    data() {
        return {
            userInputs: {
                passwordInput: null,
                emailInput: null,
                phoneInput: null,
                fullNameInput: null,
            },
            validInputs: {
                isValidMail: false,
                isValidPhone: false,
            },
            errors: {
                registerError: false,
                errorLogin: false,
            },
            showSuccessReg: false,
            isShowCountries: false,
            activeCountry: {
                countryCode: "+7",
                flag: "/ru.png"
            },
            countries: [
                {
                    id: 1,
                    name: "ru",
                    countryCode: "+7",
                    flag: "/ru.png"
                },
                {
                    id: 2,
                    name: "ua",
                    countryCode: "+380",
                    flag: "/ua.png"
                },
                {
                    id: 3,
                    name: "by",
                    countryCode: "+375",
                    flag: "/by.png"
                }
            ],
        }
    },
    methods: {
        hideErrors() {
            this.errors.errorLogin = false
            this.errors.registerError = false
        },
        showCounties() {
            if (this.isShowCountries === false) {
                this.isShowCountries = true
            } else {
                this.isShowCountries = false
            }
        },
        changeCountry(countryId) {
            this.activeCountry = this.countries.find(f => f.id === countryId)
        },
        checkEmail() {
            if (this.userInputs.emailInput === null || this.userInputs.emailInput.length === 0) {
                return false
            } else {
                const re = /^(?=.*?@)[a-zA-Z_-]{4,23}/ig;
                const result = re.test(this.userInputs.emailInput);
                if (!result) {
                    return true
                } else {
                    this.validInputs.isValidMail = true
                }
            }
        },
        checkPhone() {
            if (this.userInputs.phoneInput === null || this.userInputs.phoneInput.length === 0) {
                return false
            } else if (this.userInputs.phoneInput.length !== 10) {
                return true
            } else {
                this.validInputs.isValidPhone = true
            }
        },
        async regUserBtn() {
            if (this.validInputs.isValidMail === true && this.validInputs.isValidPhone === true) {
                const activePhone = this.activeCountry.countryCode + this.userInputs.phoneInput
                const result = await register.postUser(this.userInputs.emailInput, this.userInputs.passwordInput, this.userInputs.fullNameInput, activePhone)
                if (result === 400) {
                    this.errors.errorLogin = true
                } else {
                    this.showSuccessReg = true
                }
            } else {
                this.errors.registerError = true
            }
        },
    },
}
</script>

<style lang="scss" scoped></style>