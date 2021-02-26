<template>
  <div class="message" :class="{ 'from-user': owner }">
    <h5>Text</h5>
    {{ message.text }}
    <br />

    <h5>Image</h5>
    <img v-if="message.imgURL" :src="message.imgURL" >
    <br />

    <h5>Audio</h5>
    <audio v-if="message.audioURL" :src="message.audioURL" controls></audio>
    <br />


    <span class="sender">from UID {{ message.sender }}</span>
  </div>
</template>

<script>
export default {
    props: ['message', 'owner']
};
</script>

<style>
.message {
  background: #dddddd;
  color: black;
  margin-left: 10px;
  margin-right: auto;
  border-radius: 5px;
  padding: 12px;
  display: inline-block;
}
.from-user {
  margin-right: 10px;
  margin-left: auto;
  background: #91bbff;
}
.sender {
  font-size: 0.5rem;
}
</style>
