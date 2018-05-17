<template>
    <section>
        <a href="/#/">뒤로 가기</a>
        <ParentsProfile />
        <a href="/#/myprofile">프로필 수정</a>
    </section>
</template>

<script>
import ParentsProfile from '@/components/ParentsProfile'

export default {
    name: 'Profile',
    components: {
        ParentsProfile
    }
}
</script>

<style>
    
</style>