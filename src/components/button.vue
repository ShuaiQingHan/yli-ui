<template>
    <button class="yli-button">
      <slot></slot>
    </button>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'YliButton'
  })
  </script>