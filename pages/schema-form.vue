<script setup>
import { ref, reactive } from 'vue'
import { reset, getNode } from '@formkit/core'
// FormKitSchemaDefinition
import { FormKitSchema, changeLocale } from '@formkit/vue'
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
const formValues = ref()

const changeLocaleHandle = (newValue) => {
  currentLang.value = newValue ? 'en' : 'pt'
  changeLocale(currentLang.value)
}
const handleRegisterClick = (event) => {
  event.preventDefault()
  formValues.value = getNode('registration_form_schema').value
}

const handleResetClick = () => {
  reset('registration_form_schema')
}

const handleFileClick = () => {
  console.log('Botão File clicado')
}

const handleAuxClick = () => {
  console.log('Botão Aux clicado')
}

const data = reactive({
  changeLocaleHandle,
  handleRegisterClick,
  handleResetClick,
  handleFileClick,
  handleAuxClick,
  maritalStatus: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'União estável'],
})

const formSchema = [
  // const formSchema: FormKitSchemaDefinition = [
  {
    $formkit: 'form',
    id: 'registration_form_schema',
    actions: false,
    onSubmit: '$handleRegisterClick',
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
            onInput: '$changeLocaleHandle',
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
            value: '$get(birthdate)',
            'outer-class': 'col-span-1',
          },
          {
            $formkit: 'dropdown',
            id: 'sex',
            name: 'sex',
            label: 'Sexo',
            options: sexOptions.value,
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
            validationMessages: {
              length: 'Telefone deve conter 10 caracteres',
            },
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
            $formkit: 'unit',
            id: 'weight',
            name: 'weight',
            unit: 'kilogram',
            label: 'Peso',
            'outer-class': 'col-span-1',
          },
          {
            $formkit: 'unit',
            id: 'height',
            name: 'height',
            unit: 'centimeter',
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
            options: '$maritalStatus',
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
                  class: 'flex justify-between',
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
            sectionsSchema: {
              label: {
                children: [
                  '$label',
                  {
                    $formkit: 'checkbox',
                    id: 'pne',
                    name: 'pne',
                    label: 'Pne?',
                  },
                ],
                attrs: {
                  class: 'flex justify-between',
                },
              },
            },
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
      // action buttons
      {
        $el: 'div',
        attrs: {
          class: 'flex justify-start',
        },
        children: [
          {
            $formkit: 'submit',
            id: 'register__button',
            name: 'register__button',
            label: 'Registrar paciente',
            'prefix-icon': 'check',
            onClick: '$handleRegisterClick',
          },
          {
            $formkit: 'button',
            id: 'reset__button',
            name: 'reset__button',
            label: 'Limpar',
            'prefix-icon': 'close',
            onClick: '$handleResetClick',
          },
          {
            $formkit: 'button',
            id: 'file__button',
            name: 'file__button',
            label: 'Info',
            'prefix-icon': 'info',
            onClick: '$handleFileClick',
          },
          {
            $formkit: 'button',
            id: 'aux__button',
            name: 'aux__button',
            label: 'Auxiliar',
            'prefix-icon': 'expand',
            onClick: '$handleAuxClick',
          },
        ],
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
      <FormKitSchema :schema="formSchema" :data="data" />
    </UCard>
    <pre wrap>{{ formValues }}</pre>
  </UContainer>
</template>
