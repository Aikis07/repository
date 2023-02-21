<template>
    <div class="wrapper h-screen">
        <div class="inner bg-white h-screen px-36">
            <personal-header v-if="hasUser" class="auth">
                <template #menu>
                    <div class="menu flex gap-16">
                        <h2 class="menu__item cursor-pointer">Подписки</h2>
                        <h2 class="menu__item cursor-pointer">Наша команда</h2>
                        <h2 class="menu__item cursor-pointer">Бесплатные курсы</h2>
                    </div>
                </template>
                <template #menuActions>
                    <div class="inner flex items-center gap-6">
                        <div class="inner__icon cursor-pointer">
                            <notif-icon />
                        </div>
                        <div class="inner__user w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                            <h2 class="inner__name opacity-50">{{firstLetter}}</h2>
                        </div>
                    </div>
                </template>
            </personal-header>
            <personal-header v-else class="auth">
                <template #menu>
                    <div class="menu flex gap-16 items-center">
                        <h2 class="menu__item cursor-pointer">О нас</h2>
                        <h2 class="menu__item cursor-pointer">О нас еще</h2>
                        <h2 class="menu__item cursor-pointer">Про нас</h2>
                    </div>
                    <button @click="$router.push({ name: 'auth' })" class="authBtn text-white bg-black py-2 px-10">Авторизация</button>
                </template>
            </personal-header>
            <personal-info v-if="hasUser" />
        </div>
    </div>
</template>

<script>
import PersonalHeader from '@/components/PersonalPage/PersonalHeader.vue'
import PersonalInfo from '@/components/PersonalPage/PersonalInfo.vue'
import NotifIcon from '@/assets/img/notif.svg'

export default {
    components: {
        PersonalHeader,
        PersonalInfo,
        NotifIcon,
    },
    data() {
        return {
            hasUser: false,
            firstLetter: null,
        }
    },
    mounted() {
        if (this.$store.state.accessToken !== null) {
            this.firstLetter = this.$store.state.activeUser.fullName[0]
            this.hasUser = true
        }
    },
}
</script>

<style lang="scss" scoped></style>