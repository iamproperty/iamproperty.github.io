<template>
  <div>
    <Nav logo="movebutler" class="nav--marketplace" propertylink="/standalone/marketplace" movebutlerlink="/standalone/movebutler" iamsoldlink="/standalone/agent">
      
    </Nav>
    <main class="main--marketplace">


      <div class="container">
        <h1>Welcome back, Jonny!</h1>
      </div>
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
          <form id="tableFilters">

            <div class="container">
              
              <span class="h4"><span data-query="total"></span> Clients added in total</span>

              <div class="row tab-focus">
<!--
                <div class="col-md-3">
                  <input type="checkbox" name="due_diligience" data-filter="Due diligence" value="Incomplete" id="due_diligience_incomplete" class="visually-hidden" />
                  <label class="card card--small card--danger" for="due_diligience_incomplete" ><span data-query="Due diligence == Incomplete"></span> Due diligence incomplete</label>
                </div>
                <div class="col-md-3">
                  <input type="checkbox" name="due_diligience" data-filter="Due diligence" value="Requires approval" id="due_diligience_requires_approval" class="visually-hidden" />
                  <label class="card card--small card--warning" for="due_diligience_requires_approval" ><span data-query="Due diligence == Requires approval"></span> Due diligence requires approval</label>
                </div>
                <div class="col-md-3">
                  <input type="checkbox" name="due_diligience" data-filter="Due diligence" value="Verified" id="due_diligience_verified" class="visually-hidden" />
                  <label class="card card--small card--success" for="due_diligience_verified" ><span data-query="Due diligence == Verified"></span> Due diligence verified</label>
                </div>
               --> 
               <input type="text" name="filter" id="filter" data-filter="Risk level" value="Low" />
              </div>
              <hr/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>


            </div>
            <div class="sticky-wrapper">
            <div class="sticky-form">
              <div class="container">
                  
                <div class="row">
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

              </div>
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

main {
  min-height: 10000px;
}

form {
  display: contents;
}

.sticky-form {
  /*
  position: sticky;
  //top: -1px;
  top: 4.5rem;
  left: 0;
  width: 100%;
  z-index: 9999;
  */
  pointer-events: all;
}

.sticky-wrapper {
  
  padding-top: calc(4.5rem + 1px);
  pointer-events: none;
  top: -1px;

position: sticky;
}
.sticky-wrapper.stuck {


  position: sticky;
  top: -1px;

  z-index: 999999999;
  
  .sticky-form {

  background: green;
  }
}


</style>

<script setup>
import Nav from '@/components/Nav/Nav.vue'
import Table from '@/components/Table/Table.vue'
import { onMounted } from 'vue';

onMounted(() => {
  const el = document.querySelector(".sticky-wrapper")
  console.log(el)
  const observer = new IntersectionObserver( 
    ([e]) => {

      console.log(e);
        e.target.classList.toggle("stuck", e.intersectionRatio < 1)
    },
    { threshold: [1] }
  );
  
  observer.observe(el);
})
</script>