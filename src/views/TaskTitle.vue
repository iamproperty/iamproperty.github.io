<template>
  <div>
    <div class="row">
      <div class="col-sm-12 col-md-2">
        <side-bar></side-bar>
      </div>
      <div class="col-sm-12 col-md-9">
        <section class="mb5">
          <h3>Task Title</h3>
          <hr />
          <div class="paragraph-wrap">
            <p>
              A reusable Task Title component with various combinations of brand
              colours to choose from. If no <code>variant</code> is specified the component
              will default to <code>task-punchy-mustard</code>.
            </p>
            <p>The component requires the colour variables to exist in the project</p>
          </div>
          <task-title title="Task title goes here"></task-title>
          <task-title
            variant="task-homely-aubergine"
            title="Add new property alert"
          ></task-title>
          <task-title
            variant="task-fresh-blue"
            title="Create a contract"
          ></task-title>
          <task-title
            variant="task-deep-slate"
            title="Create a property note"
          ></task-title>
          <task-title
            variant="task-soft-green"
            title="Vendor contact task"
          ></task-title>
          <task-title
            variant="task-soft-pink"
            title="Link directors (area or managing) with other agencies"
          ></task-title>
          <task-title
            variant="task-grey-50"
            title="Add a new agent to the iamsold system"
          ></task-title>
          <task-title
            variant="task-grey-70"
            title="Manage Agency Branch Levels"
          ></task-title>
          <br />
          <h4>Usage</h4>
          <pre
            v-highlightjs
          ><code class="javascript">&lt;task-title variant="task-soft-green" title="Vendor contact task">&lt;/task-title>
</code></pre>
<br>
          <table
            class="b-table table table-bordered table-striped bv-docs-table"
          >
            <thead class="thead-default">
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code class="text-nowrap" translate="no">title</code>
                </td>
                <td>String</td>
                <td>
                  Banner title
                </td>
              </tr>
              <tr>
                <td>
                  <code class="text-nowrap" translate="no">variant</code>
                </td>
                <td>String</td>
                <td>
                  Applies one of the theme colour variants to the component eg:
                  <code>task-punchy-mustard task-homely-aubergine task-fresh-blue
                    task-deep-slate task-soft-green task-soft-pink task-grey-50
                    task-grey-70 </code>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <!-- End Task Title component -->
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import TaskTitle from '@/components/TaskTitle.vue'

export default {
  components: {
    SideBar,
    TaskTitle
  }
}
</script>
