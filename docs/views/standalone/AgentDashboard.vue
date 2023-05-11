<template>
  <div>
    <Nav logo="movebutler" class="nav--marketplace" propertylink="/standalone/marketplace" movebutlerlink="/standalone/movebutler" iamsoldlink="/standalone/agent">
      
    </Nav>
    <main class="main--marketplace">

      <form id="tableFilters">

        <div class="container">
        
          <div class="row sticky-form">

            <div class="col">
              <div class="form-control__wrapper">
                <label for="search" class="form-label">Search</label>
                <input name="search" id="search" type="text" class="form-control" data-search="Client,	Transaction address">
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
                <td>Verified</td>
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
    </main>
  </div>
</template>


<style lang="scss">
/*
.sticky-form {
  position: sticky;
  top: 4.5rem;
  left: 0;
  width: 100%;
  z-index: 9999;
  background-color: green;
}
*/
</style>

<script setup>
import Nav from '@/components/Nav/Nav.vue'
import Table from '@/components/Table/Table.vue'

import iamAppliedFilters from '../../../assets/ts/components/applied-filters/applied-filters.component'

if (!window.customElements.get('iam-applied-filters'))
  window.customElements.define('iam-applied-filters', iamAppliedFilters);


export default {
  components: {
    Nav,
    Table
  },
}
</script>