import S from '../../../js/components/tabs/tabs.component.min';
import { trackComponent, trackComponentRegistered } from '../_global';

trackComponentRegistered('iam-calendar');

class iamCalendar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    const loadCSS = `@import "${assetLocation}/css/components/calendar.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${loadCSS}
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    </style>


<select name="view" id="view">
  <option value="month">Month</option>
  <option value="week">Week</option>
  <option value="day">Day</option>
  <option value="list">List</option>
</select>


<label for="date">Date:
<input type="date" id="date" name="date" />
</label>

<button id="prev-button">previous</button>

<button id="next-button">Next</button>

<button id="today-button">Today</button>

    <div class="calendar__toolbar">
      <span class="calendar__title"></span>
    </div>

    <div class="calendar" part="calendar">
      <table>

        <thead>

        </thead>
        <tbody>

        </tbody>
      </table>
      <slot></slot>
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));


    this.monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    this.dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    this.english_ordinal_rules = new Intl.PluralRules("en", {type: "ordinal"});
    this.suffixes = {
        one: "st",
        two: "nd",
        few: "rd",
        other: "th"
    };
  }

  createThead(sundayFirst: false): string {

    if(sundayFirst)
      return `<tr>
    <th class="sunday"><span class="long-day-name">Sunday</span><span class="short-day-name" role="presentation">Sun</span></th>
    <th class="monday"><span class="long-day-name">Monday</span><span class="short-day-name" role="presentation">Mon</span></th>
    <th class="tuesday"><span class="long-day-name">Tuesday</span><span class="short-day-name" role="presentation">Tues</span></th>
    <th class="wednesday"><span class="long-day-name">Wednesday</span><span class="short-day-name" role="presentation">Wed</span></th>
    <th class="thursday"><span class="long-day-name">Thursday</span><span class="short-day-name" role="presentation">Thurs</span></th>
    <th class="friday"><span class="long-day-name">Friday</span><span class="short-day-name" role="presentation">Fri</span></th>
    <th class="saturday"><span class="long-day-name">Saturday</span><span class="short-day-name" role="presentation">Sat</span></th>
  </tr>`;
      
    return `<tr>
    <th class="monday"><span class="long-day-name">Monday</span><span class="short-day-name" role="presentation">Mon</span></th>
    <th class="tuesday"><span class="long-day-name">Tuesday</span><span class="short-day-name" role="presentation">Tues</span></th>
    <th class="wednesday"><span class="long-day-name">Wednesday</span><span class="short-day-name" role="presentation">Wed</span></th>
    <th class="thursday"><span class="long-day-name">Thursday</span><span class="short-day-name" role="presentation">Thurs</span></th>
    <th class="friday"><span class="long-day-name">Friday</span><span class="short-day-name" role="presentation">Fri</span></th>
    <th class="saturday"><span class="long-day-name">Saturday</span><span class="short-day-name" role="presentation">Sat</span></th>
    <th class="sunday"><span class="long-day-name">Sunday</span><span class="short-day-name" role="presentation">Sun</span></th>
