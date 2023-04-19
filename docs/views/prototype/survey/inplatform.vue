<template>
  <div>
    <Nav logo="movebutler" class="nav--marketplace">
      
      <template v-slot:secondary>

        <ul class="list-unstyled pt-4">
          <li class="pb-2"><a href="/ic" class="fw-bold">Dashboard</a></li>
          <li class="pb-2">
              <span class="nav__title fw-bold">Transactions</span>
              <ul class="list-unstyled ms-3">
                <li><a href="/standalone/movebutler" >Properties</a></li>
                <li><a href="/standalone/agent">Client Onboarding</a></li>
                <li><a href="/props">Track Conveyancing</a></li>
              </ul>
          </li>
          <li class="pb-2">
            <span class="nav__title fw-bold">Compliance</span>
            <ul class="list-unstyled ms-3">
              <li><a href="http://my.iamproperty.test/ic/land-registry">Order Land Registry Documents</a></li>
              <li><a href="http://my.iamproperty.test/ic/aml-faqs">Compliance Help Centre</a></li>
              <li><a href="https://www.ukciu.gov.uk/(taisli55qjh4fx2l0azbvi2r)/Registration/Login.aspx" target="_blank">Report a SAR</a></li>
              <li><a href="http://my.iamproperty.test/ic/training-library">Training Library</a></li>
              <li><a href="https://iamproperty-core-assets.s3.eu-west-2.amazonaws.com/AML%20Policy%20Template.docx">Download Template AML Policy</a></li>
              <li><a href="https://iamproperty-core-assets.s3.eu-west-2.amazonaws.com/movebutler/movebutler+MLO+Guide.pdf">Download Money Laundering Officer Guide</a></li>
            </ul>
          </li>
          <li class="pb-2"><a href="/props" class="fw-bold">Service Marketplace</a></li>
          <li class="pb-2">
            <span class="nav__title fw-bold">Conveyancing</span>
            <ul class="list-unstyled ms-3">
              <li><a href="http://my.iamproperty.test/ic/land-registry">My Solicitors</a></li>
              <li><a href="http://my.iamproperty.test/ic/aml-faqs">Compare Solicitors</a></li>
            </ul>
          </li>
          <li class="pb-2">
            <span class="nav__link fw-bold">Agency Settings</span>
            <ul class="list-unstyled ms-3">
              <li><a href="http://my.iamproperty.test/ic/land-registry">Staff Usage</a></li>
            </ul>
          </li>
          <li><a href="/props" class="fw-bold">Contact Us</a></li>
        </ul>

      </template>
    </Nav>
    <main class="main--marketplace">
      
      <div class="container pt-4">

        <ol class="breadcrumb">
          <li><a href="http://my.iamproperty.test/ic/dashboard">Dashboard</a></li>
          <li><a href="http://my.iamproperty.test/ic/transaction">Transactions</a></li>
          <li><a href="http://my.iamproperty.test/ic/transaction">Address details</a></li>
          <li><a href="http://my.iamproperty.test/ic/transaction">Vendor name</a></li>
          <li>Financial Verification</li>
        </ol>

        <h1>Customer Overview</h1>

        <div class="row mb-4">
          <div class="col-md-4">
            <p>Name: <strong>PinkPeacock Vendor</strong><br>
            Client type: <strong>Vendor</strong><br>
            DOB: <strong>09/08/1989</strong><br>
            Telephone: <a href="tel:0123456789">0123456789</a><br>
            Name: <a href="mailto:pinkpearcocka@gmail.com">pinkpearcocka@gmail.com</a></p>
            <h2 class="h6 mb-0">Correspondence Address:</h2>
            <address class="mb-2">4 Linden Avenue, Gosforth, NE3 4HD</address>
            <a href="http://my.iamproperty.test/ic/risk-assessments/145/edit">Edit client details</a>
          </div>
          <div class="col-md-4">
            <h2 class="h5 mb-0">Transaction Address:</h2>
            <address class="mb-2">4 Linden Avenue, Gosforth, NE3 4HD</address>
            <a href="http://my.iamproperty.test/ic/risk-assessments/145/edit">Edit transaction details</a>
          </div>
          <div class="col-md-4">
            <p>Onboarding status: <strong>Incomplete</strong><br>
            Legal preparation status: <strong>Not started yet</strong><br>
            Customer due diligence status: <strong>Not started yet</strong><br>
            Financial Verification status: <strong>Not started yet</strong></p>

            <a href="http://my.iamproperty.test/ic/transaction/53/view" class="btn btn-tertiary btn-block">Back to transaction overview</a>

            <a href="http://my.iamproperty.test/ic/risk-assessments/145/new-invite" class="btn btn-secondary btn-block">Send customer(s) onboarding invite</a>
          </div>
        </div>


        <Stepper label="Confirm details" endlabel="Onboarding complete" class="bg-muted">
          <Step url="/step" >Financial Verification</Step>
          <Step url="/step" >Compliance and ID</Step>
          <Step url="/step" >Legal Preparation</Step>
          <Step href="/step" status="success">Property Survey</Step>
        </Stepper>

        <h2>Property survey of XXXXXXXXXX</h2>
        <p>Case reference: MSDSDS</p>

        <div class="row">
          <div class="col-sm-6">
            <div class="admin-panel">
              <h3>Survey Details</h3>
              <ul class="tick-list">
                <li class="h6">A call has been requested</li>
              </ul>
            </div>
            <div class="admin-panel bg-secondary">
              <h3>Survey milestones</h3>
              <ul class="tick-list fw-bold">
                <li class="tick--success"><a href="/">ID Verified</a></li>
                <li class="tick--warning pb-4"><a href="/">Carry out welcome call (Overdue)</a><br><span class="small">Due 25 Apr 2022</span></li>
                <li class="tick--danger">Survey milestone 1 details</li>
                <li class="tick--incomplete">Survey milestone 2 details</li>
                <li class="tick--incomplete">Survey milestone 3 details</li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="admin-panel">
              <h3>Property Survery notes</h3>
              <NoteFeed user="User name" :items="notes" :show="3"></NoteFeed>
            </div>
          </div>
        </div>

        <p class="small mw-100 text-muted">The Conveyancing Partnership Ltd (t/a movebutler) is a registered company in England & Wales. Registered office 7 & 8 Diamond Court, Newcastle, Tyne and Wear, NE3 2EN. Company Number: 09662389. VAT Reg: 319 1600 25. All rights reserved, designated trademarks and brands are the property of their respective owners. Telephone: 0191 731 9216  Email: enquiries@iamproperty.com. All prices, unless otherwise stated, exclude VAT. Please note that all calls made to and from The Conveyancing Partnership are recorded for training and monitoring purposes.</p>

        <!-- Surveys- AGENT - IN PLATFORM ONCE DATA COLLECTED – Not interested -->
        <h2>Property survey of XXXXXXXXXX</h2>
        <p>Case reference: MSDSDS</p>


        <div class="admin-panel">
          <h3>Survey Details</h3>

          <ul class="tick-list">
            <li class="h6 tick--warning">No survey requested</li>
          </ul>
          <a href="/" class="btn btn-tertiary">Request survey</a>
        </div>

        <div class="admin-panel">
          <h3>Property Survery notes</h3>
          <NoteFeed user="User name" :items="notes" :show="3"></NoteFeed>
        </div>

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
import Input from '@/components/Input/Input.vue'
import Logo from '@/foundations/Logo/Logo.vue'
import Icon from '@/foundations/Icon/Icon.vue'

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
    Icon
  },
  data () {
    return {
      notes: [
        {
          date_added: '09/03/2022',
          user: 'Bob Smith',
          note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          date_added: '09/03/2022',
          user: 'Bob Smith',
          note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          date_added: '09/03/2022',
          user: 'Bob Smith',
          note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          date_added: '09/03/2022',
          user: 'Bob Smith',
          note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          date_added: '09/03/2022',
          user: 'Bob Smith',
          note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          date_added: '09/03/2022',
          user: 'Bob Smith',
          note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }
      ]
    }
  }
}
</script>