<template>
  <main>

    <DSHeader :image="headerImg" section="components">
      <h1>Tables</h1>
    </DSHeader>




    <div class="container">
      <h2>Core table styles</h2>
      <p class="lead">Our tables table come in two size variants; one for mobile and one for tablet and desktop.</p>

      <p>We use a thicker line establish the table header. No vertical lines are used in our table design, as we rely on left- aligned text to create the table columns.</p>

      <p>All table columns have a minimum width of {{ $shared.cssVars.td_mw }} ({{ $shared.cssVars.td_mw_px }}px). All table use a container with container padding of {{ $shared.cssVars.table_padding }} ({{ $shared.cssVars.table_padding_px }}px) between table content and edge of the container. Table containers also apply a drop shadow with a default colour of HEX #000000, 6px Y-axis and 12px blur with an opacity of 11%.</p>
    </div>
    <div class="container visualtest">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <h3 class="h4">Mobile</h3>
          <Table>
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
              </tbody>
            </table>
          </Table>
        </div>
        <div class="col-12 col-md-5 offset-md-1">

          <h3 class="h4">Tablet/Desktop</h3>
          <Table>
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
              </tbody>
            </table>
          </Table>
        </div>
      </div>
    </div>

    
    <div class="container">
      <h2>Hoverable rows</h2>
      <p>In order to increase the readability of the table, particularly for content-heavy tables, the hover class on a row can be used to enable a hover state to highlight any rows within the table body.</p>
    </div>
    <div class="container visualtest">
      <div class="row">
        <div class="col-md-6">

          <h3 class="h4">Tablet/Desktop</h3>
          <Table>
            <table>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Date added</th>
                  <th>Lorum ipsum</th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover">
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
    </div>

    
    <div class="container">
      <h2>Horizontal scrollable table</h2>
      <p>For greater control over displaying larger sets of data we have the ability to horizontal scroll further data columns on tablet and desktop with the inclusion of a actionable CTA which remains sticky across the horizontal scroll-path. There needs to be spacing of at least 1rem (16px) between the left of the sticky CTA and the faded content.</p>
    </div>

    <div class="container visualtest">

      <h3 class="h4">Tablet/Desktop</h3>
      <Table class="table--cta">
        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>Date added</th>
              <th>Lorum ipsum</th>
              <th>Lorum ipsum</th>
              <th>Lorum ipsum</th>
              <th>Lorum ipsum</th>
              <th>Lorum ipsum</th>
              <th>Lorum ipsum</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td><a href="/">Manage client</a></td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td>Lorum ipsum</td>
              <td><a href="/">Manage client</a></td>
            </tr>
          </tbody>
        </table>
      </Table>
    </div>
    
    
    <div class="container">
      <h2>Max height table</h2>
      <p>To control how much real estate the table takes up on a page we can set a max height from a pre-defined list. Using the class of <b>.table--mh-small</b> will set the max height to {{$shared.cssVars.table_mh_sm}} ({{$shared.cssVars.table_mh_sm_px}}px); <b>.table--mh-medium</b> will set it to {{$shared.cssVars.table_mh_md}} ({{$shared.cssVars.table_mh_md_px}}px) and <b>.table--mh-large</b> will set it to {{$shared.cssVars.table_mh_lg}} ({{$shared.cssVars.table_mh_lg_px}}px). Commonly when using one of these classes we don't want to convert the table into a stackable view on mobile, this is achievable by adding the <b>.table--fullwidth</b> class.</p>
    </div>


    <Tabs class="container">
      <details>
        <summary><h3>Max height small</h3></summary>
        <Table class="table--mh-small table--fullwidth">
          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th>Date added</th>
                <th class="d-none d-sm-table-cell">Lorum ipsum</th>
                <th class="d-none d-sm-table-cell">Lorum ipsum</th>
                <th class="d-none d-md-table-cell">Lorum ipsum</th>
                <th class="d-none d-md-table-cell"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
            </tbody>
          </table>
        </Table>
      </details>
      <details>
        <summary><h3>Max height medium</h3></summary>
        <Table class="table--mh-medium table--fullwidth">
          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th>Date added</th>
                <th>Lorum ipsum</th>
                <th>Lorum ipsum</th>
                <th>Lorum ipsum</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
            </tbody>
          </table>
        </Table>
      </details>
      <details>
        <summary><h3>Max height large</h3></summary>
        <Table class="table--mh-large table--fullwidth">
          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th>Date added</th>
                <th>Lorum ipsum</th>
                <th>Lorum ipsum</th>
                <th>Lorum ipsum</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td>Lorum ipsum</td>
                <td><a href="/">Manage client</a></td>
              </tr>
            </tbody>
          </table>
        </Table>
      </details>
    </Tabs>

    
    <div class="container">
      <h2>Expandable table</h2>
      <p>For greater control over displaying larger sets of data on mobile, there is the option to hide and expand columns. Displaying at least three elements of table data by default, and hiding the rest within the expanded section.</p>
    </div>


    <div class="container visualtest">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <h3 class="h4">Mobile collapsed table</h3>
          <Table>
            <table>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Date added</th>
                  <th>Lorum ipsum</th>
                  <th>Lorum ipsum</th>
                  <th>Lorum ipsum</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tom Smith</td>
                  <td>10.05.23</td>
                  <td>Lorum ipsum</td>
                  <td>Lorum ipsum</td>
                  <td>Lorum ipsum</td>
                  <td><a href="/">Manage client</a></td>
                </tr>
              </tbody>
            </table>
          </Table>
        </div>
        <div class="col-sm-6 col-md-4 offset-md-1">

          <h3 class="h4">Mobile expanded table</h3>
          <Table>
            <table>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Date added</th>
                  <th>Lorum ipsum</th>
                  <th>Lorum ipsum</th>
                  <th>Lorum ipsum</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr data-view="full">
                  <td>Tom Smith</td>
                  <td>10.05.23</td>
                  <td>Lorum ipsum</td>
                  <td>Lorum ipsum</td>
                  <td>Lorum ipsum</td>
                  <td><a href="/">Manage client</a></td>
                </tr>
              </tbody>
            </table>
          </Table>
        </div>
      </div>
    </div>

    <div class="container">
      
      <h2>Implementation</h2>
      <Tabs>
        <details>
          <summary><h2>Web component</h2></summary>
          <WebReadme></WebReadme>
        </details>
        <details>
          <summary><h2>Vue component</h2></summary>
          <Readme></Readme>
        </details>
        <details>
          <summary><h2>HTML</h2></summary>
          <pre><code class="javascript">{{htmlUsage}}</code></pre>
        </details>
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
              <td>V1.1</td>
              <td>25.05.2023</td>
              <td>Max heights have been enabled</td>
            </tr>
            <tr>
              <td>V1 added</td>
              <td>15.05.2023</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/tables.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>

<script>
import Tabs from '@/components/Tabs/Tabs.vue'
import Tab from '@/components/Tabs/Tab.vue'
import Readme from '@/components/Table/README.md'
import WebReadme from '~/ts/components/table/README.md'
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/type-header.png'
import Table from '@/components/Table/Table.vue'

export default {
  components: {
    DSHeader,
    Table,
    Readme,
    WebReadme,
    Tabs,
    Tab,
  },
  mounted(){
    
  },
  data () {
    return {
      headerImg: headerImg,
      htmlUsage: `<div class="iam-table">
  <div class="table--cta">
    <div class="table__wrapper">
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1</td>
            <td>Row 1</td>
            <td>Row 1</td>
            <td>Row 1</td>
          </tr>
          <tr>
            <td>Row 2</td>
            <td>Row 2</td>
            <td>Row 2</td>
            <td>Row 2</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`
    }
  }
}
</script>