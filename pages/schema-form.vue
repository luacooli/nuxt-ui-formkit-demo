<script setup>
import { FormKitSchema } from '@formkit/vue'
import { ref, reactive } from 'vue'
import {
  document_types,
  marital_status,
  skin_color,
  health_plan,
  sex,
  residence_type,
  profession,
  city,
  state,
} from '~/components/new-patient/select-data'

const documentOptions = ref(document_types)
const maritalStatusOptions = ref(marital_status)
const skinColorOptions = ref(skin_color)
const healthPlanOptions = ref(health_plan)
const sexOptions = ref(sex)
const residenceOptions = ref(residence_type)
const professionOptions = ref(profession)
const cityOptions = ref(city)
const stateOptions = ref(state)

const submitted = ref(false)
const currentLang = ref('pt')

const formSchema = [
  {
    $formkit: 'form',
    id: 'registration-schema-example',
    children: [
      // header: patient terms, language
      {
        $el: 'div',
        attrs: {
          class: 'grid grid-cols-12 gap-3',
        },
        children: [
          {
            $formkit: 'checkbox',
            id: 'terms',
            name: 'terms',
            label: 'Ativo',
            value: true,
            validation: 'accepted',
            'outer-class': 'col-start-1',
          },
          {
            $formkit: 'toggle',
            id: 'language',
            name: 'language',
            label: 'Idioma',
            'alt-label-position': true,
            'off-value-label': 'PT',
            'on-value-label': 'EN',
            'value-label-display': 'inner',
            'outer-class': 'col-start-12',
          },
          // select theme !!!!!!
        ],
      },
      // main information
      {
        $el: 'div',
        attrs: {
          class: 'grid grid-cols-12 gap-3',
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
      // additional information
      {
        $el: 'div',
        attrs: {
          class: 'grid grid-cols-12 gap-3',
        },
        children: [
          {
            $formkit: 'mask',
            mask: '(##) ####-####',
            id: 'phone',
            name: 'phone',
            label: 'Telefone',
            validation: 'length:10',
            placeholder: '(00) 0000-0000',
            'outer-class': 'col-span-2',
          },
          {
            $formkit: 'mask',
            mask: '(##) #####-####',
            id: 'cellphone',
            name: 'cellphone',
            label: 'Celular',
            placeholder: '(00) 00000-0000',
            validation: 'length:11',
            'outer-class': 'col-span-2',
          },
          {
            $formkit: 'mask',
            mask: '(##) #####-####',
            id: 'whatsapp',
            name: 'whatsapp',
            label: 'Web',
            placeholder: '(00) 0000-0000',
            validation: 'length:11',
            'outer-class': 'col-span-2',
          },
          {
            $formkit: 'text',
            id: 'contact',
            name: 'contact',
            label: 'Contato',
            'outer-class': 'col-span-4',
          },
          {
            $formkit: 'number',
            id: 'weight',
            name: 'weight',
            label: 'Peso',
            'outer-class': 'col-span-1',
          },
          {
            $formkit: 'number',
            id: 'height',
            name: 'height',
            label: 'Altura',
            'outer-class': 'col-span-1',
          },
        ],
      },
      // documents
      {
        $el: 'div',
        attrs: {
          class: 'grid grid-cols-12 gap-3',
        },
        children: [
          {
            $formkit: 'dropdown',
            id: 'document-type',
            name: 'document-type',
            label: 'Tipo Documento',
            options: documentOptions.value,
            'outer-class': 'col-span-2',
          },
          {
            $formkit: 'number',
            id: 'doc-number',
            name: 'doc-number',
            label: 'Nª Documento',
            validation: 'required|length:8,11',
            'outer-class': 'col-span-2',
          },
          {
            $formkit: 'text',
            id: 'issuing-body',
            name: 'issuing-body',
            label: 'Órgão Emissor',
            'outer-class': 'col-span-2',
          },
          {
            $formkit: 'datepicker',
            id: 'shipment-date',
            name: 'shipment-date',
            label: 'D. expedição',
            'outer-class': 'col-span-2',
          },
          {
            $formkit: 'number',
            id: 'cns',
            name: 'cns',
            label: 'CNS',
            'outer-class': 'col-span-2',
          },
          {
            $formkit: 'mask',
            id: 'cpf',
            name: 'cpf',
            label: 'CPF',
            mask: '###.###.###-##',
            validation: 'required|length:11',
            'outer-class': 'col-span-2',
          },
        ],
      },
      // personal information
      {
        $el: 'div',
        attrs: {
          class: 'grid grid-cols-12 gap-3',
        },
        children: [
          {
            $formkit: 'dropdown',
            id: 'marital-status',
            name: 'marital-status',
            label: 'Estado civil',
            options: maritalStatusOptions.value,
            'outer-class': 'col-span-4',
          },
          {
            $formkit: 'dropdown',
            id: 'skin-color',
            name: 'skin-color',
            label: 'Cor',
            options: skinColorOptions.value,
            'outer-class': 'col-span-2',
          },
          {
            $formkit: 'dropdown',
            id: 'profession',
            name: 'profession',
            label: 'Profissão',
            options: professionOptions.value,
            'outer-class': 'col-span-6',
          },
        ],
      },
      // email and nationality information
      {
        $el: 'div',
        attrs: {
          class: 'grid grid-cols-2 gap-3',
        },
        children: [
          {
            $formkit: 'email',
            id: 'email',
            name: 'email',
            label: 'Email',
            disabled: '$get(has_email).value',
            validation: 'email',

            // custom schema
            sectionsSchema: {
              label: {
                // which prop? label
                children: [
                  '$label', // render label
                  {
                    $formkit: 'checkbox', // add checkbox next to the label
                    id: 'has_email',
                    name: 'has_email',
                    label: 'Não possui email?',
                  },
                ],
                attrs: {
                  class: 'flex justify-between items-end',
                },
              },
            },
          },
          {
            $formkit: 'text',
            id: 'nationality',
            name: 'nationality',
            label: 'Naturalidade',
            validation: 'required',
          },
        ],
      },
      // parental information
      {
        $el: 'div',
        attrs: {
          class: 'grid grid-cols-2 gap-3',
        },
        children: [
          {
            $formkit: 'text',
            id: 'mother-name',
            name: 'mother-name',
            label: 'Nome da Mãe',
            validation: 'required',
          },
          {
            $formkit: 'text',
            id: 'father-name',
            name: 'father-name',
            label: 'Nome do Pai',
            validation: 'required',
          },
        ],
      },
      // health information
      {
        $el: 'div',
        attrs: {
          class: 'grid grid-cols-2 gap-3',
        },
        children: [
          {
            $formkit: 'dropdown',
            id: 'health-plan',
            name: 'health-plan',
            label: 'Plano de saúde',
            options: healthPlanOptions.value,
          },
          {
            $formkit: 'text',
            id: 'health-plan-owner',
            name: 'health-plan-owner',
            label: 'Titular',
          },
        ],
      },
      // address information
      {
        $el: 'div',
        attrs: {
          class: 'grid grid-cols-12 gap-3',
        },
        children: [
          {
            $formkit: 'mask',
            mask: '##.###-###',
            id: 'cep',
            name: 'cep',
            label: 'CEP',
            validation: 'length:8|required',
            'outer-class': 'col-span-2',
          },
          {
            $formkit: 'text',
            id: 'address',
            name: 'address',
            label: 'Logradouro',
            'outer-class': 'col-span-4',
          },
          {
            $formkit: 'text',
            id: 'address-type',
            name: 'address-type',
            label: 'Tipo',
            options: residenceOptions.value,
            'outer-class': 'col-span-2',
          },
          {
            $formkit: 'number',
            id: 'address-number',
            name: 'address-number',
            label: 'Número',
            'outer-class': 'col-span-1',
          },
          {
            $formkit: 'text',
            id: 'address-complement',
            name: 'address-complement',
            label: 'Complemento',
            'outer-class': 'col-span-3',
          },
        ],
      },
      // additional address information
      {
        $el: 'div',
        attrs: {
          class: 'grid grid-cols-12 gap-3',
        },
        children: [
          {
            $formkit: 'text',
            id: 'neighborhood',
            name: 'neighborhood',
            label: 'Bairro',
            'outer-class': 'col-span-4',
          },
          {
            $formkit: 'dropdown',
            id: 'city',
            name: 'city',
            label: 'Cidade',
            options: cityOptions.value,
            'outer-class': 'col-span-5',
          },
          {
            $formkit: 'dropdown',
            id: 'state',
            name: 'state',
            label: 'Estado',
            options: stateOptions.value,
            'outer-class': 'col-span-1',
          },
          {
            $formkit: 'text',
            id: 'ibge',
            name: 'ibge',
            label: 'IBGE',
            'outer-class': 'col-span-2',
          },
        ],
      },
      // observation
      {
        $el: 'div',
        attrs: {
          class: 'grid grid-cols-1 gap-3',
        },
        children: [
          {
            $formkit: 'textarea',
            id: 'observation',
            name: 'observation',
            label: 'Observação',
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
      class="m-10"
      color="green"
      variant="outline"
      to="/"
      icon="i-heroicons-clipboard-document-20-solid"
    >
      Tagged Form
    </UButton>
    <UButton
      class="m-10"
      color="green"
      variant="outline"
      to="/test"
      icon="i-heroicons-clipboard-document-20-solid"
    >
      Test
    </UButton>

    <UCard class="m-10">
      <FormKitSchema :schema="formSchema" />
    </UCard>
  </UContainer>
</template>
