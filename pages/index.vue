<script setup>
import { ref } from 'vue'
import {
  document_types,
  marital_status,
  skin_color,
  health_plan,
  sex,
  residence_type,
} from '~/components/new-patient/select-data' // Importando as opções

const toast = useToast()

const documentOptions = ref(document_types)
const maritalStatusOptions = ref(marital_status)
const skinColorOptions = ref(skin_color)
const healthPlanOptions = ref(health_plan)
const sexOptions = ref(sex)
const residenceOptions = ref(residence_type)
const submitted = ref(false)

const submitHandler = async () => {
  await new Promise((r) => setTimeout(r, 1000))
  submitted.value = true
}
</script>

<template>
  <UContainer>
    <UCard class="my-10 mx-10">
      <div class="flex justify-end">
        <ColorScheme>
          <USelect
            v-model="$colorMode.preference"
            :options="['system', 'light', 'dark']"
          />
        </ColorScheme>
      </div>

      <FormKit
        id="registration-example"
        type="form"
        :form-class="submitted ? 'hide' : 'show'"
        :actions="false"
        @submit="submitHandler"
      >
        <!-- Ativo -->
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

        <!-- main information -->
        <div class="main-data grid grid-cols-12 gap-3">
          <div class="col-span-6">
            <FormKit
              id="name"
              type="text"
              name="name"
              label="Nome"
              placeholder="Digite seu nome"
              validation="required|length:3"
              class="min-w-full max-w-full"
            />
          </div>
          <div class="col-span-2">
            <FormKit
              id="medical-record"
              type="text"
              name="medical-record"
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
            type="select"
            label="Sexo"
            name="sex"
            :options="['Feminino', 'Masculino', 'Prefirio não identificar']"
          />
        </div>

        <!-- additional information -->
        <div class="main-data grid grid-cols-12 gap-3">
          <div class="col-span-2">
            <FormKit
              id="phone"
              type="mask"
              mask="(##) ####-####"
              name="phone"
              label="Telefone"
              validation="number|length:10"
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
              validation="required|number|length:11"
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
              validation="number|length:11"
              placeholder="(00) 00000-0000"
            />
          </div>
          <div class="col-span-4">
            <FormKit id="contact" name="contact" type="text" label="Contato" />
          </div>
          <div class="col-span-1">
            <FormKit
              id="weight"
              type="mask"
              mask="*kg"
              name="weight"
              label="Peso"
            />
          </div>

          <div class="col-span-1">
            <FormKit
              id="height"
              type="mask"
              mask="#,##m"
              name="height"
              label="Altura"
            />
          </div>
        </div>

        <!-- documents -->
        <div class="docs-data grid grid-cols-12 gap-3">
          <div class="col-span-2">
            <FormKit
              id="document-type"
              type="select"
              label="Tipo Documento"
              name="document-type"
              :options="documentOptions"
            />
          </div>
          <div class="col-span-2">
            <FormKit
              id="doc-number"
              type="number"
              name="doc-number"
              validation="required|between:8,11"
              label="Nº Documento"
            />
          </div>
          <div class="col-span-2">
            <FormKit
              id="issuing-body"
              type="text"
              name="issuing-body"
              label="Órgão Emissor"
            />
          </div>
          <div class="col-span-2">
            <FormKit
              id="shipment-date"
              type="date"
              name="shipment-date"
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
              validation="required|number|length:3"
              label="CPF"
            />
          </div>
        </div>

        <!-- personal information -->
        <div class="grid grid-cols-12 gap-3">
          <div class="col-span-4">
            <FormKit
              id="marital-status"
              type="select"
              label="Estado civil"
              name="marital-status"
              :options="maritalStatusOptions"
            />
          </div>
          <div class="col-span-2">
            <FormKit
              id="skin-color"
              type="select"
              label="Cor"
              name="skin-color"
              :options="skinColorOptions"
            />
          </div>
          <div class="col-span-6">
            <FormKit
              id="profession"
              type="dropdown"
              label="Profissão"
              name="profession"
              :options="['Estudante', 'Desenvolvedor', 'Médico', 'Advogado']"
            />
          </div>
        </div>

        <!-- parental information -->
        <div class="grid grid-cols-2 gap-3">
          <FormKit
            id="email"
            name="email"
            type="email"
            label="Email"
            placeholder="vikas@school.edu"
            validation="email"
          />
          <FormKit
            id="nationality"
            name="nationality"
            type="text"
            label="Naturalidade"
            validation="required"
          />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <FormKit
            id="mother-name"
            name="mother-name"
            type="text"
            label="Nome da Mãe"
            validation="required"
          />
          <FormKit
            id="father-name"
            name="father-name"
            type="text"
            label="Nome do Pai"
          />
        </div>

        <!-- health information -->
        <div class="grid grid-cols-2 gap-3">
          <FormKit
            id="health-plan"
            type="select"
            label="Plano de saúde"
            name="health-plan"
            :options="healthPlanOptions"
          />
          <FormKit
            id="health-plan-owner"
            name="health-plan-owner"
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
              validation="required|number|length:8"
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
              id="address-type"
              type="select"
              label="Tipo"
              name="address-type"
              :options="residenceOptions"
            />
          </div>
          <div class="col-span-1">
            <FormKit
              id="address-number"
              name="address-number"
              type="number"
              label="Número"
            />
          </div>
          <div class="col-span-3">
            <FormKit
              id="address-complement"
              name="address-complement"
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
              type="select"
              label="Cidade"
              name="city"
              :options="[
                'São Paulo',
                'Rio de Janeiro',
                'Espirito Santo',
                'Salvador',
              ]"
            />
          </div>
          <div class="col-span-1">
            <FormKit
              id="state"
              type="select"
              label="Estado"
              name="state"
              :options="['SP', 'RJ', 'ES', 'BA']"
            />
          </div>
          <div class="col-span-2">
            <FormKit id="ibge" name="ibge" type="text" label="IBGE" />
          </div>
        </div>

        <!-- observation -->
        <div class="grid grid-cols-1 gap-3">
          <FormKit
            id="observation"
            type="textarea"
            label="Observação"
            name="observation"
            validation="length:0,120"
            validation-visibility="live"
            :validation-messages="{
              length: 'Observação não pode conter mais do que 120 characteres.',
            }"
            class="min-w-full max-w-full"
          />
        </div>

        <FormKit
          type="submit"
          label="Registrar dados"
          @click="toast.add({ title: 'Hello world!' })"
        />
      </FormKit>
    </UCard>
  </UContainer>
</template>
