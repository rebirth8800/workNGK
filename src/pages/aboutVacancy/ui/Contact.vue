<script setup lang="ts">
import ContentContact from "@/pages/aboutVacancy/ui/ContentContact.vue";
import {Typography} from "@/shared/ui/typography";
import IconUser from '@/shared/svg/people-black.svg'
import IconMail from '@/shared/svg/email-black.svg'
import IconPhone from '@/shared/svg/phone.svg'

defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="contact-wrapper">
    <div class="block">
      <ContentContact
          title="Что вы будете делать"
          :items="item.responsibilities || []"
      />
      <span class="line"></span>
      <ContentContact
          title="Мы ждём от вас"
          :items="item.requirements || []"
      />
      <span class="line"></span>
      <ContentContact
          title="Условия работы"
          :items="item.conditions || []"
      />
    </div>

    <div class="block-contact">
      <Typography type="semibold-32-black">Контакты работодателя</Typography>
      <div class="data">
        <div class="data-item">
          <IconUser/>
          <Typography type="medium-24-black">{{ item.contact_person }}</Typography>
        </div>
        <div class="data-item">
          <IconMail/>
          <Typography type="medium-24-black">{{ item.contact_email }}</Typography>
        </div>
        <div class="data-item">
          <IconPhone/>
          <Typography type="medium-24-black">{{ item.contact_phone }}</Typography>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.block {
  border: 1px solid var(--color-grey-light);
  border-radius: 10px;
  padding: 35px 35px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  box-sizing: border-box;
}

.block-contact {
  width: 100%;
  border: 1px solid var(--color-grey-light);
  border-radius: 10px;
  padding: 35px 35px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--color-background-grey);
  box-sizing: border-box;
  align-items: flex-start;
  margin-bottom: 35px;
}
.block-contact > * {
  width: 100%;
}
.block :deep(.content-contact) {
  padding: 0;
  border-radius: 0;
}

.line {
  width: 100%;
  height: 1px;
  background-color: var(--color-grey-light);
}


.data {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}

.data-item {
  display: flex;
  gap: 15px;
  align-items: center;
  width: 100%;
}


.data-item :deep(.typography) {
  margin: 0;
  padding: 0;
  text-align: left;
  flex: 1;
}
.data-item svg {
  flex-shrink: 0;
}
</style>