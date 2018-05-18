<template>
    <div>
        <p>
            {{ message.text }}
        </p>
        <button id="allow">수락</button>
        <button id="disallow">거절</button>
    </div>
</template>

<script>
export default {
    name: 'AcceptRequestment',
    props: [
        'message'
    ]
}
</script>

<style>
    
</style>