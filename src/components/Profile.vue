<template>
    <section>
        <ParentsProfile />
        <router-link to="/myprofile">프로필 수정</router-link>
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