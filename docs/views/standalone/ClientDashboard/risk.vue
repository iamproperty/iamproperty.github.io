<template>
  <div>
    <Nav></Nav>

    <main class="text-primary">
      <Heading></Heading>


      <div class="client-wrapper">
        <div class="bg-info gradient-secondary client-wrapper__inner col-md-10">

          <div class="container p-md-0 mb-md-0">
            <h2 class="h4">Risk assessment and ID checks</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

          </div>

          <div class="container bg-white container-md--connected">

            <div class="client-question">
              <p class="">Are you either the property owner, the executor or have power of attorney?</p>
              <div class="client-question__inner">
                <input type="radio" autocomplete="off" name="radio1" id="test" class="btn-check">
                <label for="test" class="btn btn-tertiary">Yes</label>
                <input type="radio" autocomplete="off" name="radio1" id="test1a" class="btn-check">
                <label for="test1a" class="btn btn-tertiary">No</label>
              </div>
            </div>

            <div class="client-question">
              <p class="">Are you a UK resident?</p>
              <div class="client-question__inner">
                <input type="radio" autocomplete="off" name="radio2" id="test2" class="btn-check">
                <label for="test2" class="btn btn-tertiary">Yes</label>
                <input type="radio" autocomplete="off" name="radio2" id="test2a" class="btn-check">
                <label for="test2a" class="btn btn-tertiary">No</label>
                <hr>

                <div class="conditional conditional-2">
                  <div class="client-question__secondary">

                    <p class="">Are you an EU resident?</p>
                    <div class="client-question__inner">
                      <input type="radio" autocomplete="off" name="radio3" id="test3" class="btn-check">
                      <label for="test3" class="btn btn-tertiary">Yes</label>
                      <input type="radio" autocomplete="off" name="radio3" id="test3a" class="btn-check">
                      <label for="test3a" class="btn btn-tertiary">No</label>
                    </div>

                  </div>

                </div>
              </div>
            </div>


            <div class="client-question">
              <p class="">Are you either the property owner, the executor or have power of attorney?</p>
              <div class="client-question__inner">
                <input type="radio" autocomplete="off" name="radio4" id="test4" class="btn-check">
                <label for="test4" class="btn btn-tertiary">Yes</label>
                <input type="radio" autocomplete="off" name="radio4" id="test4a" class="btn-check">
                <label for="test4a" class="btn btn-tertiary">No</label>
              </div>
            </div>



          </div>

          <div class="container bg-primary container-md--connected">

            <h2>What happens next?</h2>
            <p>Once submitted, we will automatically run an electronic ID verification but you may bee prompted to complete additional ID verification in the next steps.</p>

            <div class="text-end"><button class="btn me-0">Submit questionnaire</button></div>

          </div>

        </div>
        <Footer></Footer>
      </div>



    </main>
  </div>
</template>

<style lang="scss">
@import "./clientDashboard.scss";
</style>

<script>
import Nav from './_nav.vue'
import Footer from './_footer.vue'
import Heading from './_heading.vue'

export default {
  components: {
    Nav,
    Footer,
    Heading
  }
}
</script>
