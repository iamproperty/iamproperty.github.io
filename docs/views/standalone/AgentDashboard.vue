<template>
  <div>
    <Nav logo="movebutler" class="nav--marketplace" propertylink="/standalone/marketplace" movebutlerlink="/standalone/movebutler" iamsoldlink="/standalone/agent">
      
    </Nav>
    <main class="main--marketplace">
      
      <div class="container pt-4">
        <form>
          <iam-applied-filters></iam-applied-filters>


          <div class="form-check">
            <input type="radio" name="risk-level" value="high" id="risk-level-high" class="form-check-input" data-filter="Risk Level - High">
            <label for="risk-level-high" class="form-label form-check-label">High</label>
          </div>
          <div class="form-check">
            <input type="radio" name="risk-level" value="medium" id="risk-level-medium" class="form-check-input" data-filter="Risk Level - Medium">
            <label for="risk-level-medium" class="form-label form-check-label">Medium</label>
          </div>
          <div class="form-check">
            <input type="radio" name="risk-level" value="low" id="risk-level-low" class="form-check-input" data-filter="Risk Level - Low">
            <label for="risk-level-low" class="form-label form-check-label">Low</label>
          </div>

          <hr/>

          <div class="form-control__wrapper" data-filter="Date between: $1 - $2">
            <label class="form-label" for="date-from">Date range</label>
            <input class="form-control" type="date" name="date-from" id="date-from" data-filter="Date from - $value" />
            <input class="form-control" type="date" name="date-to" id="date-to" data-filter="Date to - $value" />
          </div>

          <button class="btn btn-primary d-block m-auto">Update results</button>
        </form>

      </div>
    </main>
  </div>
</template>

<script>
import iamAppliedFilters from '../../../assets/ts/components/applied-filters/applied-filters.component'

if (!window.customElements.get('iam-applied-filters'))
  window.customElements.define('iam-applied-filters', iamAppliedFilters);


import Nav from '@/components/Nav/Nav.vue'

export default {
  components: {
    Nav
  },
}
</script>