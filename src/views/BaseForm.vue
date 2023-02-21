<template>
    <div class="wrapper bg-gray-100 flex h-screen">
        <div class="inner max-w-3xl bg-white h-screen px-36">
            <base-header />
            <router-view />
        </div>
    </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue';

export default {
    components: {
        BaseHeader,
    },
}
</script>

<style lang="scss" scoped></style>