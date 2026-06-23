<script setup lang="ts">
import IconAdress from '@/shared/svg/adress-red.svg'
import IconTime from '@/shared/svg/time-forward-red.svg'
import IconHome from '@/shared/svg/home-1.svg'
import IconCalendar from '@/shared/svg/calendar.svg'

import {Typography} from "@/shared/ui/typography";

defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="background">
    <div class="block">
      <div class="comp">
        <IconAdress />
        <Typography type="regular-20-almost-black">{{ item.city }}</Typography>
      </div>
      <div class="comp">
        <IconTime />
        <Typography type="regular-20-almost-black">
          {{ Array.isArray(item.employment) ? item.employment.join(', ') : item.employment }}
        </Typography>
      </div>
      <div class="comp">
        <IconHome />
        <Typography type="regular-20-almost-black">
          {{ Array.isArray(item.work_format) ? item.work_format.join(', ') : item.work_format }}
        </Typography>
      </div>
      <div class="comp">
        <IconCalendar />
        <Typography type="regular-20-almost-black">
          {{ Array.isArray(item.schedule) ? item.schedule.join(', ') : item.schedule }}
        </Typography>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  width: 100%;
  background: var(--color-background-grey);
  padding: 23px 0;
}

.block {
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  align-items: center;
}

.comp {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-shrink: 0;
  width: auto;
  padding: 0;
  margin: 0;
}
</style>