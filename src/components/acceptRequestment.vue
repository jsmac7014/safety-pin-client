<template>
    <div>
        <p>
            {{ message.text }}
        </p>
        <button id="allow" @click="allow(requestmentId)">수락</button>
        <button id="disallow" @click="allow(requestmentId)">거절</button>
    </div>
</template>

<script>
export default {
    name: 'AcceptRequestment',
    props: [
        'message'
        //, 'requestmentId'
    ],
    methods: {
        allow(id) {
            
            removeComponent();
        },
        disallow(id) {

            removeComponent();
        },
        removeComponent() {

        }
    }
}
</script>

<style>
    
</style>