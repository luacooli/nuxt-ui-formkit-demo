<template>
  <div>
    <UContainer>
      <NuxtPage />
    </UContainer>

    <UNotifications />
  </div>
</template>

<script setup>
const handleSubmit = (formData) => {
  console.log('Dados do formulário:', formData)
}
</script>
