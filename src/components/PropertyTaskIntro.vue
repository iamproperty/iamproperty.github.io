<template>
  <div class="property-task-intro">
      <h4>12 Really Long Street Name, Bedlington, Northumberland</h4>
      <h4>Starting Bid: £{{startingBid}}</h4>
      <p>Contract signed: {{contractSigned}}</p>
      <ul class="auction-info d-sm-flex">
          <li>Auction start date: {{auctionStartDate}}</li>
          <li>Auction end date: {{auctionEndDate}}</li>
      </ul>
      <ul class="branch-info d-sm-flex">
        <li><strong>{{branchName}}</strong></li>
        <li>Telephone: {{branchTelephone}}</li>
        <li>Email: {{branchEmail}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'PropertTaskIntro',
  data () {
    return {
      startingBid: 50000.00,
      contractSigned: '01-02-2020',
      auctionStartDate: '01-02-2020',
      auctionEndDate: '01-02-2020',
      branchName: 'Burchell Edwards, Solihull',
      branchTelephone: '01912390802',
      branchEmail: 'burchelledwards@branch.com'
    }
  }
}
</script>
<style lang="scss">
    @import "@/assets/scss/_variables.scss";

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
