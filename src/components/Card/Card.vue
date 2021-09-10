<template>
  <a :href="link" class="card" :data-type="type" :title="'Find out more: '+title+(subTitle ? ' - '+subTitle:'')">
    <div class="card-header__wrapper" v-if="image">
      <img :src="image" alt="" loading="lazy" class="card-image" />
      <div class="card-header">
        <span class="badge bg-primary p-2 me-2" v-if="this.details && this.details.status" v-html="cardStatus()"></span>
        <span class="badge bg-black bg-opacity-50 p-2 align-self-end" v-if="this.details && (this.details.images || this.details.videos)" v-html="cardMedia()"></span>
      </div>
      <img v-if="details && details.logo" :src="details.logo" alt="" loading="lazy" class="card-logo" />
    </div>
    <div class="card-body" v-html="cardContent()"></div>
    <div class="card-footer">
      <span :class="`${btnType == 'link' ? `link` : `btn btn-${btnType}`} mb-0`">{{ctaText}}<span class="visually-hidden"> about {{title}}</span></span>
    </div>
  </a>
</template>

<style lang="scss">
@import "../../../assets/sass/_func.scss";
@import "../../../node_modules/bootstrap/scss/_card";
@import "../../../assets/sass/components/card";
</style>

<script>
export default {
  name: 'Card',
  props: {
    link: {
      type: String,
      required: false
    },
    titleClass: {
      type: String,
      required: false,
      default: 'h2'
    },
    title: {
      type: String,
      required: false
    },
    subTitle: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false
    },
    btnType: {
      type: String,
      required: false,
      default: 'secondary'
    },
    ctaText: {
      type: String,
      required: false,
      default: 'Find out more'
    },
    image: {
      type: String,
      required: false
    },
    details: {
      type: Object,
      required: false
    }
  },
  computed: {
    cardStatus (){
      return () => {
        return this.details && this.details.status ? `${this.details.status == 'Live now' ? '<span class="text-danger lh-0 fs-1 align-middle">&#8226;</span>&nbsp;&nbsp;': ''}${this.details.status}`: '';
      }
    },
    cardMedia (){
      return () => {
        return `<svg xmlns='http://www.w3.org/2000/svg' width='30' height='28' viewBox='0 0 30 28' class="icon text-white"><title>Images </title><path d='M15 10.5c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zM26 4c2.203 0 4 1.797 4 4v14c0 2.203-1.797 4-4 4h-22c-2.203 0-4-1.797-4-4v-14c0-2.203 1.797-4 4-4h3.5l0.797-2.125c0.391-1.031 1.609-1.875 2.703-1.875h8c1.094 0 2.312 0.844 2.703 1.875l0.797 2.125h3.5zM15 22c3.859 0 7-3.141 7-7s-3.141-7-7-7-7 3.141-7 7 3.141 7 7 7z'></path></svg> ${this.details && this.details.images ? `${this.details.images}`: `0`}&nbsp;&nbsp;|&nbsp;&nbsp;<svg xmlns='http://www.w3.org/2000/svg' width='30' height='28' viewBox='0 0 28 28' class="icon text-white ms-0"><title>Videos </title><path d="M11.109 17.625l7.562-3.906-7.562-3.953v7.859zM14 4.156c5.891 0 9.797 0.281 9.797 0.281 0.547 0.063 1.75 0.063 2.812 1.188 0 0 0.859 0.844 1.109 2.781 0.297 2.266 0.281 4.531 0.281 4.531v2.125s0.016 2.266-0.281 4.531c-0.25 1.922-1.109 2.781-1.109 2.781-1.062 1.109-2.266 1.109-2.812 1.172 0 0-3.906 0.297-9.797 0.297v0c-7.281-0.063-9.516-0.281-9.516-0.281-0.625-0.109-2.031-0.078-3.094-1.188 0 0-0.859-0.859-1.109-2.781-0.297-2.266-0.281-4.531-0.281-4.531v-2.125s-0.016-2.266 0.281-4.531c0.25-1.937 1.109-2.781 1.109-2.781 1.062-1.125 2.266-1.125 2.812-1.188 0 0 3.906-0.281 9.797-0.281v0z"></path></svg> ${this.details && this.details.videos ? `${this.details.videos}`: `0`}`;
      }
    },
    cardContent () {
      return () => {
        const tagClass = function(tag){
          switch(tag) {
            case 'Modern method':
              return 'bg-secondary text-primary'
            case 'Freehold':
              return 'bg-light text-dark'
            default:
              return 'bg-body text-white'
          }
        }

        const tags = this.details && this.details.tags ? this.details.tags.map(tag =>  `<span class="badge rounded-pill py-2 px-3 mb-3 me-2 ${tagClass(tag)}">${tag}</span>` ).join(""): '';
        const title = this.title ? `<span class="card-title d-block ${this.titleClass}">${this.title}${this.subTitle ? ` <span class="d-block fw-normal font-body text-body small">${this.subTitle}</span>` : ''}</span>` : ``;

        const details = `
        ${this.details && this.details.guidePrice ? `<span class="d-block h6 text-dark mb-1">Price guide: ${this.details.guidePrice}</span>` : ``}
        ${this.details && this.details.auctionTime ? `<span class="d-block h6 text-primary mb-4">Auction time left: ${this.details.auctionTime}</span>` : ``}
        ${this.details && this.details.readTime ? `<span class="d-block h6 text-primary mb-4"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="23" viewBox="0 0 22 23" class="icon ms-0 me-2"><path d="M11 1.63c-5.176 0-9.37 4.194-9.37 9.37 0 5.176 4.194 9.37 9.37 9.37 5.176 0 9.37-4.194 9.37-9.37 0-5.176-4.194-9.37-9.37-9.37M11 0c6.075 0 11 4.925 11 11s-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0" fill="var(--colour-secondary)" /><path d="M9.62 5.39c0-.473.368-.856.82-.856.454 0 .822.383.822.855v6.27l3.25 1.898c.395.23.536.75.314 1.16-.22.412-.72.558-1.115.328l-4.09-2.39V5.39z" fill="var(--colour-primary)"/></svg>${this.details.readTime}</span>` : ``}
        `;

        return `${tags}${title}${details}${this.content}`;
      }
    }
  }
}
</script>
