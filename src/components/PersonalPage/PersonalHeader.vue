<template>
    <div class="header flex items-center justify-between">
        <base-header />
        <div class="menu flex gap-16">
            <div class="menu__courses flex items-center cursor-pointer">
                <h2 class="menu__item mr-2">Все курсы</h2>
                <arrow-down class="opacity-40"/>
            </div>
            <slot name="menu"></slot>
        </div>
        <slot name="menuActions"></slot>
    </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue'
import ArrowDown from '@/assets/img/arrow-down.svg'

    export default {
        components: {
            BaseHeader,
            ArrowDown,  
        },
    }
</script>

<style lang="scss" scoped>

</style>