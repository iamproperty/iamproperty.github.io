<template>
  <div>
    <Nav logo="movebutler" class="nav--marketplace" propertylink="/standalone/marketplace" movebutlerlink="/standalone/movebutler" iamsoldlink="/standalone/agent">
      
    </Nav>
    <main class="main--marketplace">


<!--
      <Tabs class="container">
        <Tab title="Conveyancing Opportunities">
 
          <form id="tableFilters3" data-ajax="/data/client-transactions.json">

            <div class="container">
              
              <span class="h4"><span data-query="total"></span> Clients added in total</span>

              <div class="row">

                <div class="col-md-3">
                  <input type="radio" name="due_diligience" data-filter="Onboarding status" value="Incomplete" id="due_diligience_incomplete" class="visually-hidden" />
                  <label class="card card--small card--danger" for="due_diligience_incomplete" ><span data-query="Onboarding status == Incomplete"></span> Onboarding status incomplete</label>
                </div>
                <div class="col-md-3">
                  <input type="radio" name="due_diligience" data-filter="Onboarding status" value="Not started yet" id="due_diligience_requires_approval" class="visually-hidden" />
                  <label class="card card--small card--warning" for="due_diligience_requires_approval" ><span data-query="Onboarding status == Not started yet"></span> Onboarding status Not started yet</label>
                </div>
              </div>
              <hr/>
            <br/>
            <br/>
            <br/>

              <div class="row sticky-form">
                <div class="col">
                  <div class="form-control__wrapper">
                    <label for="search" class="form-label">Search</label>
                    <input name="search" id="search" type="text" class="form-control" data-search="Client, Transaction address">
                  </div>
                </div>
                <div class="col">
                  <button class="btn btn-secondary" type="button" data-modal="filters">Filter by</button>
                </div>
                <div class="col d-none d-sm-block">
                  <div class="form-control__wrapper">
                    <label for="sort" class="form-label visually-hidden">Sort by</label>
                    <select type="select" name="sort" id="sort" class="form-select" data-sort>
                      <option value="-1">Sort by</option>
                      <option value="risk level high" data-sort="Risk level" data-order="High,Medium,Low">Risk level (high to low)</option>
                      <option value="risk level low" data-sort="Risk level" data-order="Low,Medium,High">Risk level (low to high)</option>
                      <option value="client asc" data-sort="Client" data-order="asc">Client (Ascedning order)</option>
                      <option value="client desc" data-sort="Client" data-order="desc">Client (Descending order)</option>
                    </select>
                  </div>
                </div>
                <div class="col">
                  <button class="btn btn-secondary" type="button" data-clear>Clear filters</button>
                </div>
              </div>


              <dialog id="filters">
                
                <iam-applied-filters></iam-applied-filters>
                <div class="form-check">
                  <input type="radio" name="risk-level" value="High" id="risk-level-high" class="form-check-input" data-filter-text="Risk Level - High" data-filter="Risk level">
                  <label for="risk-level-high" class="form-label form-check-label">High</label>
                </div>
                <div class="form-check">
                  <input type="radio" name="risk-level" value="Medium" id="risk-level-medium" class="form-check-input" data-filter-text="Risk Level - Medium" data-filter="Risk level">
                  <label for="risk-level-medium" class="form-label form-check-label">Medium</label>
                </div>
                <div class="form-check">
                  <input type="radio" name="risk-level" value="Low" id="risk-level-low" class="form-check-input" data-filter-text="Risk Level - Low" data-filter="Risk level">
                  <label for="risk-level-low" class="form-label form-check-label">Low</label>
                </div>

                <hr/>

                <div class="form-control__wrapper" data-filter-text="Date between: $1 - $2">
                  <label class="form-label" for="date-from">Date range</label>
                  <input class="form-control" type="date" name="date-from" id="date-from" data-filter-text="Date from - $value" />
                  <input class="form-control" type="date" name="date-to" id="date-to" data-filter-text="Date to - $value" />
                </div>

                <button class="btn btn-primary d-block m-auto" type="submit">Update results</button>
              </dialog>
            </div>
          </form>

          <div class="container">
          <Table class="table--sticky table--minify" data-filterby="tableFilters3">
            <table>
              <thead>
                <tr>
                  <th data-output="{transaction.user.formatted_name}">Client</th>
                  <th data-output="{created_at.date}" data-format="date">Date added</th>
                  <th data-output="<a href='{transaction.table_routes.transaction_view}'>{transaction.formatted_address}</a>">Transaction address</th>
                  <th data-output="{status_label}">Onboarding status</th>
                  <th>Risk level</th>
                  <th data-output="{due_diligence_complete}">Due diligence</th>
                  <th data-output="<a href='{table_routes.transaction_view}'>Manage client</a>"></th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </Table>


          </div>

        </Tab>
        <Tab title="Client Onboarding">
        -->
          <form id="tableFilters" data-submit>

      <div class="container">
        <div class="row">
          <div class="col">
            <h1>Welcome back, Jonny!</h1>
          </div>
          <div class="col-md-2">
            <div class="dialog__wrapper">
              
            <button class="btn btn-tertiary me-0" id="showmenu">Individual</button>
            <dialog id="menu">
              <Filterlist data-max-height="small">
                <ul class="list-unstyled">
                  <li>
                    <div class="form-check">
                      <input type="checkbox" name="pipeline[]" id="pipeline1" class="form-check-input d-none" value="Alice Knowles" dta-filter="">
                      <label for="pipeline1" class="form-label form-check-label">Alice Knowles</label>
                    </div>                  
                  </li>
                  <li>
                    <div class="form-check">
                      <input type="checkbox" name="pipeline[]" id="pipeline2" class="form-check-input d-none" value="Ethan Ramirez">
                      <label for="pipeline2" class="form-label form-check-label">Ethan Ramirez</label>
                    </div>                  
                  </li>
                  <li>
                    <div class="form-check">
                      <input type="checkbox" name="pipeline[]" id="pipeline3" class="form-check-input d-none" value="Sophia Patel">
                      <label for="pipeline3" class="form-label form-check-label">Sophia Patel</label>
                    </div>                  
                  </li>
                  <li>
                    <div class="form-check">
                      <input type="checkbox" name="pipeline[]" id="pipeline4" class="form-check-input d-none" value="Noah Jenkins">
                      <label for="pipeline4" class="form-label form-check-label">Noah Jenkins</label>
                    </div>                  
                  </li>
                  <li>
                    <div class="form-check">
                      <input type="checkbox" name="pipeline[]" id="pipeline5" class="form-check-input d-none" value="Ava Thompson">
                      <label for="pipeline5" class="form-label form-check-label">Ava Thompson</label>
                    </div>                  
                  </li>
                </ul>
              </Filterlist>

              <button type="submit" class="btn btn-secondary">Update</button>

            </dialog>

            </div>
          </div>
          

        </div>
        
      </div>
            <div class="container">

              <span class="h4"><span data-query="total"></span> <div class="form-control__wrapper form-control--inline-text"><label for="clients-added">Clients added </label><select id="clients-added" class="form-select" data-filter="Date added">
                <option value="">in total</option>
                <option value="26 Mar 23">today</option>
                <option>Yesterday</option>
                <option>this week</option>
                <option>last week</option>
                <option>this month</option>
                <option>last month</option>
              </select></div></span>
 
              <div class="row tab-focus">

                  <input type="checkbox" name="due_diligience" data-filter="Due diligence" value="Incomplete" id="due_diligience_incomplete" class="d-none" v-model="checked" />
                  <input type="checkbox" name="due_diligience" data-filter="Due diligence" value="Requires approval" id="due_diligience_requires_approval" class="d-none" />
                  <input type="checkbox" name="due_diligience" data-filter="Due diligence" value="Verified" id="due_diligience_verified" class="d-none" />

                <div class="col-sm-4 col-md-3">
                  <label for="due_diligience_incomplete"><Card class="card--filter colour-danger" data-total="" data-query="Due diligence == Incomplete">Due diligence incomplete</Card></label>
                </div>
                <div class="col-sm-4 col-md-3">
                  <label for="due_diligience_requires_approval" ><Card class="card--filter colour-warning" data-total="" data-query="Due diligence == Requires approval">Due diligence requires approval</Card></label>
                </div>
                <div class="col-sm-4 col-md-3">
                  <label for="due_diligience_verified" ><Card class="card--filter colour-success" data-total="" data-query="Due diligence == Verified">Due diligence verified</Card></label>
                </div>
                
              </div>
              <hr/>


            </div>


            <div class="sticky-wrapper">
            <div class="sticky-form">
              <div class="container">
                  
                <div class="row align-items-end">
                  <div class="col-6 col-md-5">
                    <div class="form-control__wrapper">
                      <label for="search" class="form-label d-none d-sm-block">Search</label>
                      <span class="suffix" role="presentation"><i class="fa fa-light fa-search"></i></span>
                      <input name="search" id="search" type="text" class="form-control" data-search="Client, Transaction address">
                    </div>
                  </div>
                  <div class="col-6 offset-md-1 col-md-2">
                    <button class="btn btn-tertiary me-0 d-block w-100" type="button" data-modal="filters">Filter by <span data-filter-count></span><i class="fa fa-filter"></i></button>
                  </div>
                  <div class="col d-none d-sm-block">
                    <div class="form-control__wrapper">
                      <label for="sort" class="form-label visually-hidden">Sort by</label>
                      <select type="select" name="sort" id="sort" class="form-select" data-sort>
                        <option value="-1">Sort by</option>
                        <option value="risk level high" data-sort="Risk level" data-order="High,Medium,Low">Risk level (high to low)</option>
                        <option value="risk level low" data-sort="Risk level" data-order="Low,Medium,High">Risk level (low to high)</option>
                        <option value="client asc" data-sort="Client" data-order="asc">Client (Ascedning order)</option>
                        <option value="client desc" data-sort="Client" data-order="desc">Client (Descending order)</option>
                      </select>
                    </div>
                  </div>
                  <div class="col">
                    <button class="btn btn-primary text-nowrap d-none d-md-block" type="button" data-clear><i class="fa fa-xmark"></i> Clear filters</button>
                  </div>
                </div>

              </div>
            </div>
          </div>

              <dialog id="filters">
                
                <iam-applied-filters></iam-applied-filters>
                <div class="form-check">
                  <input type="radio" name="risk-level" value="High" id="risk-level-high" class="form-check-input" data-filter-text="Risk Level - High" data-filter="Risk level" v-model="checked">
                  <label for="risk-level-high" class="form-label form-check-label">High</label>
                </div>
                <div class="form-check">
                  <input type="radio" name="risk-level" value="Medium" id="risk-level-medium" class="form-check-input" data-filter-text="Risk Level - Medium" data-filter="Risk level">
                  <label for="risk-level-medium" class="form-label form-check-label">Medium</label>
                </div>
                <div class="form-check">
                  <input type="radio" name="risk-level" value="Low" id="risk-level-low" class="form-check-input" data-filter-text="Risk Level - Low" data-filter="Risk level">
                  <label for="risk-level-low" class="form-label form-check-label">Low</label>
                </div>

                <hr/>

                <div class="form-control__wrapper" data-filter-text="Date between: $1 - $2">
                  <label class="form-label" for="date-from">Date range</label>
                  <input class="form-control" type="date" name="date-from" id="date-from" data-filter-text="Date from - $value" />
                  <input class="form-control" type="date" name="date-to" id="date-to" data-filter-text="Date to - $value" />
                </div>

                <button class="btn btn-primary d-block m-auto" type="submit">Update results</button>
              </dialog>



          </form>

          <div class="container">
          <Table class="table--sticky table--minify" data-filterby="tableFilters">
            <table>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Date added</th>
                  <th>Transaction address</th>
                  <th>Onboarding status</th>
                  <th>Risk level</th>
                  <th>Due diligence</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Requires approval</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>26 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Incomplete</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>B Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Requires approval</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>A Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Incomplete</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Requires approval</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Incomplete</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>C Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>D Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td> E Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>FDave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>I Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>HDave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Requires approval</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Richard Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>High</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Bob Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Low</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
                <tr>
                  <td>Dave Smith, Buyer</td>
                  <td>18 Mar 23</td>
                  <td>89, Queens Crescent, NE28 8DR</td>
                  <td>Risk assessment complete</td>
                  <td>Medium</td>
                  <td>Verified</td>
                  <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
                </tr>
              </tbody>
            </table>
          </Table>


          </div>
