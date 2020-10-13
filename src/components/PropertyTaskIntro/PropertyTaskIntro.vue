<template>
  <div class="property-task-intro">
    <div class="row">
      <div class="col-12">
        <h2>{{ property.address }}</h2>&nbsp;<a :href="property.url" target="_blank">View details</a>
      </div>
      <div class="col-12" v-if="branch">
        <ul class="branch-info d-sm-flex">
          <li><strong>{{property.branchName}}</strong></li>
          <li>Telephone: <a :href="`tel: ${property.branchTelephone}`">{{property.branchTelephone}}</a></li>
          <li>Email: <a :href="`mailto:  ${property.branchEmail}`">{{property.branchEmail}}</a></li>
        </ul>
      </div>
      <div class="col-12" v-if="bid">
        <ul class="bid-info d-sm-flex" >
          <li>Starting Bid: £{{property.startingBid}}</li>
          <li>Contract signed: {{property.contractSigned}} <span>{{ property.contractTime }}</span></li>
        </ul>
      </div>
      <div class="col-12" v-if="auction">
        <ul class="auction-info d-sm-flex">
          <li>Auction start date: {{property.auctionStartDate}}</li>
          <li>Auction end date: {{property.auctionEndDate}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PropertTaskIntro',
  props: {
    property: {
      type: Object,
      required: true
    },
    auction: {
      type: Boolean,
      default: false
    },
    bid: {
      type: Boolean,
      default: false
    },
    branch: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss">
.property-task-intro {
  span {
    color:red;
    padding-left: 10px;
  }
}

ul.auction-info, ul.bid-info, ul.branch-info {
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
