<script setup lang="ts">
  import { ref } from 'vue';
  import Calendar from '@/components/Calendar/Calendar.vue';
  import Menu from '@/components/Menu/Menu.vue';

  import TrackEvents from '../TrackEvents.vue';

  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/cards-header.png';

  const eventTitle = ref();
  const eventDate = ref();
  const eventContent = ref();

  const openAddEvent = (event): void => {
    event.preventDefault();

    (document.querySelector('#modal-add-event') as HTMLDialogElement).showModal();
  };

  const saveEvent = (): void => {
    console.log('hello');

    (document.querySelector('iam-calendar') as HTMLDialogElement).insertAdjacentHTML(
      'beforeend',
      `
    <button datetime="${eventDate.value}">
      ${eventTitle.value}
      <span class="tooltip__content">
        ${eventTitle.value}
        ${eventContent.value}
      </span>
    </button>
    `
    );

    (document.querySelector('#modal-add-event') as HTMLDialogElement).close();
  };

  const editEvent = (event): void => {
    let button;

    if (event.target.matches('button')) {
      button = event.target;
    } else if (event.target.closest('button')) {
      button = event.target.closest('button');
    } else {
      return;
    }

    console.log(button);
  };

  const setAttributes = (event): void => {
    const form = document.querySelector('form#calendar-filters');
    const calendar = document.querySelector('iam-calendar');
    const calendarNames = [];

    console.log(form);

    if (!form || !calendar) return;

    calendar.removeAttribute('style');

    Array.from(form.querySelectorAll('input[name="event-type"]')).forEach((input, index) => {
      if (input?.checked) {
        calendar.removeAttribute(`data-hide-${input.value}`);
      } else {
        calendar.setAttribute(`data-hide-${input.value}`, 'true');
      }
    });

    Array.from(form.querySelectorAll('fieldset.calendar-option')).forEach((fieldset, index) => {
      const input = fieldset.querySelector('input[type="checkbox"]');
      const colour = fieldset.querySelector('select option:checked');

      if (input?.checked) {
        const calendarName = fieldset.querySelector('input[type]').value;

        calendarNames.push(calendarName);

        calendar.style.setProperty(`--event-colour-${index + 1}`, `var(${colour.value})`);
      }
    });

    calendar.setAttribute('data-calendars', calendarNames.join(','));
  };

  const openMenu = (event): void => {
    console.log(event.detail.element);

    const popover = document.querySelector('iam-menu[popover]');

    const top = event.detail.clientY;
    const left = event.detail.clientX;

    popover.style.setProperty('top', top + 'px');
    popover.style.setProperty('left', left + 'px');

    popover.showPopover();
  };
</script>

