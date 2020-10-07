<template>
  <div class="property-task-intro">
      <h4><a :href="property.url">{{ property.address }}</a></h4>
      <h4>Starting Bid: £{{property.startingBid}}</h4>
      <p>Contract signed: {{property.contractSigned}} <span>{{ property.contractTime }}</span></p>
      <ul class="auction-info d-sm-flex">
          <li>Auction start date: {{property.auctionStartDate}}</li>
          <li>Auction end date: {{property.auctionEndDate}}</li>
      </ul>
      <ul class="branch-info d-sm-flex">
        <li><strong>{{property.branchName}}</strong></li>
        <li>Telephone: <a :href="`tel: ${property.branchTelephone}`">{{property.branchTelephone}}</a></li>
        <li>Email: <a :href="`mailto:  ${property.branchEmail}`">{{property.branchEmail}}</a></li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'PropertTaskIntro',
  props: {
    property: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss">
    @import "@/assets/scss/_variables.scss";

    .property-task-intro {
        span {
            color:red;
            padding-left: 10px;
        }
    }

    ul.auction-info, ul.branch-info {
        list-style: none;

        li {
            padding-left: 15px;

            &:first-of-type {
                padding-left: 0;
            }

            @media only screen and (max-width: 576px) {
                padding-left: 0;
            }

        }
    }
</style>
