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

      <div class="week-view-only">
      <table class="" role="presentation"><tbody>
      <tr><th>All day</th></tr>
      <tr><th>12am</th></tr>
      <tr><th>1am</th></tr>
      <tr><th>2am</th></tr>
      <tr><th>3am</th></tr>
      <tr><th>4am</th></tr>
      <tr><th>5am</th></tr>
      <tr><th>6</th></tr>
      <tr><th>7</th></tr>
      <tr><th>8</th></tr>
      <tr><th>9</th></tr>
      <tr><th>10</th></tr>
      <tr><th>11</th></tr>
      <tr><th>12</th></tr>
      <tr><th></th></tr>
      <tr><th></th></tr>
      <tr><th></th></tr>
      <tr><th></th></tr>
      <tr><th></th></tr>
      <tr><th></th></tr>
      <tr><th></th></tr>
      <tr><th></th></tr>
      <tr><th></th></tr>
      <tr><th></th></tr>
      <tr><th></th></tr>
      <tr><th></th></tr>
      <tr><th></th></tr>
      <tr><th></th></tr>
      <tr><th></th></tr>
      <tr><th></th></tr>
      <tr><th></th></tr>
      </tbody></table>
      </div>


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
    
    if(view == "day"){
      
      return `${this.dayArray[dayOfWeek]} ${this.getOrdinalNumber(day)} ${this.monthArray[month]} ${year}`;
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
    const calendars = [];

    if(this.querySelector('button:not(data-calendar)')){
      calendars.push('Default');

    }

    Array.from(this.querySelectorAll('button[data-calendar]')).forEach((element) => {

      if(!(calendars.includes(element.getAttribute('data-calendar'))))
        calendars.push(element.getAttribute('data-calendar'));
    })


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
          
        tbodyContent += `<time datetime="${adjustedLoopDate}" title="${this.dayArray[dayOfWeek]} ${loopDay} ${this.monthArray[prevMonth]} ${year}"><span class="day-of-week">${this.dayArray[dayOfWeek]} </span><span class="day">${this.getOrdinalNumber(adjustedLoopDay)}</span> <span class="month">${this.monthArray[prevMonth]}</span></time>`;
        //tbodyContent += this.addDay(adjustedLoopDate);
      }

      if(i >= startDay && loopDay <= daysThisMonth){
        
        tbodyContent += `<time datetime="${loopDate}" title="${this.dayArray[dayOfWeek]} ${loopDay} ${this.monthArray[month]} ${year}"><span class="day-of-week">${this.dayArray[dayOfWeek]} </span><span class="day">${this.getOrdinalNumber(loopDay)}</span> <span class="month">${this.monthArray[month]}</span></time>`;
        tbodyContent += this.addDay(loopDate, calendars);
      }

      // next month
      if(loopDay > daysThisMonth){

        const adjustedLoopDay = i - (startDay - 1) - daysThisMonth;
        const adjustedLoopDate = `${nextMonthYear}-${String(nextMonth+1).padStart(2, "0")}-${String(adjustedLoopDay).padStart(2, "0")}`
          
        tbodyContent += `<time datetime="${adjustedLoopDate}" title="${this.dayArray[dayOfWeek]} ${loopDay} ${this.monthArray[nextMonth]} ${year}"><span class="day-of-week">${this.dayArray[dayOfWeek]} </span><span class="day">${this.getOrdinalNumber(adjustedLoopDay)}</span> <span class="month">${this.monthArray[nextMonth]}</span></time>`;
        //tbodyContent += this.addDay(adjustedLoopDate);
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
      
      htmlTable += `<th>${calendarTitle}</th>`;
    });
    htmlTable += `</tr></thead>`;

    htmlTable += `<tbody>`;

    htmlTable += `<tr class="allday"><th>All day</th>`;
    calendars.forEach(calendarTitle => {
      
      htmlTable += `<td datetime="${day}" data-calendar="${calendarTitle}"></td>`;
    });
    htmlTable += `</tr>`;


    htmlTable += `<tr class="hour0"><th>12am</th><td datetime="${day}T00:00"></td></tr>`;

    for (let i = 1; i < 12; i++) {

      htmlTable += `<tr class="hour${i}"><th>${i}am</th>`;
      calendars.forEach(calendarTitle => {
      
        htmlTable += `<td datetime="${day}T${String(i).padStart(2, "0")}:00" data-calendar="${calendarTitle}"></td>`;
      });
      htmlTable += `</tr>`;
    }

    for (let i = 12; i < 24; i++) {

      htmlTable += `<tr class="hour${i}"><th>${i}pm</th>`;
      calendars.forEach(calendarTitle => {
      
        htmlTable += `<td datetime="${day}T${String(i).padStart(2, "0")}:00" data-calendar="${calendarTitle}"></td>`;
      });
      htmlTable += `</tr>`;
    }
    htmlTable += `</tbody>`;
    htmlTable += '</table>';

    return htmlTable;
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

      const timeTd = component.shadowRoot.querySelector(`.table--day td[datetime="${datetime}"]${element.hasAttribute('data-calendar') ? `[data-calendar="${element.getAttribute('data-calendar').replace('_','')}"]` : ''}`);
      const dateTd = timeTd?.parentElement?.closest('td');



      element.setAttribute('slot',`${datetime}${element.hasAttribute('data-calendar') ? `-${element.getAttribute('data-calendar').replace('_','')}` : ''}`);
      
      // Add matching slot to the event element to have it show in the correct place on the calendar
      if(timeTd){

        if(!timeTd.querySelector(`slot[name="${datetime}${element.hasAttribute('data-calendar') ? `-${element.getAttribute('data-calendar').replace('_','')}` : ''}"]`)){
          timeTd.insertAdjacentHTML('beforeEnd',`<slot name="${datetime}${element.hasAttribute('data-calendar') ? `-${element.getAttribute('data-calendar').replace('_','')}` : ''}" class="${continued ? 'continued': ''}"></slot>`)
        
          
        }
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

        }

        element.classList.add('processed');
      }

      // Work out if we need to offset the start of displaying the events due to previous days overlapping
      /*
      if(dateTd){
        dateTd.setAttribute('data-events',parseInt(timeTd.getAttribute('data-events') ? timeTd.getAttribute('data-events') : 0)+1);
        const prevDateCell = dateTd?.previousSibling;

        if(prevDateCell){
          dateTd.style.setProperty('--event-offset',`${prevDateCell.getAttribute('data-events') ? prevDateCell.getAttribute('data-events') : 0}rem`);
        }
      }
        */
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
    const tbody = this.shadowRoot?.querySelector('.calendar > table > tbody');
    const thead = this.shadowRoot?.querySelector('.calendar > table > thead');
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

    // Setup the view, month being default
    if(this.hasAttribute('data-view'))
      viewPicker.value = this.getAttribute('data-view');
    else {
      this.setAttribute('data-view', "month");
      viewPicker.value = "month";
    }

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

    console.log(this.shadowRoot.querySelectorAll('.calendar > table > tr > td'));

    Array.from(this.shadowRoot.querySelectorAll('.calendar > table > tbody > tr > td')).forEach(td => {
      
      console.log(td)

      td?.addEventListener('click', (event)=> {

        if(event.target == td){
          
          console.log('hey');
        }


      });

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
