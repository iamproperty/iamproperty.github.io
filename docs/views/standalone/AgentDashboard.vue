<template>
  <div>
    <Nav logo="movebutler" class="nav--marketplace" propertylink="/standalone/marketplace" movebutlerlink="/standalone/movebutler" iamsoldlink="/standalone/agent">
      
    </Nav>
    <main class="main--marketplace">

      <form id="tableFilters" class="full-width">

        <div class="container">
          <div class="row">
            <div class="col">
              <h1>Welcome back, Jonny!</h1>
            </div>
            <div class="col-md-3 mw-fit-content">
              <div class="dialog__wrapper dialog__wrapper--md-right">

              <button class="btn btn-secondary me-0 nowrap" aria-label="Display filters of who's work to include" type="button"><span class="empty"><i class="fa-regular fa-users me-1" aria-hidden="true"></i> Everybody</span><span class="individual"><i class="fa fa-user me-1" aria-hidden="true"></i> Individual</span><span class="multiple"><i class="fa fa-users me-1" aria-hidden="true"></i> Multiple</span></button>
              <dialog>

                <AppliedFilters class="applied-filters--compact">
                <Filterlist data-max-height="small">
                <input type="checkbox" name="pipeline[]" id="pipeline1" class="form-check-input d-none" value="Alice Knowles" data-filter-text="$value" data-filter="Added by">
                <input type="checkbox" name="pipeline[]" id="pipeline2" class="form-check-input d-none" value="Ethan Ramirez" data-filter-text="$value" data-filter="Added by">
                <input type="checkbox" name="pipeline[]" id="pipeline3" class="form-check-input d-none" value="Sophia Patel" data-filter-text="$value" data-filter="Added by">
                <input type="checkbox" name="pipeline[]" id="pipeline4" class="form-check-input d-none" value="Noah Jenkins" data-filter-text="$value" data-filter="Added by">
                <input type="checkbox" name="pipeline[]" id="pipeline5" class="form-check-input d-none" value="Ava Thompson" data-filter-text="$value" data-filter="Added by">
                <ul class="list-unstyled">
                  <li vlaue="Alice Knowles">
                    <div class="form-check">
                      <label for="pipeline1" class="form-label form-check-label">Alice Knowles</label>
                    </div>                  
                  </li>
                  <li vlaue="Ethan Ramirez">
                    <div class="form-check">
                      <label for="pipeline2" class="form-label form-check-label">Ethan Ramirez</label>
                    </div>                  
                  </li>
                  <li vlaue="Sophia Patel">
                    <div class="form-check">
                      <label for="pipeline3" class="form-label form-check-label">Sophia Patel</label>
                    </div>                  
                  </li>
                  <li vlaue="Noah Jenkins">
                    <div class="form-check">
                      
                      <label for="pipeline4" class="form-label form-check-label">Noah Jenkins</label>
                    </div>                  
                  </li>
                  <li vlaue="Ava Thompson">
                    <div class="form-check">
                      
                      <label for="pipeline5" class="form-label form-check-label">Ava Thompson</label>
                    </div>                  
                  </li>
                </ul>
                </Filterlist>

              </AppliedFilters>
                <button type="submit" class="btn btn-secondary">Update</button>

              </dialog>

              </div>
            </div>
          </div>
        </div>
        <div class="container">

          <span class="h4"><span data-query="Added by & Date added"></span> <div class="form-control__wrapper form-control--inline-text"><label for="clients-added">Clients added </label><select id="clients-added" class="form-select" data-filter="Date added">
            <option value="">in total</option>
            <option value="$today">today</option>
            <option value="$yesterday">yesterday</option>
            <option value="$thisWeek">this week</option>
            <option value="$lastWeek">last week</option>
            <option value="$thisMonth">this month</option>
            <option value="$lastMonth">last month</option>
          </select></div></span>

          <div class="row tab-focus">

              <input type="checkbox" name="due_diligience" data-filter="Due diligence" value="Incomplete" id="due_diligience_incomplete" class="d-none" />
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
                <div class="col-6 ms-auto col-md mw-fit-content">
                  <button class="btn btn-secondary me-0 d-block w-100 btn-filter" type="button" data-modal="filters">Filter by <span data-filter-count></span></button>
                </div>
                <div class="col d-none d-sm-block col-md mw-fit-content">
                  <div class="btn btn-secondary">
                    <label for="sort" class="visually-hidden">Sort by</label>
                    <select type="select" name="sort" id="sort" class="form-select" data-sort>
                      <option value="-1">Sort by</option>
                      <option value="risk level high" data-sort="Risk level" data-order="High,Medium,Low">Risk level (high to low)</option>
                      <option value="risk level low" data-sort="Risk level" data-order="Low,Medium,High">Risk level (low to high)</option>
                      <option value="client asc" data-sort="Client" data-order="asc">Client (Ascedning order)</option>
                      <option value="client desc" data-sort="Client" data-order="desc">Client (Descending order)</option>
                      <option value="client asc" data-sort="Date added" data-order="asc" data-format="date">Date added (Ascedning order)</option>
                      <option value="client desc" data-sort="Date added" data-order="desc" data-format="date">Date added (Descending order)</option>
                    </select>
                  </div>
                </div>
                <div class="col mw-fit-content">
                  <button class="btn btn-tertiary text-nowrap d-none d-md-block me-0" type="button" data-clear><i class="fa fa-xmark"></i> Clear filters</button>
                </div>
              </div>

            </div>
          </div>
        </div>

        <dialog id="filters">
          
          <AppliedFilters>
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
          </AppliedFilters>
          <button class="btn btn-primary d-block m-auto" type="submit">Update results</button>
        </dialog>

      </form>

      <div class="container">
        <Table class="table--cta table--minify" data-filterby="tableFilters">
          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th data-format="date">Date added</th>
                <th>Transaction address</th>
                <th>Onboarding status</th>
                <th data-td-class="hide-status">Risk level</th>
                <th>Due diligence</th>
                <th class="d-none">Added by</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Richard Smith, Buyer</td>
                <td>31 May 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>High</td>
                <td>Requires approval</td>
                <td>Alice Knowles</td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Bob Smith, Buyer</td>
                <td>30 May 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td>Incomplete</td>
                <td>Ethan Ramirez</td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Dave Smith, Buyer</td>
                <td>29 May 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Dave Smith, Buyer</td>
                <td>03 Jan 22</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>B Dave Smith, Buyer</td>
                <td>03 Jan 22</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Medium</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Richard Smith, Buyer</td>
                <td>28 May 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>High</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Bob Smith, Buyer</td>
                <td>12 Feb 22</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td>Requires approval</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>A Dave Smith, Buyer</td>
                <td>1 May 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Dave Smith, Buyer</td>
                <td>12 Feb 22</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td>Incomplete</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Dave Smith, Buyer</td>
                <td>24 Apr 22</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Medium</td>
                <td>Requires approval</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Richard Smith, Buyer</td>
                <td>24 Mar 22</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>High</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Bob Smith, Buyer</td>
                <td>18 Apr 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Dave Smith, Buyer</td>
                <td>05 Apr 22</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Dave Smith, Buyer</td>
                <td>05 Apr 22</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td>Incomplete</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Dave Smith, Buyer</td>
                <td>1 Apr 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Medium</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Richard Smith, Buyer</td>
                <td>30 Apr 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>High</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>C Bob Smith, Buyer</td>
                <td>18 May 22</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Dave Smith, Buyer</td>
                <td>27 Jun 22</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Dave Smith, Buyer</td>
                <td>27 Jun 22</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Dave Smith, Buyer</td>
                <td>27 Jun 22</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Medium</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Richard Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>High</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>D Bob Smith, Buyer</td>
                <td>22 Aug 22</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Dave Smith, Buyer</td>
                <td>22 Aug 22</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Dave Smith, Buyer</td>
                <td>04 Sep 22</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Dave Smith, Buyer</td>
                <td>15 Oct 22</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Medium</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td> E Richard Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>High</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Bob Smith, Buyer</td>
                <td>15 Oct 22</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>FDave Smith, Buyer</td>
                <td>28 Nov 22</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>I Dave Smith, Buyer</td>
                <td>10 Dec 22</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Dave Smith, Buyer</td>
                <td>23 Jan 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Medium</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Richard Smith, Buyer</td>
                <td>07 Feb 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>High</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Bob Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Dave Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>HDave Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Dave Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Medium</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Richard Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>High</td>
                <td>Requires approval</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Bob Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Dave Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Dave Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Dave Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Medium</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Richard Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>High</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Bob Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Dave Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td><a href="/clienturl" class="text-nowrap">Verified</a></td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
              <tr>
                <td>Dave Smith, Buyer</td>
                <td>18 Mar 23</td>
                <td>89, Queens Crescent, NE28 8DR</td>
                <td>Risk assessment complete</td>
                <td>Low</td>
                <td>Verified</td>
                <td></td>
                <td><a href="/clienturl" class="text-nowrap">Manage client</a></td>  
              </tr>
            </tbody>
          </table>
        </Table>

      </div>
     
    </main>
  </div>
</template>
<style lang="scss" >


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

</style>

<script>
import Nav from '@/components/Nav/Nav.vue'
import Table from '@/components/Table/Table.vue'
import Card from '@/components/Card/Card.vue'
import AppliedFilters from '@/components/AppliedFilters/AppliedFilters.vue'
import Filterlist from '@/components/Filterlist/Filterlist.vue'

export default {
  components: {
    Nav,
    Table,
    Card,
    AppliedFilters,
    Filterlist
  },
  computed: {
    checked: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
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



      


    }, "100");

  }
}

</script>