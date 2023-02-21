<template>
    <div class="courses">
        <div class="info flex flex-col w-fit gap-5 mt-8">
            <h2 v-if="coursesValue === 0 || coursesValue === undefined" class="info__courses bg-amber-200 py-4 px-7 rounded-3xl">У вас еще нет курсов</h2>
            <h2 v-else class="info__courses bg-black text-white py-4 px-7 rounded-3xl text-center">У вас {{ coursesValue }} курсов</h2>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            coursesValue: null,
        }
    },
    mounted () {
        this.coursesValue = this.$store.state.activeUser.coursesValue
    },
}
</script>

<style lang="scss" scoped></style>