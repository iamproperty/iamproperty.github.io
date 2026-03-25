<script lang="ts" setup>
  import Header from '@/components/Header/Header.vue';
  import Tooltip from '@/components/Tooltip/Tooltip.vue';
  import Modal from '@/components/Modal/Modal.vue';
  import Table from '@/components/Table/Table.vue';
  import Notification from '@/components/Notification/Notification.vue';
  import VideoModal from '@/components/VideoModal/VideoModal.vue';
  import Actionbar from '@/components/Actionbar/Actionbar.vue';
  import Card from '@/components/Card/Card.vue';
  import Tabs from '@/components/Tabs/Tabs.vue';
  import Form from '@/components/Form/Form.vue';
  import Menu from '@/components/Menu/Menu.vue';
  import IamButton from '@/components/Button/Button.vue';
  
  
</script>

<template>
  <main>
    <Header>
      
      <ul class="breadcrumbs">
        <li><a href="/standalone/movebutler">Dashboard</a></li>
        <li>Premium Conveyancing</li>
      </ul>

      <h1 class="pb-4">Transaction overview</h1>
      

      <div class="d-flex flex-wrap gap-3 pb-4">
        <div>
          <small class="d-block pb-0">Property address</small>
          <address class="mb-0">24 Lynx road, Tynemouth, Newcastle upon tyne, NE2 6AT</address>
        </div>
        <div>
          <small class="d-block pb-0">Price</small>
          <span>£290,000</span>
        </div>
        <div>
          <small class="d-block pb-0">Tenure type</small>
          <span>Freehold</span>
        </div>
        <div class="me-auto">
          <small class="d-block pb-0">Mehod of sale</small>
          <span>Private treaty</span>
        </div>
        <div>
          <a href="/" class="btn btn-sm btn-secondary fa-pen-to-square mb-0">Edit transaction</a>
        </div>
      </div>

      <button class="btn btn-action fa-file no-icon" popovertarget="property-report" slot="toolbox">View property report</button>
      <button class="btn btn-action fa-file" command="show-modal" commandfor="send" slot="toolbox">Action button</button>
      <hr slot="toolbox" class="d-none d-sm-block"/>
      <a href="/" class="btn btn-action fa-plus" slot="toolbox">Add client</a>
      <a href="/" class="btn btn-action fa-plus" slot="toolbox">Add note</a>
      <a href="/" class="btn btn-action fa-plus" slot="toolbox">Add document</a>
    
    </Header>

    <Menu id="property-report">
      <a href="/report" class="btn btn-action">View report</a>
      <IamButton data-copy-text="/report"><button class="btn btn-action">Copy report link</button></IamButton>
    </Menu>
    
    <div class="admin-panel">
      <h2 class="bg-light">Clients</h2>
      <Actionbar>
        <button class="btn btn-action">Link/unlink CRM client</button>
        <button class="btn btn-action btn-primary fa-plus">Add client</button>
      </Actionbar>
      <Table class="table--cta table--fullwidth">
      <table class="table--filtered">
                <thead>
                <tr style="--row-height: 37px;">
                    <th class="th--fixed"></th>
                    <th>Client name</th>
                    <th>Date added</th>
                    <th>Added by</th>
                    <th>Client type</th>
                    <th>Onboarding status</th>
                    <th>Latest risk level</th>
                    <!--[if BLOCK]><![endif]-->                        <th>Due diligence</th>
                    <!--[if ENDBLOCK]><![endif]-->
                    <th>Residential address</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <!--[if BLOCK]><![endif]-->                    <tr class="filtered--matched filtered--show show" style="--row-height: 97px;">
                        <td class="td--fixed" data-label="">
                            <div class="dialog__wrapper">
                                <button class="btn btn-secondary btn-compact fa fa-ellipsis-vertical btn-sm m-0" popovertarget="menu751614186369" aria-haspopup="true" aria-controls="menu751614186369" style="anchor-name: --menu751614186369;"></button>
                                <iam-menu class="dialog--list" x-data="" id="menu751614186369" popover="auto" role="menu" style="position-anchor: --menu751614186369;">
                                  
                                    <!--[if BLOCK]><![endif]--><!--[if ENDBLOCK]><![endif]-->
                                    <!--[if BLOCK]><![endif]-->                                        <!--[if BLOCK]><![endif]--><!--[if ENDBLOCK]><![endif]-->
                                    <!--[if ENDBLOCK]><![endif]-->
                                </iam-menu>
                            </div>
                        </td>
                        <td data-label="Client name">
                            <!--[if BLOCK]><![endif]-->                                <i class="far fa-solid fa-star"></i>
                            <!--[if ENDBLOCK]><![endif]-->
                            Martin Wright
                            <!--[if BLOCK]><![endif]--><!--[if ENDBLOCK]><![endif]-->
                        </td>
                        <td data-label="Date added">27.01.26</td>
                        <td data-label="Added by">Testing Account</td>
                        <td data-label="Client type">Vendor</td>
                        <td data-label="Onboarding status">Risk assessment complete</td>
                        <td data-label="Latest risk level" data-content="low">
                            Low
                        </td>
                        <!--[if BLOCK]><![endif]-->                            <td data-label="Due diligence" data-content="incomplete">
                                Incomplete
                            </td>
                        <!--[if ENDBLOCK]><![endif]-->
                        <td data-label="Residential address">Lee Dam, 95 Katie Brook, TS10 3NS</td>
                        <td data-label="" class="px-3">
                            <a href="http://my.iamproperty.test/ic/risk-assessments/140/view" class="text-nowrap btn btn-tertiary">
                                Manage client
                            </a>
                        </td>
                    </tr>
                <!--[if ENDBLOCK]><![endif]-->
                </tbody>
      </table>
      </Table>
    </div>
    
