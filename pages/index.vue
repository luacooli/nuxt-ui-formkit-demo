<script setup>
import { ref } from 'vue'
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
import { changeLocale } from '@formkit/vue'
import { reset } from '@formkit/core'

// const toast = useToast()

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
const hasEmail = ref(false)
const formValues = ref()

const changeLocaleHandle = () => {
  currentLang.value = currentLang.value === 'pt' ? 'en' : 'pt'
  changeLocale(currentLang.value)
}

const handleResetClick = () => {
  reset('registration_form')
}

const submitHandler = async (event) => {
  await new Promise((r) => setTimeout(r, 1000))
  submitted.value = true

  console.log(event)

  // toast.add({ title: 'Hello world!' })
}
</script>

<template>
  <UContainer>
    <UButton
      block
      class="m-10"
      color="green"
      variant="outline"
      to="schema-form"
      icon="i-heroicons-clipboard-document-20-solid"
    >
      Schema Form
    </UButton>

    <UCard class="m-10">
      <FormKit
        id="registration_form"
        type="form"
        :actions="false"
        #default="{ value }"
        v-model="formValues"
        submit-label="Registrar dados"
        @submit.preventDefault="submitHandler"
      >
        <!-- header: patient terms, language, system theme -->
        <div class="flex">
          <!-- patient term -->
          <FormKit
            id="terms"
            type="checkbox"
            label="Ativo"
            name="terms"
            :value="true"
            validation="accepted"
            validation-visibility="dirty"
            outer-class="relative top-0 right-0"
          />
          <!-- language -->
          <FormKit
            id="language"
            name="language"
            label="Idioma"
            type="toggle"
            alt-label-position
            off-value-label="PT"
            on-value-label="EN"
            value-label-display="inner"
            @click="changeLocaleHandle"
          />
          <!-- theme -->
          <ColorScheme>
            <USelect
              v-model="$colorMode.preference"
              :options="['system', 'light', 'dark']"
            />
          </ColorScheme>
        </div>

        <!-- main information -->
        <div class="grid grid-cols-12 gap-3">
          <div class="col-span-6">
            <FormKit
              id="name"
              type="text"
              name="name"
              label="Nome"
              placeholder="Digite seu nome"
              validation="required|contains_alpha_spaces"
            />
          </div>
          <div class="col-span-2">
            <FormKit
              id="medical_record"
              type="text"
              name="medical_record"
              label="Prontuário"
              placeholder="0000"
            />
          </div>
          <div class="col-span-2">
            <FormKit
              id="birthdate"
              type="datepicker"
              :format="{ date: 'short' }"
              popover
              name="birthdate"
              label="D. Nascimento"
              validation="required"
              placeholder="Selecione uma data"
            />
          </div>
          <FormKit
            id="age"
            type="number"
            name="age"
            label="Idade"
            placeholder="Idade"
          />
          <FormKit
            id="sex"
            type="dropdown"
            label="Sexo"
            name="sex"
            :options="sexOptions"
          />
        </div>

        <!-- additional information -->
        <div class="grid grid-cols-12 gap-3">
          <div class="col-span-2">
            <FormKit
              id="phone"
              type="mask"
              mask="(##) ####-####"
              name="phone"
              label="Telefone"
              placeholder="(00) 0000-0000"
            />
          </div>
          <div class="col-span-2">
            <FormKit
              id="cellphone"
              type="mask"
              mask="(##) #####-####"
              name="cellphone"
              label="Celular"
              validation="required|*length:11"
              :validation-messages="{
                length: 'Celular deve conter 11 caracteres',
              }"
              placeholder="(00) 00000-0000"
            />
          </div>
          <div class="col-span-2">
            <FormKit
              id="whatsapp"
              type="mask"
              mask="(##) #####-####"
              name="whatsapp"
              label="Web"
              validation="length:11"
              :validation-messages="{
                length: 'Telefone web deve conter 10 caracteres',
              }"
              placeholder="(00) 00000-0000"
            />
          </div>
          <div class="col-span-4">
            <FormKit id="contact" name="contact" type="text" label="Contato" />
          </div>
          <div class="col-span-1">
            <FormKit
              id="weight"
              type="unit"
              unit="kilogram"
              name="weight"
              label="Peso"
            />
          </div>

          <div class="col-span-1">
            <FormKit
              id="height"
              name="height"
              type="unit"
              unit="centimeter"
              label="Altura"
            />
          </div>
        </div>

        <!-- documents -->
        <div class="grid grid-cols-12 gap-3">
          <div class="col-span-2">
            <FormKit
              id="document_type"
              type="dropdown"
              label="Tipo Documento"
              name="document_type"
              :options="documentOptions"
            />
          </div>
          <div class="col-span-2">
            <FormKit
              id="doc_number"
              type="number"
              name="doc_number"
              validation="required|length:8,11"
              label="Nº Documento"
            />
          </div>
          <div class="col-span-2">
            <FormKit
              id="issuing_body"
              type="text"
              name="issuing_body"
              label="Órgão Emissor"
            />
          </div>
          <div class="col-span-2">
            <FormKit
              id="shipment_date"
              type="date"
              name="shipment_date"
              label="D. expedição"
            />
          </div>
          <div class="col-span-2">
            <FormKit id="cns" type="number" name="cns" label="CNS" />
          </div>
          <div class="col-span-2">
            <FormKit
              id="cpf"
              type="mask"
              mask="###.###.###-##"
              name="cpf"
              validation="required|length:11"
              :validation-messages="{
                length: 'CPF deve conter 11 caracteres',
              }"
              label="CPF"
            />
          </div>
        </div>

        <!-- personal information -->
        <div class="grid grid-cols-12 gap-3">
          <div class="col-span-4">
            <FormKit
              id="marital_status"
              type="dropdown"
              label="Estado civil"
              name="marital_status"
              :options="maritalStatusOptions"
            />
          </div>
          <div class="col-span-2">
            <FormKit
              id="skin_color"
              type="dropdown"
              label="Cor"
              name="skin_color"
              :options="skinColorOptions"
            />
          </div>
          <div class="col-span-6">
            <FormKit
              id="profession"
              type="dropdown"
              label="Profissão"
              name="profession"
              :options="professionOptions"
            />
          </div>
        </div>

        <!-- email and nationality information -->
        <div class="grid grid-cols-2 gap-3">
          <!-- has email -->
          <div>
            <FormKit
              id="has_email"
              type="checkbox"
              label="Não possui email?"
              name="has_email"
              :value="hasEmail"
              outer-class="relative top-0 right-0"
              @input="(event) => (hasEmail = event)"
            />
            <FormKit
              id="email"
              name="email"
              type="email"
              label="Email"
              :disabled="hasEmail"
              validation="email"
              placeholder="vikas@school.com"
            />
          </div>

          <FormKit
            id="nationality"
            name="nationality"
            type="text"
            label="Naturalidade"
            validation="required"
          />
        </div>

        <!-- parental information -->
        <div class="grid grid-cols-2 gap-3">
          <FormKit
            id="mother_name"
            name="mother_name"
            type="text"
            label="Nome da Mãe"
            validation="required"
          />
          <FormKit
            id="father_name"
            name="father_name"
            type="text"
            label="Nome do Pai"
          />
        </div>

        <!-- health information -->
        <div class="grid grid-cols-2 gap-3">
          <FormKit
            id="health_plan"
            type="dropdown"
            label="Plano de saúde"
            name="health_plan"
            :options="healthPlanOptions"
          />
          <FormKit
            id="health_plan_owner"
            name="health_plan_owner"
            type="text"
            label="Titular"
          />
        </div>

        <!-- address information -->
        <div class="grid grid-cols-12 gap-3">
          <div class="col-span-2">
            <FormKit
              id="cep"
              name="cep"
              type="mask"
              mask="##.###-###"
              label="CEP"
              validation="length:8|required"
            />
          </div>
          <div class="col-span-4">
            <FormKit
              id="address"
              name="address"
              type="text"
              label="Logradouro"
            />
          </div>
          <div class="col-span-2">
            <FormKit
              id="address_type"
              type="dropdown"
              label="Tipo"
              name="address_type"
              :options="residenceOptions"
            />
          </div>
          <div class="col-span-1">
            <FormKit
              id="address_number"
              name="address_number"
              type="number"
              label="Número"
            />
          </div>
          <div class="col-span-3">
            <FormKit
              id="address_complement"
              name="address_complement"
              type="text"
              label="Complemento"
            />
          </div>
        </div>

        <!-- additional address information -->
        <div class="grid grid-cols-12 gap-3">
          <div class="col-span-4">
            <FormKit
              id="neighborhood"
              name="neighborhood"
              type="text"
              label="Bairro"
            />
          </div>
          <div class="col-span-5">
            <FormKit
              id="city"
              type="dropdown"
              label="Cidade"
              name="city"
              :options="cityOptions"
            />
          </div>
          <div class="col-span-1">
            <FormKit
              id="state"
              type="dropdown"
              label="Estado"
              name="state"
              :options="stateOptions"
              inputClass="BAZINGA"
            />
          </div>
          <div class="col-span-2">
            <FormKit id="ibge" name="ibge" type="text" label="IBGE" />
          </div>
        </div>

        <!-- observation -->
        <div class="grid grid-cols-1">
          <FormKit
            id="observation"
            type="textarea"
            label="Observação"
            name="observation"
            validation="length:0,30"
            validation-visibility="live"
            :validation-messages="{
              length: 'Observação não pode conter mais do que 120 characteres.',
            }"
            class="min-w-full max-w-full"
          />
        </div>

        <!-- actions button -->
        <Formkit type="group" class="flex justify-start">
          <FormKit
            id="register__button"
            type="submit"
            label="Registrar dados"
            prefix-icon="check"
          />
          <FormKit
            id="reset__button"
            type="button"
            label="Fechar"
            prefix-icon="close"
            @click="handleResetClick"
          />
          <FormKit
            id="file__button"
            type="button"
            label="Info"
            prefix-icon="info"
          />
          <FormKit
            id="aux__button"
            type="button"
            label="Auxiliar"
            prefix-icon="expand"
          />
        </Formkit>
      </FormKit>
    </UCard>

    <pre wrap>{{ formValues }}</pre>
  </UContainer>
</template>