<!--
        </Tab>
        <Tab title="Material and Property Information">
          
          <form id="tableFilters2">

          <div class="container">
            
            <span class="h4"><span data-query="total"></span> Material and Property Information added in total</span>

            <div class="row tab-focus">

              <div class="col-md-3">
                <input type="radio" name="form_top_filter" data-filter="multi" value='{"Form type":"Material information","Form status":"Outstanding"}' id="mi_outstanding" class="visually-hidden" />
                <label class="card card--small card--danger" for="mi_outstanding"><span data-query="Form type == Material information && Form status == Outstanding"></span> MI Outstanding</label>
              </div>

              <div class="col-md-3">
                <input type="radio" name="form_top_filter" data-filter="multi" value='{"Form type":"Material information","Form status":"Completed"}' id="mi_completed" class="visually-hidden" />
                <label class="card card--small card--success" for="mi_completed"><span data-query="Form type == Material information && Form status == Completed"></span> MI Completed</label>
              </div>

            </div>
            <hr/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

            <div class="row sticky-form">
              <div class="col">
                <div class="form-control__wrapper">
                  <label for="search" class="form-label">Search</label>
                  <input name="search" id="search" type="text" class="form-control" data-search="Client, Transaction address">
                </div>
              </div>
              <div class="col">
                <button class="btn btn-secondary" type="button" data-modal="filters">Filter by</button>
              </div>
              <div class="col d-none d-sm-block">
                <div class="form-control__wrapper">
                  <label for="sort" class="form-label visually-hidden">Sort by</label>
                  <select type="select" name="sort" id="sort" class="form-select" data-sort>
                    <option value="-1">Sort by</option>
                    <option value="risk level high" data-sort="Risk level" data-order="High,Medium,Low">Risk level (high to low)</option>
                    <option value="risk level low" data-sort="Risk level" data-order="Low,Medium,High">Risk level (low to high)</option>
                    <option value="client asc" data-sort="Client" data-order="asc">Client (Ascedning order)</option>
                    <option value="client desc" data-sort="Client" data-order="desc">Client (Descending order)</option>
                  </select>
                </div>
              </div>
              <div class="col">
                <button class="btn btn-secondary" type="button" data-clear>Clear filters</button>
              </div>
            </div>


            <dialog id="filters">
              
              <iam-applied-filters></iam-applied-filters>
              <div class="form-check">
                <input type="radio" name="risk-level" value="High" id="risk-level-high" class="form-check-input" data-filter-text="Risk Level - High" data-filter="Risk level">
                <label for="risk-level-high" class="form-label form-check-label">High</label>
              </div>
              <div class="form-check">
                <input type="radio" name="risk-level" value="Medium" id="risk-level-medium" class="form-check-input" data-filter-text="Risk Level - Medium" data-filter="Risk level">
                <label for="risk-level-medium" class="form-label form-check-label">Medium</label>
              </div>
              <div class="form-check">
                <input type="radio" name="risk-level" value="Low" id="risk-level-low" class="form-check-input" data-filter-text="Risk Level - Low" data-filter="Risk level">
                <label for="risk-level-low" class="form-label form-check-label">Low</label>
              </div>

              <hr/>

              <div class="form-control__wrapper" data-filter-text="Date between: $1 - $2">
                <label class="form-label" for="date-from">Date range</label>
                <input class="form-control" type="date" name="date-from" id="date-from" data-filter-text="Date from - $value" />
                <input class="form-control" type="date" name="date-to" id="date-to" data-filter-text="Date to - $value" />
              </div>

              <button class="btn btn-primary d-block m-auto" type="submit">Update results</button>
            </dialog>
          </div>
          </form>

          <div class="container">
          <Table class="table--sticky table--minify" data-filterby="tableFilters2">
          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th>Date added</th>
                <th>Transaction address</th>
                <th>Form type</th>
                <th>Form status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Richard Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>TA6</td>
                <td>Completed</td>
                <td><a href="/info" class="text-nowrap">View information</a></td>  
              </tr>
              <tr>
                <td>Richard Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>TA7</td>
                <td>Outstanding</td>
                <td><a href="/info" class="text-nowrap">View information</a></td>  
              </tr>
              <tr>
                <td>Richard Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>TA6</td>
                <td>Outstanding</td>
                <td><a href="/info" class="text-nowrap">View information</a></td>  
              </tr>
              <tr>
                <td>Richard Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Material information</td>
                <td>Outstanding</td>
                <td><a href="/info" class="text-nowrap">View information</a></td>  
              </tr>
              <tr>
                <td>Richard Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Material information</td>
                <td>Outstanding</td>
                <td><a href="/info" class="text-nowrap">View information</a></td>  
              </tr>
              <tr>
                <td>Richard Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Material information</td>
                <td>Completed</td>
                <td><a href="/info" class="text-nowrap">View information</a></td>  
              </tr>
              <tr>
                <td>Richard Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>TA10</td>
                <td>Outstanding</td>
                <td><a href="/info" class="text-nowrap">View information</a></td>  
              </tr>
              <tr>
                <td>Richard Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>TA10</td>
                <td>Completed</td>
                <td><a href="/info" class="text-nowrap">View information</a></td>  
              </tr>
            </tbody>
          </table>
          </Table>

          </div>


        </Tab>
      </Tabs>
