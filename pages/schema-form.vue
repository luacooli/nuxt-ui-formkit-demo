<script setup>
import { FormKitSchema } from '@formkit/vue'

const formSchema = [
  {
    $formkit: 'form',
    id: 'registration-schema-example',
    children: [
      {
        $el: 'div',
        attrs: {
          class: 'grid grid-cols-12 gap-4',
        },
        children: [
          {
            $formkit: 'text',
            id: 'name',
            name: 'name',
            label: 'Nome',
            placeholder: 'Digite seu nome',
            validation: 'required|contains_alpha_spaces',
            'outer-class': 'col-span-6',
          },
          {
            $formkit: 'text',
            id: 'medical-record',
            name: 'medical-record',
            label: 'Prontuário',
            placeholder: '0000',
            'outer-class': 'col-span-2',
          },
          {
            $formkit: 'datepicker',
            id: 'birthdate',
            name: 'medical-record',
            label: 'D. Nascimento',
            validation: 'required',
            placeholder: 'Selecione uma data',
            'outer-class': 'col-span-2',
          },
          {
            $formkit: 'number',
            id: 'age',
            name: 'medical-record',
            label: 'Idade',
            validation: 'required',
            placeholder: 'Selecione uma data',
            'outer-class': 'col-span-1',
          },
          {
            $formkit: 'number',
            id: 'sex',
            name: 'sex',
            label: 'Sexo',
            'outer-class': 'col-span-1',
          },
        ],
      },
      {
        $formkit: 'submit',
        label: 'Registrar paciente',
      },
    ],
  },
]
</script>

<template>
  <UContainer>
    <UButton
      block
      class="m-10"
      color="green"
      variant="outline"
      to="/"
      icon="i-heroicons-clipboard-document-20-solid"
    >
      Tagged Form
    </UButton>

    <UCard class="m-10">
      <FormKitSchema :schema="formSchema" />
    </UCard>
  </UContainer>
</template>
