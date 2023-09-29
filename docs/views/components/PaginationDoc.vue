<template>
  <main>

    <DSHeader :image="headerImg" section="components">
      <h1>Pagination</h1>
    </DSHeader>


    <div class="container">
   
      <p class="lead">Pagination is used for splitting up content or data into several pages, with a control for navigating to the next or previous page.</p>
      <h2>Overview</h2>
      <p>Generally, pagination is used if there are more than 15 items displayed in one view. The default number displayed will vary depending on the context.</p>
      
      <h3>Anatomy</h3>

      <img :src="anatomy" class="mb-4" />
      <ol>
        <li>Page jump</li>
        <li>Previous page button</li>
        <li>Next page button</li>
        <li>Label: Item count</li>
        <li>Items per page</li>
        <li>Mobile pagination: Load more button</li>
      </ol>

    </div>
    <div class="container pb-0">
      
      <h2>Variants</h2>
      <h3>Minimal</h3>
    </div>
    <div class="container visualtest mb-5">
      <div class="demo mb-5">
        <div class="admin-panel">
          <Pagination data-page="1" data-total="20" data-minimal></Pagination>
        </div>
      </div>

    </div>
    <div class="container pb-0">
      
      <h3>Minimal with page jump</h3>
      <h4>Page Jump</h4>
      <p>Made up of a select, page count and navigation buttons, a page jump can be added to help the user navigate the table and access relevant content quickly. </p>

    </div>
    <div class="container visualtest pb-5">

      <div class="demo">
        <div class="admin-panel">
          <Pagination data-page="1" data-total="20" data-minimal data-page-jump></Pagination>
        </div>
      </div>

    </div>
    <div class="container pb-0">
      <h3>Items per page</h3>
      <p>Use an inline select within the pagination bar so the user can change the amount of data displayed per page.</p>
    </div>

    <div class="container visualtest mb-5">

      <div class="demo">
        <div class="admin-panel admin-panel--per-page">
          <Pagination data-page="1" data-total="20" data-minimal data-per-page></Pagination>
        </div>
      </div>

    </div>
    <div class="container pb-0">
    
      <h3>Item count</h3>
      <p>Additional labeling can be added for context.</p>
    
    </div>

    <div class="container visualtest mb-5">
      <div class="demo">
        <div class="admin-panel admin-panel--item-count">
          <Pagination data-page="1" data-total="20" data-minimal data-item-count data-per-page></Pagination>
        </div>
      </div>

    </div>

    <div class="container pb-0">

      <h2>Behaviour</h2>
      <h3>Desktop</h3>
      <p>On desktop and tablet, we can access the full range of function in the pagination component: the page navigation, item count and items per page count. Depending on use case, you can choose the appropriate navigation option and add in other features to further better user experience. Be aware, as you move down into smaller breakpoints, features may be hidden due to lack of space.</p>
    </div>

    <div class="container visualtest mb-5 d-none d-md-block">

      <div class="demo demo-bottom">
        <Table class="table--fullwidth" data-page-jump data-item-count data-per-page data-no-scroll>
          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th>Date added</th>
                <th>Lorum ipsum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
            </tbody>
          </table>
        </Table>
      </div>
    </div>

    <div class="container pb-0">

      <h3>Tablet</h3>
      <p>As the screen size gets smaller, added functions may be hidden due to lack of space. Pagination navigation should always take priority, then other features like labels or items per page can be prioritised by use case.</p>
    </div>


    <div class="container visualtest mb-5 d-none d-sm-block">

      <div class="demo demo-bottom">
        <Table class="table--fullwidth" data-page="2" data-show="5" data-page-jump data-item-count data-per-page style="max-width: 48em;" data-no-scroll>
          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th>Date added</th>
                <th>Lorum ipsum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
            </tbody>
          </table>
        </Table>
      </div>
      <p class="mw-100 m-auto text-center text-primary pb-0 pt-2"><strong>Minimal pagination with page just paired with the item count label</strong></p>

    </div>

    <div class="container visualtest mb-5 d-none d-sm-block">

      <div class="demo demo-bottom">
        <Table class="table--fullwidth" data-page="2" data-show="5" data-item-count data-per-page style="max-width: 48em;" data-no-scroll>
          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th>Date added</th>
                <th>Lorum ipsum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
              </tr>
            </tbody>
          </table>
        </Table>
      </div>
      <p class="mw-100 m-auto text-center text-primary pb-0 pt-2"><strong>Minimal pagination paired with the item count label and items per page select</strong></p>

    </div>

    <div class="container pb-0">
      <h3>Mobile</h3>
      <p>Due to limited space and user scroll preferences, pagination is simplified on mobile. Depending on the type of table, there are two options available: a ‘Load more’ button or minimal pagination.</p>
    </div>


    <div class="container visualtest mb-5">
      <div class="row">
        <div class="col-12 col-md-6">

          <div class="demo demo-bottom">
            <div style="max-width: 23em; position: absolute;">
              <Table  data-page="2" data-show="5" data-item-count data-per-page data-no-scroll>
                <table>
                  <thead>
                    <tr>
                      <th>Client</th>
                      <th>Date added</th>
                      <th>Lorum ipsum</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                  </tbody>
                </table>
              </Table>
            </div>
          </div>
          <p class="mw-100 m-auto text-center text-primary pt-2"><strong>Load more button</strong></p>
          
        </div>
        <div class="col-12 col-md-6">

          <div class="demo demo-bottom">
            <div style="max-width: 23em; position: absolute;">
              <Table  data-page="2" data-show="5" data-item-count data-per-page data-loading data-no-scroll>
                <table>
                  <thead>
                    <tr>
                      <th>Client</th>
                      <th>Date added</th>
                      <th>Lorum ipsum</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                  </tbody>
                </table>
              </Table>
            </div>
          </div>
          <p class="mw-100 m-auto text-center text-primary pt-2"><strong>Loading icon while further table content is generated</strong></p>
        </div>
        <div class="col-12 col-md-6">

          <div class="demo demo-bottom">
            <div style="max-width: 23em; position: absolute;">
              <Table class="table--fullwidth mx-auto" data-page="2" data-show="5" data-no-scroll>
                <table>
                  <thead>
                    <tr>
                      <th>Client</th>
                      <th>Date added</th>
                      <th>Lorum ipsum</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                  </tbody>
                </table>
              </Table>
            </div>
          </div>
          <p class="mw-100 m-auto text-center text-primary pt-2"><strong>Minimal pagination</strong></p>
        </div>
        <div class="col-12 col-md-6">

          <div class="demo demo-bottom">
            <div style="max-width: 23em; position: absolute;">
              <Table class="table--fullwidth mx-auto" data-page="2" data-show="5" data-page-jump data-no-scroll>
                <table>
                  <thead>
                    <tr>
                      <th>Client</th>
                      <th>Date added</th>
                      <th>Lorum ipsum</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                    <tr>
                      <td>Tom Smith</td>
                      <td>10.05.23</td>
                      <td>Lorum ipsum</td>
                    </tr>
                  </tbody>
                </table>
              </Table>
            </div>
          </div>
          <p class="mw-100 m-auto text-center text-primary pt-2"><strong>Minimal pagination with page jump</strong></p>
        </div>
      </div>
      
    </div>

    <div class="container">
      
      <h2>Implementation</h2>
      <Tabs >
        <details>
          <summary><h2>Web component</h2></summary>
          <WebReadme></WebReadme>
        </details>
        <details>
          <summary><h2>Vue component</h2></summary>
          <Readme></Readme>
        </details>
        <!--<details>
          <summary><h2>HTML</h2></summary>
          <pre><code class="javascript">{{htmlUsage}}</code></pre>
        </details>-->
      </Tabs>
    </div>
    <div class="bg-light version-control">
      <div class="container">
        <table>
          <thead>
            <tr>
              <th>Version Control</th>
              <th>Date</th>
              <th>Notable updates</th>
            </tr>
          </thead>
          <tbody class="text-body">
            <tr>
              <td>V2</td>
              <td>21.09.2023</td>
              <td>Added new variations for pagination: minimal and minimal with page jump.<br/>
                Added new functions: Labels and items per page<br/>
                Added breakpoint designs and behaviours</td>
            </tr>
            <tr>
              <td>V0.1</td>
              <td>30.05.2023</td>
              <td>No designs supplied yet</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/pagination.pdf" download>Download latest designs</a>
      </div>
    </div>

  </main>
