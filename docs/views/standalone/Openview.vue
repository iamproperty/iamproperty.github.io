<template>
  <div>
    <Nav logo="openview" class="nav--marketplace" propertylink="/standalone/marketplace" movebutlerlink="/standalone/movebutler" iamsoldlink="/standalone/agent">
      
    </Nav>
    <main >

      <div class="container">
          
        <h1>Welcome back, John!</h1>
        <div class="row pb-3 align-items-baseline">
          <div class="col-12 col-md mw-md-fit-content">
            <div class="dialog__wrapper">
              <button class="btn btn-primary"><i class="fa-solf fa-plus-large"></i>Add new record</button>
              <dialog>
                <a href="/" class="btn btn-tertiary d-block text-decoration-none">Sales applicant</a>
                <a href="/" class="btn btn-tertiary d-block text-decoration-none">Sales applicant</a>
                <a href="/" class="btn btn-tertiary d-block text-decoration-none">Sales applicant</a>
                <a href="/" class="btn btn-tertiary d-block text-decoration-none">Sales applicant</a>
                <a href="/" class="btn btn-tertiary d-block text-decoration-none">Sales applicant</a>
                <a href="/" class="btn btn-tertiary d-block text-decoration-none">Sales applicant</a>
                <hr class="border mb-2"/>
                <button class="btn btn-tertiary dialog__close d-block text-decoration-none">Close</button>
              </dialog>
            </div>
          </div>
          <div class="col-12 col-sm mw-sm-fit-content">
            <a href="/propery" class="btn btn-tertiary"><i class="fa-regular fa-clipboard-list-check"></i> View property management</a>
          </div>
          <div class="col-12 col-sm">
            <a href="/propery" class="btn btn-tertiary"><i class="fa-regular fa-cloud-question"></i> Visit help centre</a>
          </div>
        </div>

        <hr>
        <div class="form-control__wrapper"><label for="search" class="form-label d-none d-sm-block">Search all records</label><span class="suffix" role="presentation"><i class="fa fa-light fa-search" aria-hidden="true"></i></span><input name="search" id="search" type="text" class="form-control" data-search="Client, Transaction address" list="search_list" autocomplete="off"><datalist id="search_list"></datalist></div>

      </div>
      <div class="container">
          
        <div class="row">
          <div class="col-sm-6 col-md-4">
            <div class="admin-panel">
              <h2><i class="fa-regular fa-calendar"></i> Today's events</h2>
              <Table class="mh-md table--fullwidth" data-show="5">
                <table>
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>9:30</td>
                      <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                    </tr>
                    <tr>
                      <td>9:30</td>
                      <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                    </tr>
                    <tr>
                      <td>9:30</td>
                      <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                    </tr>
                    <tr>
                      <td>9:30</td>
                      <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                    </tr>
                    <tr>
                      <td>9:30</td>
                      <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                    </tr>
                    <tr>
                      <td>9:30</td>
                      <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                    </tr>
                    <tr>
                      <td>9:30</td>
                      <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                    </tr>
                    <tr>
                      <td>9:30</td>
                      <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                    </tr>
                    <tr>
                      <td>9:30</td>
                      <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                    </tr>
                    <tr>
                      <td>9:30</td>
                      <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                    </tr>
                  </tbody>
                </table>
              </Table>
              <a href="/propery" class="btn btn-tertiary"><i class="fa-regular fa-calendar"></i> View calendar</a>
            </div>
          </div>
          <div class="col-sm-6 col-md-8">
            <div class="admin-panel">
              <h2><i class="fa-regular fa-circle-check"></i> My tasks</h2>
              <Table class="mh-md table--fullwidth">
                <table>
                  <thead>
                    <tr>
                      <th class="d-none d-md-table-cell pe-0" data-td-class="pe-0"></th>
                      <th>Status</th>
                      <th>Name</th>
                      <th class="d-none d-md-table-cell">Priority</th>
                      <th class="d-none d-md-table-cell">Start date</th>
                      <th class="d-none d-md-table-cell">Due date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="dialog__wrapper">
                          <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                          <dialog class="dialog--fix">
                            <a href="/" class="btn btn-tertiary d-block text-decoration-none">View task</a>
                            <a href="/" class="btn btn-tertiary d-block text-decoration-none">Mark as complete</a>
                            <button class="btn btn-tertiary d-block text-decoration-none">Delete task</button>
                            <hr class="border border-1 mb-2"/>
                            <button class="btn btn-tertiary dialog__close text-decoration-none">Close</button>
                          </dialog>
                        </div>
                      </td>
                      <td>Not started</td>
                      <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                      <td>Medium</td>
                      <td>10/04/2023</td>
                      <td>10/06/2023</td>
                    </tr>
                    
                    <tr>
                      <td>
                        <div class="dialog__wrapper">
                          <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                          <dialog class="dialog--fix">
                            <a href="/" class="btn btn-tertiary">View task</a>
                            <a href="/" class="btn btn-tertiary">Mark as complete</a>
                            <button class="btn btn-tertiary">Delete task</button>
                            <button>Close</button>
                          </dialog>
                        </div>
                      </td>
                      <td>Not started</td>
                      <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                      <td>Medium</td>
                      <td>10/04/2023</td>
                      <td>10/06/2023</td>
                    </tr>
                    
                    <tr>
                      <td>
                        <div class="dialog__wrapper">
                          <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                          <dialog class="dialog--fix">
                            <a href="/" class="btn btn-tertiary">View task</a>
                            <a href="/" class="btn btn-tertiary">Mark as complete</a>
                            <button class="btn btn-tertiary">Delete task</button>
                            <button>Close</button>
                          </dialog>
                        </div>
                      </td>
                      <td>Not started</td>
                      <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                      <td>Medium</td>
                      <td>10/04/2023</td>
                      <td>10/06/2023</td>
                    </tr>
                    
                    <tr>
                      <td>
                        <div class="dialog__wrapper">
                          <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                          <dialog class="dialog--fix">
                            <a href="/" class="btn btn-tertiary">View task</a>
                            <a href="/" class="btn btn-tertiary">Mark as complete</a>
                            <button class="btn btn-tertiary">Delete task</button>
                            <button>Close</button>
                          </dialog>
                        </div>
                      </td>
                      <td>Not started</td>
                      <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                      <td>Medium</td>
                      <td>10/04/2023</td>
                      <td>10/06/2023</td>
                    </tr>
                    
                    <tr>
                      <td>
                        <div class="dialog__wrapper">
                          <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                          <dialog class="dialog--fix">
                            <a href="/" class="btn btn-tertiary">View task</a>
                            <a href="/" class="btn btn-tertiary">Mark as complete</a>
                            <button class="btn btn-tertiary">Delete task</button>
                            <button>Close</button>
                          </dialog>
                        </div>
                      </td>
                      <td>Not started</td>
                      <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                      <td>Medium</td>
                      <td>10/04/2023</td>
                      <td>10/06/2023</td>
                    </tr>
                    
                    <tr>
                      <td>
                        <div class="dialog__wrapper">
                          <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                          <dialog class="dialog--fix">
                            <a href="/" class="btn btn-tertiary">View task</a>
                            <a href="/" class="btn btn-tertiary">Mark as complete</a>
                            <button class="btn btn-tertiary">Delete task</button>
                            <button>Close</button>
                          </dialog>
                        </div>
                      </td>
                      <td>Not started</td>
                      <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                      <td>Medium</td>
                      <td>10/04/2023</td>
                      <td>10/06/2023</td>
                    </tr>
                    
                    <tr>
                      <td>
                        <div class="dialog__wrapper">
                          <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                          <dialog class="dialog--fix">
                            <a href="/" class="btn btn-tertiary">View task</a>
                            <a href="/" class="btn btn-tertiary">Mark as complete</a>
                            <button class="btn btn-tertiary">Delete task</button>
                            <button>Close</button>
                          </dialog>
                        </div>
                      </td>
                      <td>Not started</td>
                      <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                      <td>Medium</td>
                      <td>10/04/2023</td>
                      <td>10/06/2023</td>
                    </tr>
                    
                    <tr>
                      <td>
                        <div class="dialog__wrapper">
                          <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                          <dialog class="dialog--fix">
                            <a href="/">View task</a>
                            <a href="/">Mark as complete</a>
                            <button>Delete task</button>
                            <button>Close</button>
                          </dialog>
                        </div>
                      </td>
                      <td>Not started</td>
                      <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                      <td>Medium</td>
                      <td>10/04/2023</td>
                      <td>10/06/2023</td>
                    </tr>
                    
                    <tr>
                      <td>
                        <div class="dialog__wrapper">
                          <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                          <dialog class="dialog--fix">
                            <a href="/">View task</a>
                            <a href="/">Mark as complete</a>
                            <button>Delete task</button>
                            <button>Close</button>
                          </dialog>
                        </div>
                      </td>
                      <td>Not started</td>
                      <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                      <td>Medium</td>
                      <td>10/04/2023</td>
                      <td>10/06/2023</td>
                    </tr>
                    
                    <tr>
                      <td>
                        <div class="dialog__wrapper">
                          <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                          <dialog class="dialog--fix">
                            <a href="/">View task</a>
                            <a href="/">Mark as complete</a>
                            <button>Delete task</button>
                            <button>Close</button>
                          </dialog>
                        </div>
                      </td>
                      <td>Not started</td>
                      <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                      <td>Medium</td>
                      <td>10/04/2023</td>
                      <td>10/06/2023</td>
                    </tr>
                    
                    <tr>
                      <td>
                        <div class="dialog__wrapper">
                          <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                          <dialog class="dialog--fix">
                            <a href="/">View task</a>
                            <a href="/">Mark as complete</a>
                            <button>Delete task</button>
                            <button>Close</button>
                          </dialog>
                        </div>
                      </td>
                      <td>Not started</td>
                      <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                      <td>Medium</td>
                      <td>10/04/2023</td>
                      <td>10/06/2023</td>
                    </tr>
                    
                    <tr>
                      <td>
                        <div class="dialog__wrapper">
                          <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                          <dialog class="dialog--fix">
                            <a href="/">View task</a>
                            <a href="/">Mark as complete</a>
                            <button>Delete task</button>
                            <button>Close</button>
                          </dialog>
                        </div>
                      </td>
                      <td>Not started</td>
                      <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                      <td>Medium</td>
                      <td>10/04/2023</td>
                      <td>10/06/2023</td>
                    </tr>
                    
                  </tbody>
                </table>
              </Table>
              <a href="/propery" class="btn btn-tertiary"><i class="fa-light fa-circle-check"></i> View all tasks</a>
            </div>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>
<style lang="scss" >



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
      
    }, "100");

  }
}

</script>