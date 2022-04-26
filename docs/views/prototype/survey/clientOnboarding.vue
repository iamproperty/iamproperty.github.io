<template>
  <div>

    <Nav>

      <template v-slot:logo>

        <ClientLogo></ClientLogo>
      </template>

      <ul class="list-unstyled">
        <li class=""><a href="/props">My Dashboard</a></li>
        <li class=""><a href="/props" title="View your profile details">My Transactions</a></li>
        <li class=""><a href="/props">Save progress and logout</a></li>
      </ul>
    </Nav>

  <main>
    
    <div class="container">
      <h1>Hello Deborah</h1>
    
    <Stepper label="Confirm details" endlabel="Onboarding complete" class="bg-muted">
      <Step url="/step" >Financial Verification</Step>
      <Step url="/step" >Compliance and ID</Step>
      <Step url="/step" >Legal Preparation</Step>
      <Step href="/step" status="success">Property Survey</Step>
    </Stepper>

        <!-- Property survey -->

        <div class="admin-panel">
          <h2>Property Survey</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui erat, auctor vestibulum sem eu, pellentesque rutrum diam. In vulputate ex in dui congue, eu fringilla odio volutpat. </p>
          <div class="bg-secondary p-4 pb-0 mb-5">
            <h3>Request a call</h3>
            <Input type="checkbox" id="callback" label="By requesting a call you are happy for us to pass your details to our survey providers">
            <div class="conditional">
                
              <button class="mt-3 btn btn-primary">Request a call</button>
            </div>
            </Input>
            <button class="mt-3 btn btn-tertiary">Not intersted in a call</button>
          </div>
          <div class="row mb-5">
            <div class="col-sm-5 me-auto">
              <h3>Benefits to your client</h3>
              <ul class="tick-list">
                <li>A survey will provide you with peace of mind.</li>
                <li>All our surveyors are RICS qualified.</li>
                <li>Our surveyors have local knowledge.</li>
                <li>Our surveyors are happy to discuss reports and assist with any questions that may arise from the survey.</li>
                <li>10m professional indemnity insurance on all surveys.</li>
                <li>We have a dedicated Private Client Team to guide you through the survey process.</li>
              </ul>
            </div>

            <div class="col-sm-6">
              <div class="bg-light p-4">
                <h3>What are the different survey levels to choose from?</h3>
                <p><strong>RICS Home Survey Level 2 (Survey Only)</strong> <br>is a report suitable for conventional properties, built from common building materials and in reasonable condition. The focus of the report is on assessing the general condition of the main elements of the property.</p>

                <p><strong>RICS Home Survey Level 2 (Survey and Valuation)</strong> <br>is as above, but also includes the surveyor’s professional opinion on the ‘market value’ of the property and an insurance reinstatement figure.</p>

                <p><strong>RICS Home Survey Level 3</strong> <br>is a report suitable for a larger, older or run-down property, a building that is unusual or significantly altered, or if you are planning major works. It provides detailed information about the structure and fabric of the property.</p>
              </div>
            </div>
          </div>


          <Accordion>
            <AccordionItem title="At-a-glance survey comparisons">
              
              <p>The following table will help you choose the most appropriate survey, but if you have any particular  requirements, remember to discuss them with your surveyor before they inspect the property.<br> The surveyor may be able to provide you with extra services, under separate contracts.</p>
              

              <div class="table__wrapper table-fullwidth">
                <table>
                  <thead>
                    <tr>
                      <th>Service features</th>
                      <th>RICS Home Survey<br> Level 2 (Survey Only)</th>
                      <th>RICS Home Survey<br> Level 2 (Survey and Valuation)</th>
                      <th>RICS Home <br>Survey Level 3</th>
                    </tr>
                  </thead>
                    <tbody>
                      <tr data-row-id="test">
                        <th>Describes the construction and condition of 
    the property on the date of the inspection.</th>
                        
                        <td>
                          <div class="fs-1 m-0"><svg class="icon m-0"><title>Yes</title><use xlink:href="#icon-tick"></use></svg></div>
                        </td>
                        <td>
                          <div class="fs-1 m-0"><svg class="icon m-0"><title>Yes</title><use xlink:href="#icon-tick"></use></svg></div>
                        </td>
                        <td>
                          <div class="fs-1 m-0"><svg class="icon m-0"><title>Yes</title><use xlink:href="#icon-tick"></use></svg></div>
                        </td>
                          
                      </tr>
                    
                  </tbody>
                </table>
              </div>


              
            </AccordionItem>
          </Accordion>


        </div>
</div>

  </main>

  </div>
</template>


<script>
import Accordion from '@/components/Accordion/Accordion.vue'
import AccordionItem from '@/components/Accordion/AccordionItem.vue'
import NoteFeed from '@/components/NoteFeed/NoteFeed.vue'
import Stepper from '@/components/Stepper/Stepper.vue'
import Step from '@/components/Stepper/Step.vue'
import Nav from '@/components/Nav/Nav.vue'
import Input from '@/elements/Input/Input.vue'
import Logo from '@/foundations/Logo/Logo.vue'
import Icon from '@/foundations/Icon/Icon.vue'

import ClientLogo from './clientLogo.vue'

export default {
  components: {
    AccordionItem,
    Accordion,
    NoteFeed,
    Stepper,
    Step,
    Nav,
    Input,
    Logo,
    ClientLogo,
    Icon
  },
  data () {
    return {
    }
  }
}
</script>