-->
      
    </main>
  </div>
</template>
<style lang="scss" >




form {
  display: contents;
}
@media screen and (max-width: 36em){

  .sticky-form {

    pointer-events: all;
    display: block;

    .container {
      padding-top: 1rem;
      padding-bottom: 0;
    }
  }

  .sticky-wrapper {
    
    padding-top: calc(4.5rem + 1px);
    margin-top: -4.5rem;
    display: block;
    pointer-events: none;
    top: -1px;
    position: sticky;
    z-index: 999999;

    &.stuck .sticky-form {
      background: var(--colour-secondary);
    }
  }
}


.dialog__wrapper {
  position: relative;
  display: inline-block;

  dialog {
    right: 0;
    left: auto;
    top: 100%;
    z-index: 999999999;

    min-width: 20rem;
  }
}
</style>

<script>
import Nav from '@/components/Nav/Nav.vue'
import Table from '@/components/Table/Table.vue'
import Card from '@/components/Card/Card.vue'
import Filterlist from '@/components/Filterlist/Filterlist.vue'

export default {
  components: {
    Nav,
    Table,
    Card,
    Filterlist
  },
  data () {
    return {
      checked: true
    }
  },
  mounted(){

    setTimeout(() => {
      
      const el = document.querySelector(".sticky-wrapper")
      /*
      const observer = new IntersectionObserver( 
        ([e]) => e.target.classList.toggle("stuck", e.intersectionRatio < 1),
        { threshold: [0,1], root: document.querySelector('body') }
      );
      */


      var observer = new IntersectionObserver(function(entries) {
        // no intersection with screen
        if(entries[0].boundingClientRect.top < 1)
          el.classList.add('stuck')
        else
          el.classList.remove('stuck')

      }, { threshold: [0,1] });

      observer.observe(el);



      document.addEventListener('click', (event) => {

        if (event && event.target instanceof HTMLElement && event.target.closest('#showmenu')){
          event.preventDefault();

          let btn = event.target.closest('#showmenu');
          
          let popover = document.querySelector('#menu');

          if(popover.hasAttribute('open'))
            popover.close();
          else
          popover.show();

        };
      });


    }, "100");

  }
}

</script>