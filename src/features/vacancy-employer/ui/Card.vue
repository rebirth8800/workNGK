<script setup lang="ts">

interface Item {
  title: string
  company_name: string
  salary: number
  date: string
  status: string
}

interface Props {
  item: Item
}

defineProps<Props>()


</script>

<template>{{item.status}}</template>

<style scoped></style>