</template>

<style lang="scss" scoped>
@use "../../../assets/sass/func" as *;

#dispatchedEvents,
#dispatchedEvents2 {
  max-height: 10rem;

}

.demo + pre {

  margin-left: -1.5rem;
  margin-right: -1.5rem;
  
  @include container-up(sm) {

    margin-left: 0rem;
    margin-right: 0rem;
  }
}

.demo {
  
  container-type: inline-size;
  background-color: #F2F2F2;
  padding: 3rem 1.5rem;

  margin-left: -1.5rem;
  margin-right: -1.5rem;
  
  @include container-up(sm) {

    margin-left: 0rem;
    margin-right: 0rem;
  }

  @include dark-mode(){

    background-color: var(--colour-canvas);
  }
}

.demo-bottom {

  height: 20rem;
  position: relative;
  overflow: hidden;

  > * {
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translate(-50%,0);
    width: calc(100% - 3rem);
  }
}

@container (width < 23.4375em) {
  .admin-panel--per-page {
    border-left: 3px dashed var(--colour-border);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .admin-panel--per-page iam-pagination::part(per-page) {
    display: flex!important;
  }
  .admin-panel--per-page iam-pagination::part(minimal) {
    display: none!important;
  }
}

@container (width < 23.4375em) {
  .admin-panel--item-count {
    border-left: 3px dashed var(--colour-border);
    border-right: 3px dashed var(--colour-border);
    border-radius: 0;
  }
  .admin-panel--item-count iam-pagination::part(item-count) {
    display: block!important;
    margin: 0;
    line-height: rem(52);
    width: 100%;
  }
  .admin-panel--item-count iam-pagination::part(minimal) {
    display: none!important;
  }
}

</style>

<script>
import Tabs from '@/components/Tabs/Tabs.vue'
import Tab from '@/components/Tabs/Tab.vue'
import Readme from '@/components/Pagination/README.md'
import WebReadme from '~/ts/components/pagination/README.md'
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/type-header.png'
import Table from '@/components/Table/Table.vue'
import Pagination from '@/components/Pagination/Pagination.vue'


import anatomy from '../../img/pagination-anatomy.png'

export default {
  components: {
    DSHeader,
    Table,
    Readme,
    WebReadme,
    Tabs,
    Tab,
    Pagination,
    anatomy
  },
  mounted(){
    
  },
  data () {
    return {
      headerImg: headerImg,
      anatomy:anatomy
    }
  }
}
</script>