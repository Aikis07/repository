<template>
    <div class="socials flex items-center gap-4 mt-5">
        <div class="socials__wrapper w-14 h-14 border rounded-xl flex justify-center items-center cursor-pointer">
            <tg-icon />
        </div>
        <div class="socials__wrapper w-14 h-14 border rounded-xl flex justify-center items-center cursor-pointer">
            <vk-icon />
        </div>
        <div class="socials__wrapper w-14 h-14 border rounded-xl flex justify-center items-center cursor-pointer">
            <mail-icon />
        </div>
    </div>
</template>

<script>
import TgIcon from '@/assets/img/tg.svg';
import VkIcon from '@/assets/img/vk.svg';
import MailIcon from '@/assets/img/mail.svg';

    export default {
        components: {
            TgIcon,
            VkIcon,
            MailIcon,
        },
    }
</script>

<style lang="scss" scoped>

</style>