<template>
  <TrackEvents
    selector="iam-calendar"
    :events="[
      'right-click',
      'open-filters',
      'change-view',
      'change-date',
      'change-date-today',
      'change-date-previous',
      'change-date-next',
      'open-settings',
      'close-settings',
      'save-settings',
    ]"
  ></TrackEvents>

  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Calendar</h1>
    </DSHeader>

    <div class="md-col-end-3">
      <button class="btn btn-primary" @click="openAddEvent">Add event</button>

      <br />
      <br />

      <form id="calendar-filters" @change="setAttributes">
        <label class="mb-0">
          Confirmed
          <input type="checkbox" name="event-type" value="confirmed" checked />
        </label>
        <label class="mb-0">
          Unconfirmed
          <input type="checkbox" name="event-type" value="unconfirmed" checked />
        </label>
        <label>
          Cancelled
          <input type="checkbox" name="event-type" value="cancelled" checked />
        </label>

        <h3>Calendars</h3>

        <fieldset class="calendar-option">
          <label>
            John Smith
            <input type="checkbox" name="JohnSmith" value="John Smith" checked />
          </label>
          <select name="event-colour" class="btn btn-action event-colours">
            <button><span></span><selectedcontent></selectedcontent></button>

            <option value="--wider-colour-1" selected>Grey</option>
            <option value="--wider-colour-2">Violet</option>
            <option value="--wider-colour-3">Aqua</option>
            <option value="--wider-colour-4">Green</option>
            <option value="--wider-colour-17">Yellow</option>
            <option value="--wider-colour-6">Navy</option>
            <option value="--wider-colour-7">Orange</option>
            <option value="--wider-colour-14">Cyan</option>
            <option value="--wider-colour-10">Slate</option>
            <option value="--wider-colour-23">Teal</option>
          </select>
        </fieldset>

        <fieldset class="calendar-option">
          <label>
            Inspections
            <input type="checkbox" name="Inspections" value="Inspections" checked />
          </label>
          <select name="event-colour" class="btn btn-action event-colours">
            <button><span></span><selectedcontent></selectedcontent></button>

            <option value="--wider-colour-1">Grey</option>
            <option value="--wider-colour-2" selected>Violet</option>
            <option value="--wider-colour-3">Aqua</option>
            <option value="--wider-colour-4">Green</option>
            <option value="--wider-colour-17">Yellow</option>
            <option value="--wider-colour-6">Navy</option>
            <option value="--wider-colour-7">Orange</option>
            <option value="--wider-colour-14">Cyan</option>
            <option value="--wider-colour-10">Slate</option>
            <option value="--wider-colour-23">Teal</option>
          </select>
        </fieldset>
      </form>

      <br />
      <br />
    </div>

    <dialog id="modal-add-event">
      <span class="h3">Add event</span>

      <label>
        Title
        <input v-model="eventTitle" type="text" name="title" required />
      </label>

      <label>
        Date
        <input v-model="eventDate" type="datetime-local" name="datetime" required />
      </label>

      <label>
        Tooltip content
        <textarea v-model="eventContent" name="tooltip"></textarea>
      </label>
      <button class="btn btn-primary" @click="saveEvent">Save event</button>
    </dialog>

    <Menu class="menu--sm" popover>
      <span>Heading (optional)</span>
      <button><i class="fa-regular fa-edit"></i> Edit</button>
      <button><i class="fa-solid fa-clone"></i> Duplicate</button>
      <hr />
      <button><i class="fa-solid fa-trash"></i> Delete</button>
    </Menu>

    <Calendar
      class="md-col-start-4 calendar--multi"
      data-calendars="John Smith, Inspections"
      data-views="day,week,month"
      data-view="month"
      data-filter
      @click="editEvent"
      @right-click="openMenu"
    >
      <button datetime="2025-06-24T10:10" data-event-type="Appraisal" class="tentative">
        Appraisal: 1 Lake Avenue, Newcastle upon Tyne, Tyne and Wear, NE13 7FH, UK
        <span class="tooltip__content">
          Appraisal: 1 Lake Avenue, Newcastle upon Tyne, Tyne and Wear, NE13 7FH, UK<br />
          Calendar type: Sales<br />
          User: John Smith<br />
          Event type: Inspection<br />
          Time: 9:30 - 10:30
        </span>
      </button>

      <button
        datetime="2025-07-21"
        data-days="4"
        data-event-type="Inspection"
        data-calendar="John Smith"
        class="cancelled"
      >
        Appraisal: 1 Lake Avenue, Newcastle upon Tyne, Tyne and Wear, NE13 7FH, UK
        <span class="tooltip__content">
          Appraisal: 1 Lake Avenue, Newcastle upon Tyne, Tyne and Wear, NE13 7FH, UK<br />
          Calendar type: Sales<br />
          User: John Smith<br />
          Event type: Inspection<br />
          Time: 9:30 - 10:30
        </span>
      </button>

      <button datetime="2025-06-26" data-days="1" data-event-type="Inspection" data-calendar="Inspections">
        Appraisal: 1 Lake Avenue, Newcastle upon Tyne, Tyne and Wear, NE13 7FH, UK
        <span class="tooltip__content">
          Appraisal: 1 Lake Avenue, Newcastle upon Tyne, Tyne and Wear, NE13 7FH, UK<br />
          Calendar type: Sales<br />
          User: John Smith<br />
          Event type: Inspection<br />
          Time: 9:30 - 10:30
        </span>
      </button>
    </Calendar>
  </main>
</template>
<style lang="scss" scoped>
  #calendar-filters fieldset {
    display: flex;
    align-items: center;

    > * {
      margin-bottom: 0;
    }
  }
</style>