<Modal class="modal--lg">
    <dialog id="notes-modal">
        <h2>Add note</h2>
        <p>You are adding a note for the transaction: .</p>
        <Form>
            <form class="fill-row" method="POST" action="/">
                
                <label class="transaction-note hidden">
                    Add note
                    <textarea class="isg-input" name="content" placeholder="Add note..." rows="10" required></textarea>
                    <span class="invalid-feedback">Text required before saving a note</span>
                </label>
                <div class="btn__group mb-0">
                    <button command="close" commandfor="notes-modal" class="btn btn-secondary">Cancel</button>
                    <button class="btn btn-primary create-note">Add note</button>
                </div>
            </form>
        </Form>
    </dialog>
</Modal>

    <div class="bg-primary pt-2 px-3 mb-2 rounded">
      <div class="md-col-end-8">
        <h2 class="h3 text-info pb-2">Save up to 41 days on this transaction</h2>
        <p class="pb-3">Forecasted time saved if this transaction uses Premium Conveyancing. <a href="/">Find out more</a></p>
        
        <a href="/" class="btn btn-primary colour-warning">Request callback for client</a>
        <a href="/" class="btn btn-secondary">Send insights and service details</a>
      </div>
      
      <ul class="tick-list mb-0 pt-1 pb-3 md-col-start-9">
        <li class="tick--danger pb-1">21 days for current area search times</li>
        <li class="tick--danger pb-1">3 category search alerts</li>
        <li class="tick--warning pb-1">10 days to complete protocol forms</li>
        <li class="tick--warning  pb-1">2 title alerts</li>
      </ul>

    </div>

    <a href="/">
      <Card>
        

        <div slot="badges" >
          <div class="text-end">
            <span class="badge mb-1">Premium Conveyancing</span>
            <span class="badge wider-colour-3 mb-1">Case status: instructed</span>
          </div>
        </div>
        <p class="lead text-heading pb-2">Conveyancing case</p>
        
        <p class="me-auto pb-0">Solicitor office: <strong class="pe-2">JD Conveyancing </strong> Branch assignee: <strong class="pe-2">Chris Holmes</strong> Lead vendor: <strong class="pe-2">John Smith</strong></p>

      
      </Card>
    </a>

    <Tabs>
      <details>
        <summary>Insights</summary>
        <div class="admin-panel">
          <h3 class="bg-light">Title insight</h3>
          

          <Tabs class="tabs--md-hidden">

            <details id="title-insights-1" name="title-insights" class="pt-0">
              <summary>Title ID 1</summary>
              <Actionbar>

                <!-- we have to duplicate the tab links in each tab and connect them up using the command and commandfo attributes -->
                <label class="tag tag--toggle" slot="filters"><input type="radio" name="title-insight-buttons-1" value="1" checked command="show-tab" commandfor="title-insights-1">Title ID 1</label>
                <label class="tag tag--toggle" slot="filters"><input type="radio" name="title-insight-buttons-1" value="2" command="show-tab" commandfor="title-insights-2">Title ID 2</label>

                <!-- Add the class of icon-only to the below links/buttons when there is 4 or more items in the tabs -->
                <a href="/" class="btn btn-action fa-cart-shopping">Order another title register</a>
                <a href="/" class="btn btn-action fa-download">Download title register</a>
              </Actionbar>
              <Table class="md-md mb-0">

                <table>
                  <thead>
                    <tr>
                      <th class="th--sm">Category</th>
                      <th>Summaries</th>
                      <th>Agent actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-0 no-hover">
                      <th class="text-nowrap">Covenants</th>
                      <td>
                        You must not use the property for anything other than a private residence. 
                      </td>
                      <td>
                        <Notification data-status="danger" class="notification--no-bg mb-0">2</Notification>
                      </td>
                      <td>
                        <button class="btn btn-tertiary" command="show-modal" commandfor="actions">View actions</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Table>

              <Modal data-type="acknowledgement" class="modal--lg modal--no-cancel" data-agreed-text="Close">
                <dialog id="actions">
                  <span class="h3">Category: Restrictions</span>
                  <div class="text-start">
                  <span class="h4">Extract</span>
                  <p>You must not use the property for anything other than a private residence. </p>
                  <p>The following are details of the covenants contained in the Conveyance dated 23 April 1897 referred to in the Charges Register:-JOINTLY AND SEVERALLY covenant by the said George Gosney, Alexander Henderson and Joseph Earl not to erect on any part of the said premises any building other than private dwellinghouses of the minimum value of £500 for each detached house or £750 for a pair of houses except stabling greenhouses or other similar appurtenances to such dwellinghouse when erected nor erect more than six houses on any acre of the said premises not permit any building erected on the said premises to be used otherwise than as a private dwellinghouse or an appurtenance thereto nor permit such appurtenance to be used except by person occupying the dwellinghouse to which it belongs nor permit or suffer any trade or business whatsoever to be set up or carried on nor any Tavern Hotel School Cemetary Tea Garden Livery Stable Beer Shop or Manufactory of any kind to be carried on or opened nor any Fair Steeplechase public game or games or race or other sport to be held nor any goods or wares to be exposed for sale nor any bricks or tiles to be made or burned on the said premises or on any part thereof nor do or suffer to be done any acts that might be or become a nuisance or annoyance to the tenants or occupiers of adjoining land of the said William Moffat Douglas-Willan. </p>

                  <span class="h4">Agent actions - 4</span>
                  
                  <Notification data-status="danger" class="notification--no-bg mb-0">A covenant restricting building works or extensions has been identified. This may limit alterations the buyer can make. This could be material information</Notification>
                        
                  <Notification data-status="danger" class="notification--no-bg mb-0">A covenant preventing commercial use has been identified. This may be material information for buyers intending business activities.</Notification>

                  <Notification data-status="danger" class="notification--no-bg mb-0">A covenant restricting building works or extensions has been identified. This may limit alterations the buyer can make. This could be material information</Notification>
                        
                  <Notification data-status="danger" class="notification--no-bg mb-0">A covenant preventing commercial use has been identified. This may be material information for buyers intending business activities.</Notification>
                  </div>
                </dialog>
              </Modal>

            </details>
            <details id="title-insights-2" name="title-insights" class="pt-0">
              <summary>Forms</summary>
              
              <Actionbar>

                <label class="tag tag--toggle" slot="filters"><input type="radio" name="title-insight-buttons-2" value="1" checked command="show-tab" commandfor="title-insights-1">Title ID 1</label>
                <label class="tag tag--toggle" slot="filters"><input type="radio" name="title-insight-buttons-2" value="2" command="show-tab" commandfor="title-insights-2">Title ID 2</label>

                <a href="/" class="btn btn-action fa-cart-shopping">Order another title register</a>
                <a href="/" class="btn btn-action fa-download">Download title register 2</a>
              </Actionbar>
              

            </details>
          </Tabs>

          



        </div>
      </details>
      <details>
        <summary>Transaction</summary>

        <div class="admin-panel">
          <h3 class="bg-light">Documents and forms</h3>
          <Tabs class="tabs--md-hidden">

            <details id="documents" name="insights" class="pt-0">
              <summary>Documents</summary>
              <Actionbar>

                <!-- we have to duplicate the tab links in each tab and connect them up using the command and commandfo attributes -->
                <label class="tag tag--toggle" slot="filters"><input type="radio" name="title" value="1" checked command="show-tab" commandfor="documents">Documents</label>
                <label class="tag tag--toggle" slot="filters"><input type="radio" name="title" value="2" command="show-tab" commandfor="forms">Forms</label>

                <!-- Add the class of icon-only to the below links/buttons when there is 4 or more items in the tabs -->
                <a href="/" class="btn btn-action fa-cart-shopping icon-only">Order another title  register</a>
                <a href="/" class="btn btn-action fa-download icon-only">Download title register</a>
              </Actionbar>
              <div class="d-flex gap-3 ">
                
              <a href="">
                <Card>
                  <span class="badge bg-danger" slot="badges"><i class="fa-regular fa-flag"></i> Incomplete</span>
                  Property information questionnaire

                  <label slot="footer" data-percent="50">
                    24 Lynx road, NE2 6AT
                    <progress max="100" value="50" class="progress--inline"></progress>
                  </label>
                </Card>
              </a>
              <a href="">
                <Card>
                  <span class="badge bg-danger" slot="badges"><i class="fa-regular fa-flag"></i> Incomplete</span>
                  Property information questionnaire

                  <label slot="footer" data-percent="50">
                    24 Lynx road, NE2 6AT
                    <progress max="100" value="50" class="progress--inline"></progress>
                  </label>
                </Card>
              </a>
              <a href="">
                <Card>
                  <span class="badge bg-danger" slot="badges"><i class="fa-regular fa-flag"></i> Incomplete</span>
                  Property information questionnaire

                  <label slot="footer" data-percent="50">
                    24 Lynx road, NE2 6AT
                    <progress max="100" value="50" class="progress--inline"></progress>
                  </label>
                </Card>
              </a>

              </div>
            </details>
            <details id="forms" name="insights" class="pt-0">
              <summary>Forms</summary>
              
              <Actionbar>

                <label class="tag tag--toggle" slot="filters"><input type="radio" name="title2" value="1" checked command="show-tab" commandfor="documents">Documents</label>
                <label class="tag tag--toggle" slot="filters"><input type="radio" name="title2" value="2" command="show-tab" commandfor="forms">Forms</label>

                <a href="/" class="btn btn-action fa-cart">Order another title  register 2</a>
                <a href="/" class="btn btn-action fa-cart">Download title register 2</a>
              </Actionbar>
              

            </details>
          </Tabs>
        </div>
      </details>
    </Tabs>

    <small class="mw-100">AI generated insights are provided for general information only and may not always be complete or 100% accurate. Any suggested timeframes or indications of transaction complexity are estimates based on available data and do not constitute legal advice. Information should always be independently checked and reviewed with a qualified legal professional.</small>

    <div class="md-col-end-6">
      <div class="admin-panel">
        <h2 class="bg-light">Material information</h2>

        <div class="sub-panel">
          <h3>Part A</h3>

          <div class="sub-grid pb-1">
            <span class="col-start-1 col-end-5 pb-1">Tenure type: <strong>Freehold</strong></span>
            <span class="col-start-6 col-end-12 pb-1">EPC rating: <strong>C (79), potential B (83)</strong></span>
              
            <span class="col-start-1 col-end-5 pb-1">Price: <strong>£180,000</strong></span>
            <span class="col-start-6 col-end-12 pb-1">Council tax band: <strong>B</strong></span>
          </div>
        </div>
        <div class="sub-panel">
          <h3>Part B</h3>
          <span class="pb-1">Average broadband speed:</span>

          <div class="d-flex gap-1 pb-2">
            <span>
              <strong>Standard</strong><br/>
              <i class="fa-duotone fa-solid fa-wifi-weak text-heading"></i> <strong>17 mb/s</strong>
            </span>
            <span>
              <strong>Superfast</strong><br/>
              <i class="fa-duotone fa-solid fa-wifi-fair text-heading"></i> <strong>N/A</strong>
            </span>
            <span>
              <strong>Ultrafast</strong><br/>
              <i class="fa-duotone fa-solid fa-wifi-strong text-heading"></i> <strong>1000 mb/s</strong>
            </span>
          </div>

          <span class="d-block pb-1">Mobile signal/coverage:</span>

          <div class="d-flex gap-1 pb-1">
            <span>
              <span class="d-block pb-1">EE</span>
              <i class="fa-duotone fa-solid fa-signal-weak text-heading"></i>
            </span>
            <span>
              <span class="d-block pb-1">Three</span>
              <i class="fa-duotone fa-solid fa-signal-fair text-heading"></i>
            </span>
            <span>
              <span class="d-block pb-1">O2</span>
              <i class="fa-duotone fa-solid fa-signal-good text-heading"></i>
            </span>
            <span>
              <span class="d-block pb-1">Vodaphone</span>
              <i class="fa-duotone fa-solid fa-signal-strong text-heading"></i>
            </span>
          </div>


        </div>

        <div class="sub-panel">
          <h3>Part C</h3>
          <span class="d-block pb-1">Listed: <strong class="me-2">No</strong> Planning applications: <strong>3</strong></span>
          <span class="d-block pb-1">Covenants: <i class="fa-solid fa-exclamation-circle text-danger"></i> <strong>2</strong></span>
          <span class="d-flex"><span class="text-nowrap me-1">Flood risk:</span> <strong>Hasn’t flood in last 5 years, no flooding or sea defences at the property, 1 source of risk from local pond.</strong></span>
        </div>
      </div>
    </div>
    
    <div class="md-col-start-7">
      <div class="admin-panel">
        <h2 class=" bg-light">Local planning permission and development proposals</h2>
        <Actionbar><span class="text-heading text-nowrap" slot="filters">3 applications</span></Actionbar>
        <span class="d-block pb-1 text-heading">3 Akenside Hill, Newcastle upon Tyne, NE5 6TH</span>
        <small class="d-block pb-1">23/00704/TPO • <i class="fa-regular fa-calendar-day"></i> 13/06/25 • Status: Pending Consideration</small>
        <small class="d-block pb-1">Description: Fell 1 no. Poplar tree (T1) as it is growing out of a disused railway embankment at a vulnerable angle in a material of a questionable adhesive nature, and due to its size, poses an unacceptable risk</small>
        <a href="/" class="btn btn-tertiary mb-0">View <i class="fa-regular fa-arrow-up-right-from-square me-0"></i></a>
        <hr class="border border-1 mb-2 mt-2">
        <span class="d-block pb-1 text-heading">3 Akenside Hill, Newcastle upon Tyne, NE5 6TH</span>
        <small class="d-block pb-1">23/00704/TPO • <i class="fa-regular fa-calendar-day"></i> 13/06/25 • Status: Pending Consideration</small>
        <small class="d-block pb-1">Description: Fell 1 no. Poplar tree (T1) as it is growing out of a disused railway embankment at a vulnerable angle in a material of a questionable adhesive nature, and due to its size, poses an unacceptable risk</small>
        <a href="/" class="btn btn-tertiary mb-0">View <i class="fa-regular fa-arrow-up-right-from-square me-0"></i></a>
      </div>

      <div class="admin-panel">
        <h2 class=" bg-light">Local planning permission and development proposals</h2>
        <table class="mb-1">
          <tbody>
            <tr class="border-0">
              <td class="fw-normal text-body pt-0 "><i class="fa-regular fa-trees"></i> Environmental rating:</td>
              <td class="text-heading pt-0">Current: B (83), Potential: B (83)</td>
            </tr>
            <tr class="border-0">
              <td class="fw-normal text-body pt-0"><i class="fa-regular fa-trees"></i> Environmental rating:</td>
              <td class="text-heading pt-0">Current: B (83), Potential: B (83)</td>
            </tr>
            <tr class="border-0">
              <td class="fw-normal text-body pt-0"><i class="fa-regular fa-trees"></i> Environmental rating:</td>
              <td class="text-heading pt-0">Current: B (83), Potential: B (83)</td>
            </tr>
          </tbody>
        </table>
        <div class="text-end">
          <a href="/" class="mb-1">View all features <i class="fa-light fa-up-right-from-square me-0"></i></a>
        </div>
      </div>

    </div>


    <div class="admin-panel">
      <iam-actionbar>
        <a href="{{ route('ic.transactions.print-notes', $transaction) }}" target="_blank" class="btn btn-action">Print all notes</a>
        <button command="show-modal" commandfor="notes-modal" class="btn btn-action btn-primary fa-plus">Add note</button>
    </iam-actionbar>
      <Table data-expandable class="table--fullwidth">
      <table>
            <thead>
                <tr>
                    <th class="author">Added by</th>
                    <th class="date">Date added</th>
                    <th>Note</th>
                    <th class="expand-button-heading"></th>
                </tr>
            </thead>

            <tbody>
              <tr class="show">
                
                    <td data-label="Added by">
                                                    <a href="http://my.iamproperty.test/ic/user/3/view">
                                Testing Account
                            </a>

                            <span class="text-nowrap">Komodo Newcastle Office</span>
                                            </td>

                    <td data-label="Date added">20 Mar 2026 12:54</td>

                    <td data-label="Note"><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p></td>
                <td class="td--expand"><button class="btn btn-compact btn-secondary btn-sm fa-chevron-down mt-0" data-expand-button="" data-index="0">Expand</button></td>

                </tr>
          <tr class="show">
            
            <td data-label="Added by">
                                            <a href="http://my.iamproperty.test/ic/user/3/view">
                        Testing Account
                    </a>

                    <span class="text-nowrap">Komodo Newcastle Office</span>
                                    </td>

            <td data-label="Date added">20 Mar 2026 12:19</td>

            <td data-label="Note"><p>yo</p></td>
            <td class="td--expand"><button class="btn btn-compact btn-secondary btn-sm fa-chevron-down mt-0" data-expand-button="" data-index="0">Expand</button></td>
          </tr>
                            
        </tbody>
      </table>
      </Table>
    </div>





  </main>
</template>