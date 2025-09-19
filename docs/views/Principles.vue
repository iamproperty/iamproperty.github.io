<script setup>
  import Nav from '@/components/nav/nav.vue'
  import Card from '@/components/Card/Card.vue';
  import cardImg from '../img/cardImg.png';

</script>
<template>
  <nav>
    <Nav>
    <a slot="logo" href="/" class="brand brand--property">
      <svg>
        <title>iamproperty</title>
        <use xlink:href="/svg/logo.svg#logo-property"></use>
      </svg>
    </a>

    <a href="/" class="selected">Home</a>
    <a href="/">The team</a>
    <a href="/">Our principles</a>
    <a href="/">Articles</a>

    <button class="design btn btn-primary">Design System</button>
    </Nav>
  </nav>
  <main>
    <h1 class="text-center">Design for our Customers</h1>
    <div class="text-center text-primary pb-4"><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al.</strong></div>

    <div class="container visualtest colour-block bg-info gradient-primary w-full">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 pe-none g-10">
        <div class="col bg-white p-4 rounded shadow ">
          <span class="pb-3 d-block text-uppercase">Intuitive</span>
          <a href="/client-onbaording">
            <Card>Make it intuitive</Card>
          </a>
        </div>

        <div class="col bg-white p-4 rounded shadow">
          <span class="pb-3 d-block text-uppercase">Empowering</span>
          <a href="/client-onbaording">
            <Card class="hover">Make it empowering</Card>
          </a>
        </div>

        <div class="col bg-white p-4 rounded shadow">
          <span class="pb-3 d-block text-uppercase">Delightful</span>
          <a href="/client-onbaording">
            <Card class="active">Make it Delightful</Card>
          </a>
        </div>
      </div>
    </div>

    <div class="intuitive">
      <div>
        <h2>Intuitive</h2>
        <p>Our products are made easy to use by intuitive interconnectivity, simplifying complexity, and streamlining efficiency, so our customers can do more quicker and be effective during their day.</p>

        <h4>iamproperty values</h4>
        <div class="iap-values">
          <div class="values">Effective</div>
          <div class="values">Collaborative</div>
          <div class="values">Customer focused</div>
        </div>
      </div>
      
      <div class="grey-square"></div>
    </div>

    <div class="enpowering">
      <div class="grey-square-enpowering"></div>
      <div>
        <h2>Enpowering</h2>
        <p>Our products empower through incentivising, loyalty and actionable insight which allows customers to take control in shaping their path within the products.</p>

        <h4>iamproperty values</h4>
        <div class="iap-values">
          <div class="values">Effective</div>
          <div class="values">Collaborative</div>
          <div class="values">Customer focused</div>
        </div>
      </div>
    </div>

    <div class="delightful">
      <div>
        <h2>Delightful</h2>
        <p>Our products are built with meaningful interactions and beautiful design which combine to deliver an enrich experience for our customers across the ecosystem.</p>

        <h4>iamproperty values</h4>
        <div class="iap-values">
          <div class="values">Effective</div>
          <div class="values">Collaborative</div>
          <div class="values">Customer focused</div>
        </div>
      </div>
      
      <div class="grey-square"></div>
    </div>



    <div class="principles">
      <h3>Specific team principles</h3>
    </div>
    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 pe-none">
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <a href="/client-onbaording">
            <Card :data-image="cardImg"
              >Financial preparation <span>Here would be the top level description of the task</span></Card
            >
            <!-- <img src="../img/cardImg.png" alt="Test" /> -->
          </a>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Hover/focus State</span>
          <a href="/client-onbaording">
            <Card :data-image="cardImg" class="hover"
              >Financial preparation <span>Here would be the top level description of the task</span></Card
            >
          </a>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <a href="/client-onbaording">
            <Card :data-image="cardImg" class="active"
              >Financial preparation <span>Here would be the top level description of the task</span></Card
            >
          </a>
        </div>
      </div>
    </div>

    

    
    <!-- <ul>
      <li class="pb-3">
        <strong class="text-primary d-block">Relative units:</strong> Keeping units relative means they can react and
        respond to their environment making them more flexibile and durable.
      </li>
      <li class="pb-3">
        <strong class="text-primary d-block">Variables and components:</strong> Reduce the amount of repetition and
        improve maintainability by using variables whenever something is used more than once.
      </li>
      <li class="pb-3">
        <strong class="text-primary d-block">'Mobile' first:</strong> Design and build with the smallest standard
        viewport in mind first then introduce complexity to larger viewports.
      </li>
      <li class="pb-3">
        <strong class="text-primary d-block">HTML first:</strong> Use standard functionality that comes free with modern
        web browsers and only use JavaScript to progressively enhance.
      </li>
      <li class="pb-3">
        <strong class="text-primary d-block">Accessible for all:</strong> Make sure that we do
        <strong>not</strong> prevent anybody from getting the most out of our systems and sites. Use tools like
        <a href="https://wave.webaim.org/" title="WAVE Web Accessibility Evaluation Tool">WAVE</a>
        and automation testing to evaluate accessibility regularly.
      </li>
      <li class="pb-3">
        <strong class="text-primary d-block">Server friendly:</strong> Limit the number of calls to the serer of your
        application. Concatenate files where appropriate, only make ajax calls that would produce new valid information
        and lazy load assets.
      </li>
    </ul> -->
  </main>
</template>

<style>

/* nav */
.design {
  color: #FFC107;
}

/* middle */
.intuitive, .delightful, .enpowering {
  display: flex;
  flex-direction: row;
  padding: 50px 25px 50px 25px;

}

.intuitive > div {
  flex: 1;
}

.delightful > div {
  flex: 1;
}

.enpowering > div {
  flex: 1;
}

.iap-values {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.values {
  border: 1px solid #9D9D9D;
  color: #00313C;
  border-radius: 4px;
  padding: 5px;
}

.grey-square{
  background-color: #9D9D9D;
  width: 548px;
  height: 302px;
  border-radius: 12px;
  margin-left: 20px;
}

.grey-square-enpowering{
  background-color: #9D9D9D;
  width: 548px;
  height: 302px;
  border-radius: 12px;
  margin-right: 20px;
}

/* bottom */
.principles {
  display: flex;
  justify-content: center;
}
</style>
