
<script setup lang="ts">
import { ref } from 'vue'
import Search from '@/components/Search/Search.vue';
import Modal from '@/components/Modal/Modal.vue';


const contactModal = ref();
const contactTitle = ref('');
const contactEmail = ref('');
const contactPhone = ref('');
const contactPhoneSafe = ref('');

const openContact = (event: Event):void => {
  const target = event.target as EventTarget | null;
  if (target instanceof HTMLOptionElement) {
    console.log('Opening contact: ' + target.value + '\nPhone: ' + target.dataset.phone + '\nEmail: ' + target.dataset.email);

    contactTitle.value = target.value;
    contactEmail.value = target.dataset.email ?? '';
    contactPhone.value = target.dataset.phone ?? '';
    contactPhoneSafe.value = target.dataset.phone?.replace(/ /g, '') ?? '';
    contactModal.value.showModal();
  }
}
</script>

<template>


  <label for="contact-search" class="mw-100 mb-4"><span class="visually-hidden">Search contacts</span>
    <Search class="search--stylised search--sm">
      <span class="visually-hidden">Search iamproperty contact book</span>
      <input type="text" name="contact-search" autocomplete="off" aria-autocomplete="none" list="contacts" class="input--sm box-shadow w-100 mw-100" placeholder="Search iamproperty contact book"/>
      <button slot="suffix" class="suffix me-0 mb-0 fa-regular fa-address-book" title="Search"></button>
      <datalist id="contacts">
        <option value="Auction Specialist team" data-phone="0191 234 5678" data-email="auction@iamproperty.com" @click="openContact"></option>
        <option value="Movebutler compliance team" data-phone="0191 234 5678" data-email="auction@iamproperty.com" @click="openContact"></option>
      </datalist>
    </Search>
  </label>

  <dialog id="modal-contact" ref="contactModal">
    <Modal>
      <span class="h3">{{ contactTitle }}</span>
      <p><strong>Phone:</strong> <a :href="`tel:${ contactPhoneSafe }`" target="_blank">{{ contactPhone }}</a></p>
      <p><strong>Email:</strong> <a :href="`mailto:${ contactEmail }`" target="_blank">{{ contactEmail }}</a></p>
    </Modal>
  </dialog>

</template>
