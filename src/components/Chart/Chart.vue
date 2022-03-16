<template>
  <div class="container" ref="wrapper">
    <slot></slot>
    <figure class="chart__wrapper">
      <figcaption v-html="caption"></figcaption>
    <div :class="`chart__key chart__key--${type} h5`" role="presentation">
      <div :key="index" v-for="(item,index) in fields" class="key">{{item.key}}</div>
    </div>

    <div :class="`chart chart--${type}`" ref="chart">
      
      <div class="chart__yaxis" role="presentation">
        <div :key="index" v-for="(point,index) in yaxis" :style="`--value: ${point.value};--percent:${((point.value-min)/(max-min))*100}%;`" class="axis__point">
          <span>{{point.display}}</span>
        </div>
      </div>
      <Table v-bind="$props">

        <div class="chart__guidelines" role="presentation">
          <div :key="index" v-for="(point,index) in yaxis" :data-value="point.value" :style="`--percent:${((point.value-min)/(max-min))*100}%;`" class="guideline">
          </div>
        </div>
        <span v-html="drawLines()" class="lines" v-if="type == 'line'"></span>
      </Table>
      <div v-html="drawPie()" class="pies" v-if="type == 'pie'"></div>
    </div>
    </figure>
  </div>
</template>

<style lang="scss">
@import "../../../assets/sass/components/charts.scss";
</style>

<script>
import { ucfirst, unsnake } from '../../helpers/strings'
import Table from '@/elements/Table/Table.vue'

export default {
  name: 'Tabs',  
  components: {
    Table
  },
  props: {
    type: {
      type: String,
      required: false,
      default: 'bar'
    },
    caption: {
      type: String,
      required: false
    },
    max: {
      type: Number,
      required: true
    },
    min: {
      type: Number,
      required: false,
      default: 0
    },
    yaxis: {
      type: Array,
      required: false
    },
    items: {
      type: Array,
      required: true
    },
    fields: {
      type: Array,
      required: true
    }
  },
  computed: {
    drawLines (){
      return () => {
        
        let lines = Array();
        let spacer = 200/(Object.keys(this.items).length - 1);
        const max = this.max - this.min;
        
        // Creates the lines array from the fields array
        this.fields.forEach((field, index) => {
        
          if(index != 0){

            lines[index-1] = '';
          }
        });
        
        // populate the lines array from the items array
        this.items.forEach((item, index) => {
        
          Object.keys(item).forEach((key, subindex) => {
          
            if(subindex != 0){
            
              let value = item[key]

              value = value.replace('£','');
              value = value.replace('%','');
              value = Number.parseFloat(value) - this.min;

              const percent = (value/max) * 100;
              let command = index == 0 ? 'M' : 'L';
              
              lines[subindex-1] += `${command} ${spacer * index} ${100-percent} `;
            }
          });
        });

        // Create the line strings
        let returnString = '';

        lines.forEach((line, index) => {
        
          returnString += `
<svg viewBox="0 0 200 100" class="line" preserveAspectRatio="none">
  <path fill="none" d="${line}"></path>
</svg>`
        });

        return returnString;
      }
    },
    drawPie (){
      return () => {

        let returnString = '';


        this.items.forEach((item, index) => {
          
          let paths = '';
          let tooltips = '';

          let cumulativePercent = 0;

          function getCoordinatesForPercent(percent) {
            const x = Math.cos(2 * Math.PI * percent);
            const y = Math.sin(2 * Math.PI * percent);
            return [x*100, y*100];
          }

          let total = 0;

          let titleKey = Object.keys(item)[0]
          let title = item[titleKey]

          Object.keys(item).forEach((key, subindex) => {

            if(subindex != 0){
              let value = item[key]

              value = value.replace('£','');
              value = value.replace('%','');
              value = Number.parseInt(value);

              total += value;
            }
          });

          Object.keys(item).forEach((key, subindex) => {
          
            
            if(subindex != 0){
            
              let value = item[key]

              value = value.replace('£','');
              value = value.replace('%','');
              value = Number.parseInt(value);

              let percent = value/total;
            
              //lines[subindex-1] += `${command} ${spacer * index} ${100-percent} `;
              const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
                
                // each slice starts where the last slice ended, so keep a cumulative percent
                cumulativePercent += percent;
                
                const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

                // if the slice is more than 50%, take the large arc (the long way around)
                const largeArcFlag = percent > .5 ? 1 : 0;

                // create an array and join it just for code readability
                const pathData = [
                  `M ${startX} ${startY}`, // Move
                  `A 100 100 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
                  `L 0 0`, // Line
                ].join(' ');

              paths += `<path d="${pathData}"></path>`;
              tooltips += `<foreignObject x="-70" y="-70" width="140" height="140" style="transform: rotate(90deg)"><div><span class="h5 mb-0">${ucfirst(unsnake(title))}<br/> ${ucfirst(unsnake(key))}<br/> ${item[key]}</span></div></foreignObject>`;
            }
          });

          returnString += `<div class="pie"><svg viewBox="-105 -105 210 210" style="transform: rotate(-90deg)" preserveAspectRatio="none">${paths}<foreignObject x="-70" y="-70" width="140" height="140" style="transform: rotate(90deg)"><div><span class="h5 mb-0">${title}</span></div></foreignObject>${tooltips}</svg></div>`

        });


        return returnString;

      }
    }
  },
  mounted(){
    this.$nextTick(function () {

      // If the data gets updated we may need to recreate the tbody as it get detached when sorted in the table.js
      let chart = this.$refs.chart;
      const max = this.max - this.min;

      Array.from(chart.querySelectorAll('tbody tr')).forEach((tr, index) => {

        let group = tr.querySelector('td:first-child').innerHTML;

        Array.from(tr.querySelectorAll('td[data-numeric]:not([data-numeric="0"]):not(:first-child)')).forEach((td, index) => {
          
          const value = Number.parseFloat(td.getAttribute('data-numeric'));
          let percent = ((value - this.min)/(max)) * 100;
          const content = td.innerHTML;
          const label = td.getAttribute('data-label');
          let bottom = 0;

          // If the value is negative the position below the 0 line
          if(this.min < 0){
            bottom = Math.abs((this.min)/(max)*100);
            if(value < 0){
              bottom = bottom - percent;
            }
          }
          td.setAttribute("style",`--bottom:${bottom}%;--percent:${percent}%;`);

          td.innerHTML = `<span data-group="${group}" data-label="${label}">${content}</span>`;
        });
      });
    })
  }
}
</script>
