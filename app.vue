<template>
  <div>
    <UContainer>
      <NuxtPage />
    </UContainer>

    <UNotifications />
  </div>

  <!-- <div class="bg-white rounded-xl shadow-xl p-8 mx-auto my-16 max-w-[850px]">
    <img
      src="https://pro.formkit.com/logo.svg"
      alt="FormKit Logo"
      width="244"
      height="50"
      class="mx-auto mb-8 w-48"
    />

    <FormKit type="form" @submit="handleSubmit">
      <div class="main-data grid grid-cols-12 gap-3">
        <div class="col-span-6">
          <FormKit
            type="text"
            name="name"
            id="name"
            label="Nome"
            placeholder="Digite seu nome"
            validation="required|length:3"
            class="min-w-full max-w-full"
          />
        </div>
        <div class="col-span-2">
          <FormKit
            type="text"
            name="medical-record"
            id="medical-record"
            label="Prontuário"
            placeholder="0000"
          />
        </div>
        <div class="col-span-2">
          <FormKit
            type="date"
            name="birthdate"
            id="birthdate"
            label="D. Nascimento"
            placeholder="Selecione uma data"
          />
        </div>
        <FormKit
          type="number"
          name="age"
          id="age"
          label="Idade"
          placeholder="Idade"
        />
        <FormKit
          type="select"
          label="Sexo"
          name="sex"
          id="sex"
          :options="['Feminino', 'Masculino', 'Prefirio não identificar']"
        />
      </div>

      <div class="main-data grid grid-cols-12 gap-3">
        <div class="col-span-2">
          <FormKit
            type="number"
            name="phone"
            label="Telefone"
            validation="required|number|between:9,11"
            placeholder="(00) 00000-0000"
          />
        </div>
        <div class="col-span-2">
          <FormKit
            type="number"
            name="cellphone"
            label="Celular"
            validation="required|number|between:9,11"
            placeholder="(00) 00000-0000"
          />
        </div>
        <div class="col-span-2">
          <FormKit
            type="number"
            name="whatsapp"
            label="Web"
            validation="required|number|between:9,11"
            placeholder="(00) 00000-0000"
          />
        </div>
        <div class="col-span-3">
          <FormKit type="number" name="contact" label="Contato" />
        </div>
        <div>
          <FormKit type="number" name="weight" label="Peso" />
        </div>

        <div>
          <FormKit type="number" name="height" label="Altura" />
        </div>
      </div>

      <div class="docs-data grid grid-cols-12 gap-3">
        <FormKit
          type="select"
          label="Tipo de documento"
          name="document"
          id="document"
          :options="['RG', 'CPF', 'Passaporte']"
        />
        <FormKit
          type="number"
          name="doc-number"
          id="doc-number"
          validation="required|between:8,11"
          label="Nº do documento"
        />
        <FormKit
          type="text"
          name="issuing-body"
          id="issuing-body"
          label="Órgão Emissor"
        />
        <FormKit
          type="date"
          name="shipment-date"
          id="shipment-date"
          label="Data de expedição"
        />
        <FormKit type="number" name="cns" id="cns" label="CNS" />
        <FormKit
          type="number"
          name="cpf"
          id="cpf"
          validation="required|number|length:3"
          label="CPF"
        />
      </div>

      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-4">
          <FormKit
            type="select"
            label="Estado civil"
            name="marital-status"
            :options="['Solteiro', 'Casado', 'Divorciado', 'União estável']"
          />
        </div>
        <div class="col-span-2">
          <FormKit
            type="select"
            label="Cor"
            name="color"
            :options="['Branco', 'Pardo', 'Preto', 'Amarelo']"
          />
        </div>
        <div class="col-span-6">
          <FormKit
            type="select"
            label="Profissão"
            name="profession"
            :options="['Estudante', 'Desenvolvedor', 'Médico', 'Advogado']"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <FormKit type="email" label="Email" placeholder="vikas@school.edu" />
        <FormKit type="text" label="Naturalidade" />
      </div>
      <div class="grid grid-cols-2 gap-3">
        <FormKit type="text" label="Nome da mãe" />
        <FormKit type="text" label="Nome do pai" />
      </div>

      <div class="grid grid-cols-2 gap-3">
        <FormKit
          type="select"
          label="Plano de saúde"
          name="health-plan"
          id="health-plan"
          :options="['Particular', 'Amil', 'Sulamérica', 'Bradesco']"
        />
        <FormKit type="text" label="Titular" />
      </div>

      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-1">
          <FormKit
            type="number"
            label="CEP"
            validation="required|number|length:8"
          />
        </div>
        <div class="col-span-4">
          <FormKit type="text" label="Logradouro" />
        </div>
        <div class="col-span-2">
          <FormKit
            type="select"
            label="Tipo"
            name="address-type"
            id="address-type"
            :options="['Casa', 'Trabalho']"
          />
        </div>
        <div class="col-span-1">
          <FormKit type="number" label="Número" />
        </div>
        <div class="col-span-3">
          <FormKit type="text" label="Complemento" />
        </div>
      </div>
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-3">
          <FormKit type="text" label="Bairro" />
        </div>
        <div class="col-span-5">
          <FormKit
            type="select"
            label="Cidade"
            name="city"
            id="city"
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
            type="select"
            label="Estado"
            name="state"
            :options="['SP', 'RJ', 'ES', 'BA']"
          />
        </div>
        <div class="col-span-2">
          <FormKit type="text" label="IBGE" />
        </div>
      </div>

      <div class="grid grid-cols-1 gap-3">
        <FormKit
          type="textarea"
          label="Observação"
          name="observation"
          id="observation"
          validation="length:0,120"
          validation-visibility="live"
          :validation-messages="{
            length: 'Observação não pode conter mais do que 120 characteres.',
          }"
          class="min-w-full max-w-full"
        />
      </div>

      <div class="action-footer">
        <FormKit type="submit" label="Enviar" />
      </div>
    </FormKit>
  </div> -->
</template>

<script setup>
const handleSubmit = (formData) => {
  console.log('Dados do formulário:', formData)
}
</script>

<style>
.main-data .id-info,
.main-data .id-info div,
.main-data .contact,
.main-data .contact div,
.docs-data,
.additional-data div,
.health-plan-data,
.address-data div {
  display: flex;
}
</style>
