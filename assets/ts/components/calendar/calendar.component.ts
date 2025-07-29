import { trackComponent, trackComponentRegistered } from '../_global';
import { uniqueID } from '../../modules/helpers';

trackComponentRegistered('iam-calendar');

class iamCalendar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    const loadCSS = `@import "${assetLocation}/css/components/calendar.component.css";`;


    const weekViewOnly = `<table class="table--day" role="presentation"><tbody>
      <tr class="allday"><th>All day</th></tr>
      <tr><th data-hour="0">00</th></tr>
      <tr><th data-hour="1">01</th></tr>
      <tr><th data-hour="2">02</th></tr>
      <tr><th data-hour="3">03</th></tr>
      <tr><th data-hour="4">04</th></tr>
      <tr><th data-hour="5">05</th></tr>
      <tr><th data-hour="6">06</th></tr>
      <tr><th data-hour="7">07</th></tr>
      <tr><th data-hour="8">08</th></tr>
      <tr><th data-hour="9">09</th></tr>
      <tr><th data-hour="10">10</th></tr>
      <tr><th data-hour="11">11</th></tr>
      <tr><th data-hour="12">12</th></tr>
      <tr><th data-hour="13">13</th></tr>
      <tr><th data-hour="14">14</th></tr>
      <tr><th data-hour="15">15</th></tr>
      <tr><th data-hour="16">16</th></tr>
      <tr><th data-hour="17">17</th></tr>
      <tr><th data-hour="18">18</th></tr>
      <tr><th data-hour="19">19</th></tr>
      <tr><th data-hour="20">20</th></tr>
      <tr><th data-hour="21">21</th></tr>
      <tr><th data-hour="22">22</th></tr>
      <tr><th data-hour="23">23</th></tr>
      </tbody></table>`;

    const template = document.createElement('template');


    template.innerHTML = `
    <style>
    ${loadCSS}
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    </style>
    <div class="calendar__container">

      <div class="calendar__controls">
        <button id="today-button" class="btn btn-action">Today</button>


        <button id="prev-button" class="btn btn-action fa-chevron-left border-0"><span class="visually-hidden">previous</span></button>
        <div class="calendar__datepicker">
          <span class="calendar__title"></span>
          <input type="date" id="date" name="date" />
        </div>
        <button id="next-button" class="btn btn-action fa-chevron-right border-0"><span class="visually-hidden">Next</span></button>
      
        <hr/>
  

        <select name="view" id="view" class="btn btn-action">

          <button>
            <selectedcontent></selectedcontent> <i class="fa-regular fa-chevron-down"></i>
          </button>

          <option value="month"><i class="fa-light fa-calendar-days"></i>Month</option>
          <option value="week"><i class="fa-light fa-calendar-week"></i>Week</option>
          <option value="day"><i class="fa-light fa-calendar-day"></i>Day</option>
          <option value="list"><i class="fa-light fa-list"></i>List</option>
          <option value="year"><i class="fa-light fa-calendars"></i>Year</option>
        </select>

        <label class="tag tag--toggle"><input type="checkbox" name="split" value="true">Split view</label>

        <button id="filters-button" class="btn btn-action"><i class="fa-light fa-sliders"></i><span class="visually-hidden">Filters</span></button>

        <button id="settings-button" class="btn btn-action"><i class="fa-light fa-gear"></i><span class="visually-hidden">Settings</span></button>
        
      </div>

      <dialog id="settings">
        <button class="dialog__close">Close</button>
        <span class="h3">Calendar settings</span>

        <fieldset id="workday" class="mb-5">
        <label>Start time <span><input type="time" id="start-time" name="start-time" step="3600" value="08:00" /><span class="suffix fa-regular fa-clock" aria-hidden="true"></span></span></label>
        <label>End time <span><input type="time" id="end-time" name="end-time" step="3600" value="18:00" /><span class="suffix fa-regular fa-clock" aria-hidden="true"></span></span></label>

        </fieldset>

        <hr/>
        <fieldset>
          <span class="label">Show weekends</span>
          <input type="radio" name="weekends" id="weekends-yes" tabindex="-1">
          <label for="weekends-yes" class="d-inline-block">Yes</label>
          <input type="radio" name="weekends" id="weekends-no" tabindex="-1">
          <label for="weekends-no" class="d-inline-block">No</label>
        </fieldset>
        <hr/>
        <button class="btn btn-primary">Save settings</button>
        <button class="btn btn-secondary">Cancel</button>

      </dialog>

    
      <div class="calendar__wrapper">
        
        <div id="week-view-corner" class="calendar">
          <table>
            <thead>
            <tr>
              <th class="column-header">Empty</th>
            </tr>
            </thead>
            <tbody>
              <tr class="allday">
                <th>All day</th>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="week-view-header" class="calendar">
          <table>
            <thead>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>

        <div id="week-view-side">${weekViewOnly}</div>

        <div class="calendar month-wrapper" id="calendar" part="calendar">
          <table>
            <thead>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>

        <div id="year-view">
        </div>
      </div>


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

    this.calendars = ['Default']; // TO DO allow for these to be set via the component data attributes
    this.eventTypes = []; // TO DO allow for these to be set via the component data attributes

    this.pauseObserver = false;
  }

  createThead(sundayFirst: false): string {

    if(sundayFirst)
      return `<tr>
    <th class="column-header sunday"><span class="long-day-name">Sunday</span><span class="short-day-name" role="presentation">Sun</span></th>
    <th class="column-header monday"><span class="long-day-name">Monday</span><span class="short-day-name" role="presentation">Mon</span></th>
    <th class="column-header tuesday"><span class="long-day-name">Tuesday</span><span class="short-day-name" role="presentation">Tues</span></th>
    <th class="column-header wednesday"><span class="long-day-name">Wednesday</span><span class="short-day-name" role="presentation">Wed</span></th>
    <th class="column-header thursday"><span class="long-day-name">Thursday</span><span class="short-day-name" role="presentation">Thurs</span></th>
    <th class="column-header friday"><span class="long-day-name">Friday</span><span class="short-day-name" role="presentation">Fri</span></th>
    <th class="column-header saturday"><span class="long-day-name">Saturday</span><span class="short-day-name" role="presentation">Sat</span></th>
  </tr>`;
      
    return `<tr>
    <th class="column-header monday"><span class="long-day-name">Monday</span><span class="short-day-name" role="presentation">Mon</span></th>
    <th class="column-header tuesday"><span class="long-day-name">Tuesday</span><span class="short-day-name" role="presentation">Tues</span></th>
    <th class="column-header wednesday"><span class="long-day-name">Wednesday</span><span class="short-day-name" role="presentation">Wed</span></th>
    <th class="column-header thursday"><span class="long-day-name">Thursday</span><span class="short-day-name" role="presentation">Thurs</span></th>
    <th class="column-header friday"><span class="long-day-name">Friday</span><span class="short-day-name" role="presentation">Fri</span></th>
    <th class="column-header saturday"><span class="long-day-name">Saturday</span><span class="short-day-name" role="presentation">Sat</span></th>
    <th class="column-header sunday"><span class="long-day-name">Sunday</span><span class="short-day-name" role="presentation">Sun</span></th>
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
    const dayOfWeek = date.getDay() ? date.getDay(): 7;

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
    else if(view == "day"){
      
      return `${this.dayArray[dayOfWeek]} ${this.getOrdinalNumber(day)} ${this.monthArray[month]} ${year}`;
    }
    else if(view == "year"){
      
      return `${year}`;
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

    // Get calendars
    
    if(!this.hasAttribute('data-calendars')){
      Array.from(this.querySelectorAll('button[data-calendar]')).forEach((element) => {

        // Scan through the buttons and look forunique calendar names
        if(!(this.calendars.includes(element.getAttribute('data-calendar'))))
          this.calendars.push(element.getAttribute('data-calendar'));
      })
    }

    // Create tbody string by looping through the number of days in month plus some days before and after
    let tbodyContent = `<tr>`;

    for (let i = (sundayFirst ? 0 : 1); i <= loopDays; i++) {
      
      const loopDay = i - (startDay - 1);
      const loopDate = `${year}-${String(month+1).padStart(2, "0")}-${String(loopDay).padStart(2, "0")}`
      const dayOfWeek = i%7;

      tbodyContent += `<td class="day--${this.dayArray[dayOfWeek].toLowerCase()} ${loopDate == today ? 'today' : ''} ${loopDate == selectedDateStr ? 'selected' : ''} ${i < startDay ? 'prev-month' : ''} ${loopDay > daysThisMonth ? 'next-month' : ''}">`;

      // prev month days
      if(i < startDay){

        const adjustedLoopDay = daysPrevMonth - (startDay - 1 - i);
        const adjustedLoopDate = `${prevMonthYear}-${String(prevMonth+1).padStart(2, "0")}-${String(adjustedLoopDay).padStart(2, "0")}`
          
        tbodyContent += `<time class="column-header" datetime="${adjustedLoopDate}" title="${this.dayArray[dayOfWeek]} ${loopDay} ${this.monthArray[prevMonth]} ${year}"><span class="day-of-week">${this.dayArray[dayOfWeek]} </span><span class="day">${adjustedLoopDay}</span> <span class="month">${this.monthArray[prevMonth]}</span></time>`;
        tbodyContent += this.addDay(adjustedLoopDate, this.calendars);
      }

      if(i >= startDay && loopDay <= daysThisMonth){
        
        tbodyContent += `<time class="column-header" datetime="${loopDate}" title="${this.dayArray[dayOfWeek]} ${loopDay} ${this.monthArray[month]} ${year}"><span class="day-of-week">${this.dayArray[dayOfWeek]} </span><span class="day">${loopDay}</span> <span class="month">${this.monthArray[month]}</span></time>`;
        tbodyContent += this.addDay(loopDate, this.calendars);
      }

      // next month days
      if(loopDay > daysThisMonth){

        const adjustedLoopDay = i - (startDay - 1) - daysThisMonth;
        const adjustedLoopDate = `${nextMonthYear}-${String(nextMonth+1).padStart(2, "0")}-${String(adjustedLoopDay).padStart(2, "0")}`
          
        tbodyContent += `<time class="column-header" datetime="${adjustedLoopDate}" title="${this.dayArray[dayOfWeek]} ${loopDay} ${this.monthArray[nextMonth]} ${year}"><span class="day-of-week">${this.dayArray[dayOfWeek]} </span><span class="day">${adjustedLoopDay}</span> <span class="month">${this.monthArray[nextMonth]}</span></time>`;
        tbodyContent += this.addDay(adjustedLoopDate, this.calendars);
      }

      tbodyContent += '</td>';

      // Close row and start a new one
      if(((sundayFirst ? i+1 : i) % 7) === 0 && i != loopDays){
        tbodyContent += `</tr><tr>`;
      }
        
    }
    tbodyContent += '</tr>';

    return tbodyContent;
  }

  addDay(day, calendars: []): string {

    let htmlTable = '<table class="table--day">';
    htmlTable += `<thead><tr><th>time</th>`;
    calendars.forEach(calendarTitle => {
      
      htmlTable += `<th class="column-header">${calendarTitle}</th>`;
    });
    htmlTable += `</tr></thead>`;

    htmlTable += `<tbody>`;
    htmlTable += `<tr class="allday"><th>All day</th>`;
    calendars.forEach(calendarTitle => {
      
      htmlTable += `<td datetime="${day}" data-calendar="${calendarTitle}"><span datetime="${day}"></span></td>`;
    });
    htmlTable += `</tr>`;

    for (let i = 0; i < 24; i++) {

      htmlTable += `<tr class="hour${i}"><th data-hour="${i}">${i}${i < 12 ? 'am' : 'pm'}</th>`;
      calendars.forEach(calendarTitle => {
      
        htmlTable += `<td datetime="${day}T${String(i).padStart(2, "0")}:00" data-calendar="${calendarTitle}"><span datetime="${day}T${String(i).padStart(2, "0")}:00"></span><span datetime="${day}T${String(i).padStart(2, "0")}:15"></span><span datetime="${day}T${String(i).padStart(2, "0")}:30"></span><span datetime="${day}T${String(i).padStart(2, "0")}:45"></span></td>`;
      });
      htmlTable += `</tr>`;
    }
    htmlTable += `</tbody>`;
    htmlTable += '</table>';

    return htmlTable;
  }

  addEvents(): void {

    function setDefaultEventValues(component, element, index): void {

      const datetime = element.getAttribute('datetime')
      const datetimeArr = datetime.split('T');
      let id = element.getAttribute('id');

      // Add ID
      if(!element.hasAttribute('id')){
        id = `event${uniqueID(index)}`;
        element.setAttribute('id',id);
      }

      // Wrap content in span for formatting in week/day view
      if(!element.querySelector('span:not(.tooltip__content')){
        element.innerHTML = `<span>${element.innerHTML}</span>`;
      }

      // Add event type enum so we can set the correct colours
      //if(!element.hasAttribute('data-event-type-enum') && element.hasAttribute('data-event-type')){

        const eventType = element.getAttribute('data-event-type');

        if(!component.eventTypes.includes(eventType))
          component.eventTypes.push(eventType);

        element.setAttribute('data-event-type-enum', component.eventTypes.indexOf(eventType) + 1);
      //}

      // Add calendar enum so we can set the correct colours
      if(element.hasAttribute('data-calendar')){

        const calendar = element.getAttribute('data-calendar');

        if(!component.calendars.includes(calendar))
          component.calendars.push(calendar);

        element.setAttribute('data-calendar-enum', component.calendars.indexOf(calendar) + 1);
      }
      
      if(!element.hasAttribute('data-calendar-enum')){
        element.setAttribute('data-calendar-enum', 1);
      }

      if(!element.hasAttribute('data-hours') && !element.hasAttribute('data-days')){

        if(datetimeArr[1]){
          element.setAttribute('data-hours', 1);
        }
        else {
          
          element.setAttribute('data-days', 1);
        }
      }



      let getRoundedDate = (minutes, d=new Date()) => {

        let ms = 1000 * 60 * minutes; // convert minutes to ms
        let roundedDate = new Date(Math.round(d.getTime() / ms) * ms);


        const newMonth = roundedDate.getMonth();
        const newYear = roundedDate.getFullYear();
        const newDay = roundedDate.getDate();
        const newMinutes = roundedDate.getMinutes();
        const newHour = roundedDate.getHours();

        const strRoundedDate = `${newYear}-${String(newMonth+1).padStart(2, "0")}-${String(newDay).padStart(2, "0")}T${String(newHour).padStart(2, "0")}:${String(newMinutes).padStart(2, "0")}`;


        return strRoundedDate;
      }


      if(datetimeArr[1]){
        element.setAttribute('data-start', datetimeArr[1]);
        element.querySelector(':scope > span').setAttribute('data-start', datetimeArr[1]);

        const roundedDatetime = getRoundedDate(15, new Date(datetime));
        element.setAttribute('datetime',roundedDatetime);


        console.log(roundedDatetime);
      }


      if(element.querySelector('.tooltip__content')){

        const tooltip = element.querySelector('.tooltip__content');

        tooltip.style.positionAnchor = `--${id}`;

        element.style.anchorName = `--${id}`
      }


      element.classList.add('defaults-added');
    }

    function adjustEvent(component, element, continued: false): void {

      const datetime = element.getAttribute('datetime');

      const date = new Date(datetime);
      const dayOfWeek = date.getDay() ? date.getDay(): 7;

      // Locate where we need to add slots for the buttons to go - We need duplicate slots for the split view and fixed header
      const timeTd = component.shadowRoot.querySelector(`.month-wrapper .table--day td:has(span[datetime="${datetime}"])${element.hasAttribute('data-calendar') ? `[data-calendar="${element.getAttribute('data-calendar').replace('_','')}"]` : ''}`);
      const timeTdHeader = component.shadowRoot.querySelector(`#week-view-header .table--day td:has(span[datetime="${datetime}"])${element.hasAttribute('data-calendar') ? `[data-calendar="${element.getAttribute('data-calendar').replace('_','')}"]` : ''}`);
      
      if(timeTdHeader && timeTdHeader.closest('tr').classList.contains("allday")){

        // Add the alldays slot for the fixed header 
        if(!timeTdHeader.querySelector(`slot[name="${datetime}${element.hasAttribute('data-calendar') ? `-${element.getAttribute('data-calendar').replace('_','')}` : ''}-header]"`)){
          timeTdHeader.querySelector(`span[datetime="${datetime}"]`).insertAdjacentHTML('beforeEnd',`<slot name="${datetime}${element.hasAttribute('data-calendar') ? `-${element.getAttribute('data-calendar').replace('_','')}` : ''}-header" class="${continued ? 'continued': ''}"></slot>`)
        }
      }
      
      
      const dateTd = timeTd?.parentElement?.closest('td');

      // original event needs a slot name adding
      element.setAttribute('slot',`${datetime}${element.hasAttribute('data-calendar') ? `-${element.getAttribute('data-calendar').replace('_','')}` : ''}`);
      
      // Add matching slot to the event element to have it show in the correct place on the calendar
      if(timeTd){

        // Add the default slot
        if(!timeTd.querySelector(`slot[name="${datetime}${element.hasAttribute('data-calendar') ? `-${element.getAttribute('data-calendar').replace('_','')}` : ''}"]`)){
          timeTd.querySelector(`span[datetime="${datetime}"]`).insertAdjacentHTML('beforeEnd',`<slot name="${datetime}${element.hasAttribute('data-calendar') ? `-${element.getAttribute('data-calendar').replace('_','')}` : ''}" class="${continued ? 'continued': ''}"></slot>`)
        }

        // Set the classes need to create the grey bars in the mobile month view
        const events = dateTd.hasAttribute('data-events') ? parseInt(dateTd.getAttribute('data-events')) : 0;
        let hours = dateTd.hasAttribute('data-hours') ? parseFloat(dateTd.getAttribute('data-hours')) : 0;
        hours += element.hasAttribute('data-hours') ? parseFloat(element.getAttribute('data-hours')) : 0;

        dateTd.setAttribute('data-events', parseInt(events) + 1);

        if((events + 1) > 2)
          dateTd.setAttribute('data-more', (parseInt(events) + 1) - 2);

        dateTd.setAttribute('data-hours', hours);
        
        dateTd.classList.add('has-event');

        if(timeTd.closest('tr').classList.contains('has-event'))
          timeTd.closest('tr').classList.add('multiple-event');
        else
          timeTd.closest('tr').classList.add('has-event');

        if(hours > 2)
          dateTd.classList.add('multi-events');

        if(hours > 4)
          dateTd.classList.add('busy-day');

        if(element.hasAttribute('data-days'))
          dateTd.classList.add('all-day');

        if(element.classList.contains('continued'))
          dateTd.classList.add('continued-day');
      }

      // Add CSS properties so we can control the size of the event elements for day and week view
      if(element.hasAttribute('data-hours'))
        element.style.setProperty('--event-height',`${parseInt(element.getAttribute('data-hours')) * (1.09375 * 4)}rem`);
      
      if(element.hasAttribute('data-days') && !element.classList.contains('processed')){

        const eventDayTotal = element.getAttribute('data-days')

        element.style.setProperty('--event-width',`${eventDayTotal * 100}%`);
        element.style.setProperty('--event-max-width',`${(8 - dayOfWeek) * 100}%`);
        element.classList.add('allday-event');


        // Create a duplicate event for each day the orginal 
        for (let i = 1; i < eventDayTotal; i++) {
          
          const cloneElement = element.cloneNode(true);
          cloneElement.removeAttribute('data-days');
          cloneElement.removeAttribute('style');
          cloneElement.classList.add('continued');
          cloneElement.classList.add('allday-event');

          
          const id = `event${uniqueID(i)}`;
          cloneElement.setAttribute('id',id);
          
          
          if(cloneElement.querySelector('.tooltip__content')){

            const tooltip = cloneElement.querySelector('.tooltip__content');
            tooltip.style.positionAnchor = `--${id}`;
            cloneElement.style.anchorName = `--${id}`
          }

            
          const newDate = new Date(datetime);
          newDate.setDate(newDate.getDate() + i);

          const newMonth = newDate.getMonth();
          const newYear = newDate.getFullYear();
          const newDay = newDate.getDate();
          const newDayOfWeek = newDate.getDay() ? newDate.getDay(): 7;

          const strCloneEvent = `${newYear}-${String(newMonth+1).padStart(2, "0")}-${String(newDay).padStart(2, "0")}`;

          cloneElement.setAttribute('data-original-datetime',element.getAttribute('datetime'));
          cloneElement.setAttribute('datetime',strCloneEvent);

          element.after(cloneElement); // Add after original
          adjustEvent(component, cloneElement, true);

          if(newDayOfWeek == 1){ // Monday

            cloneElement.style.setProperty('--event-width',`${(eventDayTotal - i) * 100}%`);
            cloneElement.style.setProperty('--event-max-width',`${(8 - newDayOfWeek) * 100}%`);

            cloneElement.classList.remove('continued');
          }
        }
      }

      // Add flag so we dont have to re-do the above
      element.classList.add('processed');
    }

    this.pauseObserver = true;

    Array.from(this.querySelectorAll('button[datetime]')).forEach((element, index) => {
      
      setDefaultEventValues(this,element,index);
      adjustEvent(this, element);

    });   
    
    setTimeout(() => {
      this.pauseObserver = false;
    }, "500");

  }

  addJSEvents(component): void {

    // Add events to the newly created calendar 
    const title = component.shadowRoot?.querySelector('.calendar__title');
    const datePicker = component.shadowRoot?.querySelector(`#date`);
    const viewPicker = component.shadowRoot?.querySelector(`#view`);
    const yearView = this.shadowRoot?.querySelector('#year-view');

    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const strToday = `${year}-${String(month+1).padStart(2, "0")}-${String(date).padStart(2, "0")}`;

    const tbody = component.shadowRoot?.querySelector('#calendar > table > tbody');

    // clicking on the day istelf
    Array.from(component.shadowRoot.querySelectorAll('.month-wrapper > table > tbody > tr > td:has(slot)')).forEach((element) => {

      element.addEventListener('click', (event) => {

        if(!event.target.matches('button')) {

          const elementDate = element.querySelector('time').getAttribute('datetime');
          datePicker.value = elementDate;

          Array.from(tbody.querySelectorAll(':scope > tr > td')).forEach((innerelement) => {
            innerelement.classList.remove('selected');
          });

          element.classList.add('selected');

          // Go to day if the in month view with out split view enabled

          if(component.shadowRoot.querySelector('[name="split"]:checked') && viewPicker.value == "month"){

            Array.from(component.querySelectorAll(`[data-slot]`)).forEach((button) => {
              button.setAttribute('slot',button.getAttribute('data-slot'));
            });

            Array.from(component.querySelectorAll(`[slot^="${datePicker.value}"]`)).forEach((button) => {

              button.setAttribute('data-slot',button.getAttribute('slot'));
              button.removeAttribute('slot');
            });

          }
          else if(!component.shadowRoot.querySelector('[name="split"]:checked') && viewPicker.value == "month"){
              
            viewPicker.value = "day";
            title?.innerHTML = this.getTitle(datePicker.value,viewPicker.value);
            component.scrollIntoPlace();
          }
          if(viewPicker.value == "year"){

            viewPicker.value = "month";
            yearView?.innerHTML = '';
            tbody?.innerHTML = component.createCalendar(datePicker.value, strToday);
            component.addEvents();
          }
        }
      });
    });

    // Drag and drop
    component.shadowRoot?.querySelectorAll(`#calendar .table--day td span`).forEach((element) => {

      element.addEventListener("dragover", (ev) => {
        ev.preventDefault();
        return false;
      });

      element.addEventListener("dragenter", (ev) => {
        ev.preventDefault();
        element.classList.add('dragover');
      });

      element.addEventListener("dragleave", (ev) => {
        ev.preventDefault();
        element.classList.remove('dragover');
      });

      element.addEventListener("drop", (ev) => {
        ev.preventDefault();
        
        const droppedElement = component.querySelector(`#${ev.dataTransfer.getData("text")}`);
        const td = element.closest('td');
        const datetime = element.getAttribute('datetime');

        element.classList.remove('dragover');

        // Add a new slot to te span if needed
        if(!element.querySelector(`slot[name="${datetime}${td.hasAttribute('data-calendar') ? `-${td.getAttribute('data-calendar').replace('_','')}]` : ''}]"`)){
          element.insertAdjacentHTML('beforeEnd',`<slot name="${datetime}${td.hasAttribute('data-calendar') ? `-${td.getAttribute('data-calendar').replace('_','')}` : ''}" class=""></slot>`)
        }

        // Update the slot attribute to match the slot the event has been dropped on
        droppedElement?.setAttribute('slot',`${datetime}${td.hasAttribute('data-calendar') ? `-${td.getAttribute('data-calendar').replace('_','')}` : ''}`)
      });

    });

    // Watch for the event being resized 
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
      
        if(entry.target.classList.contains('mousedown'))
          entry.target.classList.add('resizing');
      }
    });

    if(component.hasAttribute('data-drag')) {
      
      component.querySelectorAll(`button:not([draggable])`).forEach((element) => {

        element.setAttribute('draggable','true');
        element.addEventListener("dragstart", (ev) => {
          ev.dataTransfer.setData("text", ev.target.id); // save the id for when dropped
        });

        // set onbserver
        resizeObserver.observe(element);

        element.addEventListener("mousedown", (ev) => {
          element.classList.add('mousedown');
        });

        element.addEventListener("click", (ev) => {
          
          if(element.classList.contains('resizing')){
              
            ev.stopPropagation();
            ev.stopImmediatePropagation();

            element.classList.remove('mousedown');
            element.classList.remove('resizing');
            
            // Work out the evnt length in hours and set the height
            const span = this.shadowRoot.querySelector(`span[datetime="${element.getAttribute('datetime')}"]`);
            const spanStyles = window.getComputedStyle(span);
            const hours = Math.round(parseInt(element.style.height)/parseInt(spanStyles.getPropertyValue("height"))) / 4;

            element.setAttribute('data-hours',hours);
            element.style.setProperty('--event-height',`${hours * (1.09375 * 4)}rem`);

            element.style.height = "";

            // to do dispatch event
          }
        });

      });
    }

    component.querySelectorAll(`button`).forEach((element) => {

      element.addEventListener("contextmenu", (event) => { 

        event.preventDefault();
        event.stopPropagation();

      });
    });

    component.shadowRoot?.querySelectorAll(`.month-wrapper > table > tbody > tr > td`).forEach((element) => {

      element.addEventListener("contextmenu", (event) => { 

        event.preventDefault();

        const customEvent = new CustomEvent('right-click', {
        detail: {
          'clientX': event.clientX,
          'clientY': event.clientY,
          'element': element,
          'datetime': element.querySelector('time').getAttribute('datetime')
          },
        });

        console.log(element);
        this.dispatchEvent(customEvent);

      });
    });
  }

  paginateDate(direction, view, currentDate): string {

    if(view == "month" || view == "list") {

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
        monday.setDate(monday.getDate() - 7);


      const date = monday.getDate();
      const month = monday.getMonth() + 1;
      const year = monday.getFullYear();
      const strNextWeek = `${year}-${String(month).padStart(2, "0")}-${String(date).padStart(2, "0")}`;

      return strNextWeek;
    }
    else if(view == "year"){

      const selectedDate = new Date(currentDate);

      if(direction == "next")
        selectedDate.setYear(selectedDate.getFullYear() + 1);
      else
        selectedDate.setYear(selectedDate.getFullYear() - 1);

      const year = selectedDate.getFullYear();
      const month = selectedDate.getMonth() + 1;

      const strNextMonth = `${year}-${String(month).padStart(2, "0")}-01`;
      
      return strNextMonth;
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


  setWeekDay(): void {

    this.shadowRoot?.querySelectorAll('.out-of-hours').forEach(element => {
      element.classList.remove('out-of-hours');
    });


    const startTime = parseInt(this.shadowRoot?.querySelector('#start-time').value.split(':')[0]);
    const endTime = parseInt(this.shadowRoot?.querySelector('#end-time').value.split(':')[0]);

    this.shadowRoot?.querySelectorAll('[data-hour]').forEach(element => {

      const hour = parseInt(element.getAttribute('data-hour'));

      if(hour < startTime)
        element.classList.add('out-of-hours');

      if(hour >= endTime)
        element.classList.add('out-of-hours');
    });

  }

  scrollIntoPlace(): void {

    const fs = parseInt(window.getComputedStyle(document.body).getPropertyValue('font-size'));
    const startTime = parseInt(this.shadowRoot?.querySelector('#start-time').value.split(':')[0]);
    const scrollPos = startTime * (4.5 * fs);
    const viewPicker = this.shadowRoot?.querySelector(`#view`);
    const wrapper = this.shadowRoot.querySelector('.calendar__wrapper');

    // scroll
    if(viewPicker.value == "week")
      wrapper.scrollTo(0,scrollPos); // TO DO work out how much to scroll by
    else if(viewPicker.value == "day"){
      wrapper.scrollTo(0,scrollPos); // TO DO work out how much to scroll by
    }
  }

  setupSettings(): void {

    const settingsButton = this.shadowRoot?.querySelector('#settings-button');
    const settingsDialog = this.shadowRoot?.querySelector('#settings');

    // Setup the pre-defined attributes and display the form elements to match
    if(this.hasAttribute('data-hide-weekends'))
      settingsDialog.querySelector('#weekends-no').checked = true;
    else
      settingsDialog.querySelector('#weekends-yes').checked = true;

    if(this.hasAttribute('data-start-time'))
      settingsDialog.querySelector('#start-time').value = this.getAttribute('data-start-time');
    else
      this.setAttribute('data-start-time', settingsDialog.querySelector('#start-time').value);

    if(this.hasAttribute('data-end-time'))
      settingsDialog.querySelector('#end-time').value = this.getAttribute('data-end-time');
    else
      this.setAttribute('data-end-time', settingsDialog.querySelector('#end-time').value);


    // open dialog
    settingsButton?.addEventListener('click', ()=> {

      settingsDialog.showModal();
      settingsDialog.focus();

      const customEvent = new CustomEvent('open-settings');

      this.dispatchEvent(customEvent);
    });

    // On clicking the save button, adjust the data attributes
    settingsDialog?.addEventListener('click', (event)=> {

      if (event && event.target.matches('button')) {

        if(event.target.matches('.btn-primary')){
          
          if(settingsDialog.querySelector('#weekends-no:checked'))
            this.setAttribute('data-hide-weekends','true');
          else
            this.removeAttribute('data-hide-weekends');

              
          this.setAttribute('data-start-time', settingsDialog.querySelector('#start-time').value);
          this.setAttribute('data-end-time', settingsDialog.querySelector('#end-time').value);

          this.setWeekDay();

          const customEvent = new CustomEvent('save-settings');
          this.dispatchEvent(customEvent);

        }

        const customEvent = new CustomEvent('close-settings');
        this.dispatchEvent(customEvent);

        settingsDialog.close();
      }
    });
  }

  setTime(): void {

    if(!this.hasAttribute('data-time')){

      const today = new Date();
      
      const hour = today.getHours();
      const minute = today.getMinutes();
      const time = `${hour}:${minute}`;

      this.setAttribute('data-time',time);
    }

    if(this.hasAttribute('data-time')){

      const time = this.getAttribute('data-time');
      const hour = parseInt(time.split(':')[0]);
      const minute = parseInt(time.split(':')[1]);

      this.shadowRoot?.querySelectorAll(`[data-hour="${hour}"]`).forEach((element) => {

        element.setAttribute('data-time',time);
        element.classList.add('column-header');
        element.closest('tr')?.style.setProperty('--minute-pos',((minute / 60) * 100) + '%');
      });
    }
  }

  getYearView(selectedDate, today, sundayFirst: false): string {
    
    let yearViewStr = "";

    for(let i = 0; i < 12; i++){
  
      console.log(selectedDate);
      const selectedDateObj = new Date(selectedDate);
      const selectedYear = selectedDateObj.getFullYear();
      const selectedFormattedDate = `${selectedYear}-${String(i+1).padStart(2, "0")}-01`;

      yearViewStr += `<div class='month-wrapper'>
        <time class="column-header">${this.monthArray[i]}</time>
        <table>
          <thead>
            ${this.createThead(sundayFirst)}
          </thead>
          <tbody>
            ${this.createCalendar(selectedFormattedDate, today, sundayFirst)}
          </tbody>
        </table>
      </div>`;
    }

    return yearViewStr;
  }



  connectedCallback(): void {

    // To to transform the below into variables of component to make more re-usable
    const title = this.shadowRoot?.querySelector('.calendar__title');
    const tbody = this.shadowRoot?.querySelector('#calendar > table > tbody');
    const thead = this.shadowRoot?.querySelector('#calendar > table > thead');
    //const tbodySplit = this.shadowRoot?.querySelector('#split > table > tbody');
    //const theadSplit = this.shadowRoot?.querySelector('#split > table > thead');
    const weekViewHeader = this.shadowRoot?.querySelector('#week-view-header > table > tbody');
    const yearView = this.shadowRoot?.querySelector('#year-view');
    const datePicker = this.shadowRoot?.querySelector(`#date`);
    const viewPicker = this.shadowRoot?.querySelector(`#view`);
    const todayButton = this.shadowRoot?.querySelector('#today-button');
    const filtersButton = this.shadowRoot?.querySelector('#filters-button');
    const prevButton = this.shadowRoot?.querySelector('#prev-button');
    const nextButton = this.shadowRoot?.querySelector('#next-button');
    const sundayFirst = this.hasAttribute('data-sunday-first');

    const splitButton = this.shadowRoot?.querySelector(`[name="split"]`);
    
    

    // set the table head - starting by monday by default but can be changed to sunday
    thead?.innerHTML = this.createThead(sundayFirst);
    //theadSplit?.innerHTML = this.createThead(sundayFirst);

    // Get a formatted version of todays date
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const strToday = `${year}-${String(month+1).padStart(2, "0")}-${String(date).padStart(2, "0")}`;

    datePicker.value = strToday;

    // Setup the view, month being default
    if(this.hasAttribute('data-view'))
      viewPicker.value = this.getAttribute('data-view');
    else {
      this.setAttribute('data-view', "month");
      viewPicker.value = "month";
    }

    if(this.hasAttribute('data-views'))
      viewPicker?.setAttribute('data-views', this.getAttribute('data-views'));

    // Create the calendars
    if(this.hasAttribute('data-calendars')){

      this.calendars = this.getAttribute('data-calendars').split(',');

      this.calendars.forEach((item,index) => {
        this.calendars[index] = item.trim();
      });
    }



    // Setup the settings dialog
    this.setupSettings();

    

    // Setup the calendar then adjust and add events 
    title?.innerHTML = this.getTitle(strToday,viewPicker.value);

    const calendarHtml = this.createCalendar(strToday, strToday, sundayFirst);
    tbody?.innerHTML = calendarHtml;
    //tbodySplit?.innerHTML = calendarHtml;
    weekViewHeader?.innerHTML = calendarHtml;
    
    
    if(viewPicker.value == "year"){

      yearView?.innerHTML = this.getYearView(datePicker.value, strToday, sundayFirst);
      tbody?.innerHTML = '';
    }
    
    this.addEvents();
    this.addJSEvents(this);
    this.setWeekDay(); // Working hours
    this.setTime(); // Month and day view has a current time indicator
    this.scrollIntoPlace(); // Scroll into place - month and day view needs have the weekday hours in place
    
    // #region Add events for the basic top controls

    // Remove the slot attribute on selected days when in split mode
    splitButton?.addEventListener('change', ()=> {

      if(splitButton.checked){
        Array.from(this.querySelectorAll(`[slot^="${datePicker.value}"]`)).forEach((button) => {

          button.setAttribute('data-slot',button.getAttribute('slot'));
          button.removeAttribute('slot');
        });
      }
      else {
        Array.from(this.querySelectorAll(`[data-slot]`)).forEach((button) => {
          button.setAttribute('slot',button.getAttribute('data-slot'));
        });
      }
    });

    const resizeObserver = new ResizeObserver((entries) => {
    
      const splitButtonDisplayed = window.getComputedStyle(splitButton?.parentElement, null).display;
      if(splitButtonDisplayed == "none"){

        Array.from(this.querySelectorAll(`[data-slot]`)).forEach((button) => {
          button.setAttribute('slot',button.getAttribute('data-slot'));
        });
        splitButton.checked = false;
      }
    });

    resizeObserver.observe(this);

    viewPicker?.addEventListener('change', ()=> {

      title?.innerHTML = this.getTitle(datePicker.value,viewPicker.value);
      this.setAttribute('data-view', viewPicker.value);

      if(viewPicker.value == "week"){

        Array.from(this.querySelectorAll(`.allday-event`)).forEach((button) => {

          button.setAttribute('slot',button.getAttribute('slot')+'-header');
        });
      }
      else {
        Array.from(this.querySelectorAll(`.allday-event`)).forEach((button) => {

          button.setAttribute('slot',button.getAttribute('slot')?.replace('-header',''));
        });
      }


      if(viewPicker.value == "week" || viewPicker.value == "day")
        this.scrollIntoPlace();
      
      if(viewPicker.value != "month"){

        Array.from(this.querySelectorAll(`[data-slot^="${datePicker.value}"]`)).forEach((button) => {
          button.setAttribute('slot',button.getAttribute('data-slot'));
        });
      }

      if(viewPicker.value == "year"){

        yearView?.innerHTML = this.getYearView(datePicker.value, strToday, sundayFirst);
        tbody?.innerHTML = '';
        this.addEvents();
        this.addJSEvents(this);
        this.setWeekDay(); // Working hours
        this.setTime(); // Month and day view has a current time indicator
        this.scrollIntoPlace();
      }
      else if(tbody?.innerHTML == "") {
        yearView?.innerHTML = '';
        tbody?.innerHTML = this.createCalendar(datePicker.value, strToday);
        this.addEvents();
        this.addJSEvents(this);
        this.setWeekDay(); // Working hours
        this.setTime(); // Month and day view has a current time indicator
        this.scrollIntoPlace();
      }

      const customEvent = new CustomEvent('change-view', {
      detail: {
        'view': viewPicker.value,
        'date': datePicker.value
        },
      });

      this.dispatchEvent(customEvent);
    });

    
    function resetCalendar(component): void{

      if(viewPicker.value == "year"){

        yearView?.innerHTML = component.getYearView(datePicker.value, strToday, sundayFirst);
        tbody?.innerHTML = '';
        component.addEvents();
        component.addJSEvents(component);
        component.setWeekDay(); // Working hours
        component.setTime(); // Month and day view has a current time indicator
      }
      else {

        const calendarHtml = component.createCalendar(datePicker.value, strToday);
        tbody?.innerHTML = calendarHtml;
        //tbodySplit?.innerHTML = calendarHtml;
        weekViewHeader?.innerHTML = calendarHtml;

        component.addEvents();
        component.addJSEvents(component);
        component.setWeekDay();
        component.setTime();
      }
    }

    function updateCalendar(component): void{

      Array.from(component.shadowRoot.querySelectorAll('.selected')).forEach((element) => {
        element.classList.remove('selected');
      });

      Array.from(component.shadowRoot.querySelectorAll(`td:has(time[datetime="${datePicker.value}"]):not(.prev-month, .next-month)`)).forEach((element) => {
        element.classList.add('selected');
      });
    }

    datePicker?.addEventListener('change', ()=> {

      title?.innerHTML = this.getTitle(datePicker.value,viewPicker.value);

      if(this.shadowRoot.querySelector(`td:has(time[datetime="${datePicker.value}"]):not(.prev-month, .next-month)`))
        updateCalendar(this);
      else 
        resetCalendar(this);

      const customEvent = new CustomEvent('change-date', {
      detail: {
        'view': viewPicker.value,
        'date': datePicker.value
        },
      });

      this.dispatchEvent(customEvent);
    });

    filtersButton?.addEventListener('click', ()=> {

      const customEvent = new CustomEvent('open-filters',);
      this.dispatchEvent(customEvent);
    });

    // HTML Observer
    const htmlUpdated = (mutationList: any, observer: any): void => {

      


      observer.disconnect();

      console.log(this.pauseObserver);

      if(this.pauseObserver == false){
      
        for (const mutation of mutationList) {

          if (mutation.type == 'characterData' || (mutation.type == 'childList' && mutation.addedNodes.length) || mutation.type === 'attributes') {
            
            //resetCalendar(this);
            this.addEvents();
          }
        }
      }

      observer.observe(this, { childList: true, characterData: true, subtree: true, attributes: true });
    };

    const observer = new MutationObserver(htmlUpdated);
    observer.observe(this, { childList: true, characterData: true, subtree: true, attributes: true });

    todayButton?.addEventListener('click', ()=> {

      datePicker.value = strToday;
      title?.innerHTML = this.getTitle(datePicker.value,viewPicker.value);

      if(this.shadowRoot.querySelector(`td:has(time[datetime="${datePicker.value}"]):not(.prev-month, .next-month)`))
        updateCalendar(this);
      else 
        resetCalendar(this);

      const customEvent = new CustomEvent('change-date-today', {
      detail: {
        'view': viewPicker.value,
        'date': datePicker.value
        },
      });

      this.dispatchEvent(customEvent);
    });

    prevButton?.addEventListener('click', ()=> {

      datePicker.value = this.paginateDate("prev",viewPicker.value,datePicker.value);
      title?.innerHTML = this.getTitle(datePicker.value,viewPicker.value);

      if(this.shadowRoot.querySelector(`td:has(time[datetime="${datePicker.value}"]):not(.prev-month, .next-month)`))
        updateCalendar(this);
      else 
        resetCalendar(this);

      const customEvent = new CustomEvent('change-date-previous', {
      detail: {
        'view': viewPicker.value,
        'date': datePicker.value
        },
      });

      this.dispatchEvent(customEvent);
    });

    nextButton?.addEventListener('click', ()=> {

      datePicker.value = this.paginateDate("next",viewPicker.value,datePicker.value);
      title?.innerHTML = this.getTitle(datePicker.value,viewPicker.value);
      
      console.log(datePicker.value)

      if(this.shadowRoot.querySelector(`td:has(time[datetime="${datePicker.value}"]):not(.prev-month, .next-month)`))
        updateCalendar(this);
      else 
        resetCalendar(this);

      const customEvent = new CustomEvent('change-date-next', {
      detail: {
        'view': viewPicker.value,
        'date': datePicker.value
        },
      });

      this.dispatchEvent(customEvent);
    });
    // #endregion

    // TODO
    trackComponent(this, 'iam-calendar', [
      'open-filters',
      'change-view',
      'change-date',
      'change-date-today',
      'change-date-previous',
      'change-date-next',
      'open-settings',
      'close-settings',
      'save-settings'
    ]);
  }

  static get observedAttributes(): any {
    return ['data-calendars','data-view'];
  }

  attributeChangedCallback(attrName, oldVal, newVal): void {
    
    this.pauseObserver = true;

    switch (attrName) {
      case 'data-calendars': {
        if (oldVal != newVal) {


          const tbody = this.shadowRoot?.querySelector('#calendar > table > tbody');
          const weekViewHeader = this.shadowRoot?.querySelector('#week-view-header > table > tbody');
          const datePicker = this.shadowRoot?.querySelector(`#date`);

          // Get a formatted version of todays date
          const today = new Date();
          const date = today.getDate();
          const month = today.getMonth();
          const year = today.getFullYear();
          const strToday = `${year}-${String(month+1).padStart(2, "0")}-${String(date).padStart(2, "0")}`;


          if(this.hasAttribute('data-calendars')){

            this.calendars = this.getAttribute('data-calendars').split(',');

            this.calendars.forEach((item,index) => {
              this.calendars[index] = item.trim();
            });
          }

          const calendarHtml = this.createCalendar(datePicker.value, strToday);
          tbody?.innerHTML = calendarHtml;
          weekViewHeader?.innerHTML = calendarHtml;

          this.addEvents();
          this.addJSEvents(this);
          this.setWeekDay();
          this.setTime();
          
        }
        break;
      };
      case 'data-view': {
        if (oldVal != newVal) {

          const viewPicker = this.shadowRoot?.querySelector(`#view`);
          
          viewPicker.value = newVal;
          viewPicker.dispatchEvent(new Event('change'));
        }
        break;
      }
    }

    setTimeout(() => {
      this.pauseObserver = false;
    }, "500");

    
  }
}

export default iamCalendar;