</tr>`;
  }

  numberDaysInMonth(year, month): Date { 
    return new Date(year, month, 0).getDate(); 
  }

  getOrdinalNumber(number): string  {
    const category = this.english_ordinal_rules.select(number);
    const suffix = this.suffixes[category];
    return (number + suffix);
  }

  setToMonday( date ): Date {
    const day = date.getDay() || 7;  
    if( day !== 1 ) 
        date.setHours(-24 * (day - 1)); 
    return date;
  }

  setToSunday( date ): Date {

    const monday = this.setToMonday(date);
    const sunday = new Date(monday);

    sunday.setDate(sunday.getDate() + 6);
    return sunday;
  }

  getTitle(dateStr,view): string {

    const date = new Date(dateStr);
    const month = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDate();

    if(view == "week"){

      const monday = this.setToMonday(new Date(dateStr));
      const sunday = this.setToSunday(new Date(dateStr));

      const mondayMonth = monday.getMonth();
      const mondayYear = monday.getFullYear();
      const mondayDay = monday.getDate();

      const sundayMonth = sunday.getMonth();
      const sundayYear = sunday.getFullYear();
      const sundayDay = sunday.getDate();

      return `${this.getOrdinalNumber(mondayDay)} ${mondayMonth != sundayMonth ? this.monthArray[sundayMonth] : ''} ${mondayYear != sundayYear ? mondayYear : ''} - ${this.getOrdinalNumber(sundayDay)} ${this.monthArray[sundayMonth]} ${sundayYear}`;
    }
    
    if(view == "day"){
      
      return `${this.getOrdinalNumber(day)} ${this.monthArray[month]} ${year}`;
    }

    return `${this.monthArray[month]} ${year}`;
  }

  createCalendar(selectedDate, today, sundayFirst: false): string {

    const date = new Date(selectedDate);
    const month = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDate();
    const selectedDateStr = `${year}-${String(month+1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const daysThisMonth = this.numberDaysInMonth(year, month+1);

    const startOfMonth = new Date(`${year}-${String(month+1).padStart(2, "0")}-01`);
    const endOfMonth = new Date(`${year}-${String(month+1).padStart(2, "0")}-${daysThisMonth}`);
    const startDay = startOfMonth.getDay() != 0 ? startOfMonth.getDay() : 7;
    const endDay = endOfMonth.getDay() != 0 ? endOfMonth.getDay() : 7;

    const loopDays = daysThisMonth + startDay + (7 - endDay - 1);

    // Get the previous month
    const prevMonthDate = new Date(selectedDate);
    prevMonthDate.setMonth(prevMonthDate.getMonth() -1);
    const prevMonth = prevMonthDate.getMonth();
    const prevMonthYear = prevMonthDate.getFullYear();
    const daysPrevMonth = this.numberDaysInMonth(year, month);

    // Get the next month
    const nextMonthDate = new Date(selectedDate);
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
    const nextMonth = nextMonthDate.getMonth();
    const nextMonthYear = nextMonthDate.getFullYear();



    // Create tbody string by looping through the number of days in month plus some days before and after
    let tbodyContent = `<tr>`;

    for (let i = (sundayFirst ? 0 : 1); i <= loopDays; i++) {
      
      const loopDay = i - (startDay - 1);
      const loopDate = `${year}-${String(month+1).padStart(2, "0")}-${String(loopDay).padStart(2, "0")}`
      const dayOfWeek = i%7;

      tbodyContent += `<td class="${loopDate == today ? 'today' : ''} ${loopDate == selectedDateStr ? 'selected' : ''} ${i < startDay ? 'prev-month' : ''} ${loopDay > daysThisMonth ? 'next-month' : ''}">`;

      // prev month
      if(i < startDay){

        const adjustedLoopDay = daysPrevMonth - (startDay - 1 - i);
        const adjustedLoopDate = `${prevMonthYear}-${String(prevMonth+1).padStart(2, "0")}-${String(adjustedLoopDay).padStart(2, "0")}`
          
        tbodyContent += `<time datetime="${adjustedLoopDate}" title="${this.dayArray[dayOfWeek]} ${loopDay} ${this.monthArray[prevMonth]} ${year}"><span class="day-of-week">${this.dayArray[dayOfWeek]} </span><span class="day">${this.getOrdinalNumber(adjustedLoopDay)}</span> <span class="month">${this.monthArray[prevMonth]}</span></time><br/><br/>`;
        tbodyContent += this.addDay(adjustedLoopDate);
      }

      if(i >= startDay && loopDay <= daysThisMonth){
        
        tbodyContent += `<time datetime="${loopDate}" title="${this.dayArray[dayOfWeek]} ${loopDay} ${this.monthArray[month]} ${year}"><span class="day-of-week">${this.dayArray[dayOfWeek]} </span><span class="day">${this.getOrdinalNumber(loopDay)}</span> <span class="month">${this.monthArray[month]}</span></time><br/><br/>`;
        tbodyContent += this.addDay(loopDate);
      }

      // next month
      if(loopDay > daysThisMonth){

        const adjustedLoopDay = i - (startDay - 1) - daysThisMonth;
        const adjustedLoopDate = `${nextMonthYear}-${String(nextMonth+1).padStart(2, "0")}-${String(adjustedLoopDay).padStart(2, "0")}`
          
        tbodyContent += `<time datetime="${adjustedLoopDate}" title="${this.dayArray[dayOfWeek]} ${loopDay} ${this.monthArray[nextMonth]} ${year}"><span class="day-of-week">${this.dayArray[dayOfWeek]} </span><span class="day">${this.getOrdinalNumber(adjustedLoopDay)}</span> <span class="month">${this.monthArray[nextMonth]}</span></time><br/><br/>`;
        tbodyContent += this.addDay(adjustedLoopDate);
      }

      tbodyContent += '</td>';

      // Close row and start a new one
      if(((sundayFirst ? i+1 : i) % 7) === 0 && i != loopDays)
        tbodyContent += `</tr><tr>`;
    }
    tbodyContent += '</tr>';

    return tbodyContent;
  }

  addDay(day): string {

    return `<table class="table--day">
    <tr><th><span>All day</span></th><td datetime="${day}"></td></tr>
    <tr class="hour0"><th><span>12am</span></th><td datetime="${day}T00:00"></td></tr>
    <tr class="hour1"><th><span>1am</span></th><td datetime="${day}T01:00"></td></tr>
    <tr class="hour2"><th><span>2am</span></th><td datetime="${day}T02:00"></td></tr>
    <tr class="hour3"><th><span>3am</span></th><td datetime="${day}T03:00"></td></tr>
    <tr class="hour4"><th><span>4am</span></th><td datetime="${day}T04:00"></td></tr>
    <tr class="hour5"><th><span>5am</span></th><td datetime="${day}T05:00"></td></tr>
    <tr class="hour6"><th><span>6am</span></th><td datetime="${day}T06:00"></td></tr>
    <tr class="hour7"><th><span>7am</span></th><td datetime="${day}T07:00"></td></tr>
    <tr class="hour8"><th><span>8am</span></th><td datetime="${day}T08:00"></td></tr>
    <tr class="hour9"><th><span>9am</span></th><td datetime="${day}T09:00"></td></tr>
    <tr class="hour10"><th><span>10am</span></th><td datetime="${day}T10:00"></td></tr>
    <tr class="hour11"><th><span>11am</span></th><td datetime="${day}T11:00"></td></tr>
    <tr class="hour12"><th><span>12pm</span></th><td datetime="${day}T12:00"></td></tr>
    <tr class="hour13"><th><span>1pm</span></th><td datetime="${day}T13:00"></td></tr>
    <tr class="hour14"><th><span>2pm</span></th><td datetime="${day}T14:00"></td></tr>
    <tr class="hour15"><th><span>3pm</span></th><td datetime="${day}T15:00"></td></tr>
    <tr class="hour16"><th><span>4pm</span></th><td datetime="${day}T16:00"></td></tr>
    <tr class="hour17"><th><span>5pm</span></th><td datetime="${day}T17:00"></td></tr>
    <tr class="hour18"><th><span>6pm</span></th><td datetime="${day}T18:00"></td></tr>
    <tr class="hour19"><th><span>7pm</span></th><td datetime="${day}T19:00"></td></tr>
    <tr class="hour20"><th><span>8pm</span></th><td datetime="${day}T20:00"></td></tr>
    <tr class="hour21"><th><span>9pm</span></th><td datetime="${day}T21:00"></td></tr>
    <tr class="hour22"><th><span>10pm</span></th><td datetime="${day}T22:00"></td></tr>
    <tr class="hour23"><th><span>11pm</span></th><td datetime="${day}T23:00"></td></tr>
    </table>`;
  }

  /*
  getWeekNumber(d): string {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return weekNo;
  }
  */

  addEvents(): void {


    function adjustEvent(component, element, continued: false): void {

      const datetime = element.getAttribute('datetime');

      const date = new Date(datetime);
      const dayOfWeek = date.getDay() ? date.getDay(): 7;

      const timeTd = component.shadowRoot.querySelector(`.table--day td[datetime="${datetime}"]`);
      const dateTd = timeTd?.parentElement?.closest('td');

      element.setAttribute('slot',datetime);
      
      // Add matching slot to the event element to have it show in the correct place on the calendar
      if(timeTd){

        if(!timeTd.querySelector('slot'))
          timeTd.insertAdjacentHTML('afterbegin',`<slot name="${datetime}" class="${continued ? 'continued': ''}"></slot>`)


      }

      // Add CSS properties so we can control the size of the event elements
      if(element.hasAttribute('data-hours'))
        element.style.setProperty('--event-height',`${element.getAttribute('data-hours')}rem`);
      
      if(element.hasAttribute('data-days') && !element.classList.contains('processed')){

        const eventDayTotal = element.getAttribute('data-days')


        element.style.setProperty('--event-width',`${eventDayTotal * 100}%`);
      
        // Deal with days wrapping onto new week
        // - Set a max width one the original 
        element.style.setProperty('--event-max-width',`${(8 - dayOfWeek) * 100}%`);

        // - duplicate the original and add to new week
        if(eventDayTotal - (8 - dayOfWeek) > 0){

          element.setAttribute('data-days',(8 - dayOfWeek));

          const difference = eventDayTotal - (8 - dayOfWeek);

          const cloneElement = element.cloneNode(true);

          cloneElement.setAttribute('data-days',difference);


          const newDate = new Date(datetime);
          newDate.setDate(newDate.getDate() + parseInt(element.getAttribute('data-days')));


          const newMonth = newDate.getMonth();
          const newYear = newDate.getFullYear();
          const newDay = newDate.getDate();

          
          const strCloneEvent = `${newYear}-${String(newMonth+1).padStart(2, "0")}-${String(newDay).padStart(2, "0")}`;


          cloneElement.setAttribute('data-original-datetime',cloneElement.getAttribute('datetime'));
          cloneElement.setAttribute('datetime',strCloneEvent);
          //cloneElement.classList.add('continued');

          element.after(cloneElement);
          adjustEvent(component, cloneElement,true);
        }
        else {
  
          for (let i = 1; i < eventDayTotal; i++) {
            
            const cloneElement = element.cloneNode(true);

            cloneElement.removeAttribute('data-days');
            cloneElement.removeAttribute('style');
              
            cloneElement.classList.add('continued');
            cloneElement.classList.add('processed');
              

            const newDate = new Date(datetime);
            newDate.setDate(newDate.getDate() + i);


            const newMonth = newDate.getMonth();
            const newYear = newDate.getFullYear();
            const newDay = newDate.getDate();

            const strCloneEvent = `${newYear}-${String(newMonth+1).padStart(2, "0")}-${String(newDay).padStart(2, "0")}`;


            cloneElement.setAttribute('data-original-datetime',cloneElement.getAttribute('datetime'));
            cloneElement.setAttribute('datetime',strCloneEvent);


            element.after(cloneElement);
            adjustEvent(component, cloneElement, true)
          }


          console.log(element.getAttribute('data-days'));

          console.log(element);
        }

        element.classList.add('processed');
      }

      // Work out if we need to offset the start of displaying the events due to previous days overlapping
      if(dateTd){
        dateTd.setAttribute('data-events',parseInt(timeTd.getAttribute('data-events') ? timeTd.getAttribute('data-events') : 0)+1);
        const prevDateCell = dateTd?.previousSibling;

        if(prevDateCell){
          dateTd.style.setProperty('--event-offset',`${prevDateCell.getAttribute('data-events') ? prevDateCell.getAttribute('data-events') : 0}rem`);
        }
      }
    }


    Array.from(this.querySelectorAll('button[datetime]')).forEach(element => {
      
      adjustEvent(this, element);
    });
  }

  paginateDate(direction, view, currentDate): string {

    if(view == "month") {

      const selectedDate = new Date(currentDate);

      if(direction == "next")
        selectedDate.setMonth(selectedDate.getMonth() + 1);
      else
        selectedDate.setMonth(selectedDate.getMonth() - 1);

      const month = selectedDate.getMonth() + 1;
      const year = selectedDate.getFullYear();

      const strNextMonth = `${year}-${String(month).padStart(2, "0")}-01`;
      
      return strNextMonth;
    }
    else if(view == "week") {

      //const selectedDate = new Date(currentDate);
      const monday = this.setToMonday(new Date(currentDate));

      if(direction == "next")
        monday.setDate(monday.getDate() + 7);
      else
        monday.setDate(monday.getDate() -7);


      console.log(monday);

      const date = monday.getDate();
      const month = monday.getMonth() + 1;
      const year = monday.getFullYear();
      const strNextWeek = `${year}-${String(month).padStart(2, "0")}-${String(date).padStart(2, "0")}`;

      return strNextWeek;
    }
    const nextDay = new Date(currentDate);

    if(direction == "next")
      nextDay.setDate(nextDay.getDate() + 1);
    else
      nextDay.setDate(nextDay.getDate() - 1);

    const date = nextDay.getDate();
    const month = nextDay.getMonth() + 1;
    const year = nextDay.getFullYear();
    const strNextDay = `${year}-${String(month).padStart(2, "0")}-${String(date).padStart(2, "0")}`;
    
    return strNextDay;
  }

  connectedCallback(): void {

    const title = this.shadowRoot?.querySelector('.calendar__title');
    const tbody = this.shadowRoot?.querySelector('tbody');
    const thead = this.shadowRoot?.querySelector('thead');
    const datePicker = this.shadowRoot?.querySelector(`#date`);
    const viewPicker = this.shadowRoot?.querySelector(`#view`);

    const todayButton = this.shadowRoot?.querySelector('#today-button');
    const prevButton = this.shadowRoot?.querySelector('#prev-button');
    const nextButton = this.shadowRoot?.querySelector('#next-button');

    const sundayFirst = this.hasAttribute('data-sunday-first');

    // set the table head
    thead?.innerHTML = this.createThead(sundayFirst);


    // Get a formatted version of todays date
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const strToday = `${year}-${String(month+1).padStart(2, "0")}-${String(date).padStart(2, "0")}`;

    
    this.setAttribute('data-view', "month");

    // Add calendar events
    title?.innerHTML = this.getTitle(strToday,viewPicker.value);
    tbody?.innerHTML = this.createCalendar(strToday, strToday, sundayFirst);
    this.addEvents();

    datePicker.value = strToday;
    datePicker?.addEventListener('change', ()=> {

      title?.innerHTML = this.getTitle(datePicker.value,viewPicker.value);
      tbody?.innerHTML = this.createCalendar(datePicker.value, strToday);
      this.addEvents();
    });

    viewPicker?.addEventListener('change', ()=> {

      title?.innerHTML = this.getTitle(datePicker.value,viewPicker.value);
      this.setAttribute('data-view', viewPicker.value);
    });

    todayButton?.addEventListener('click', ()=> {

      datePicker.value = strToday;
      title?.innerHTML = this.getTitle(datePicker.value,viewPicker.value);
      tbody?.innerHTML = this.createCalendar(datePicker.value, strToday);
      this.addEvents();
    });

    prevButton?.addEventListener('click', ()=> {

      datePicker.value = this.paginateDate("prev",viewPicker.value,datePicker.value);
      title?.innerHTML = this.getTitle(datePicker.value,viewPicker.value);
      tbody?.innerHTML = this.createCalendar(datePicker.value, strToday);
      this.addEvents();
    });

    nextButton?.addEventListener('click', ()=> {

      datePicker.value = this.paginateDate("next",viewPicker.value,datePicker.value);
      title?.innerHTML = this.getTitle(datePicker.value,viewPicker.value);
      tbody?.innerHTML = this.createCalendar(datePicker.value, strToday);
      this.addEvents();
    });

    // TODO
    trackComponent(this, 'iam-calendar', [
      'pip-clicked',
      'next-clicked',
      'prev-clicked',
      'slider-changed',
    ]);
  }
}

export default iamCalendar;
