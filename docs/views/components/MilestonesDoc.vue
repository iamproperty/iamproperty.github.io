<script setup>
  import { ref } from 'vue';

  import MilestoneGroup from '@/components/Milestones/MilestoneGroup.vue';
  import Milestone from '@/components/Milestones/Milestone.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import taskStructure from '../../img/milestones/task-structure.png';
  import Integration from '../Integration.vue';

   const individualTaskData = ref([
          {
            id: "1",
            name: "Buyer solicitor",
            description: "The buyer must elect a conveyancer to work on their behalf in order to proceed with sale.",
            actions: [
              {
                id: "1",
                action: "Buyer solicitor added",
                active: true,
                order: "1",
              },
            ]
          },
          {
            id: "2",
            name: "Buyer Identity checks ",
            description: "Some text about buyer identity checks",
            actions: []
          },
          {
            id: "3",
            name: "Reservation Agreement signed",
            description: "",
            actions: [
              {
                id: "1",
                action: "Thomas Brown signed",
                date_completed: '16/07/2025'
              },
              {
                id: "2",
                action: "Stephen Pewter signed",
              },
              {
                id: "3",
                action: "Analise Thornton signed",
                date_completed: '16/07/2025'
              },
            ]
          },
        ]);

        const taskData = ref([
          {
            id: "1",
            name: "A task without any subtasks",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus arcu mi, ut pulvinar urna dictum in. Integer sed nunc sit amet nulla fermentum iaculis.",
            actions: [],
            date_completed: '16/07/2025'
          }, {
            id: "2",
            name: "A task with subtasks",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus arcu mi, ut pulvinar urna dictum in. Integer sed nunc sit amet nulla fermentum iaculis.",
            actions: [
              {
                id: "1",
                action: "Subtask 1",
                date_completed: '16/07/2025'
              },
              {
                id: "2",
                action: "Subtask 2",
                date_completed: null
              }
            ]
          }
        ]);

</script>

<style>
  .milestone,
  .milestone-group {
    margin-inline: auto;
  }
</style>


<template>
  <main>
     <DSHeader :image="headerImg" section="components">
      <h1>Milestones</h1>
    </DSHeader>

    <p class="lead md-col-end-7">
      A component for displaying nested hierarchical information to give end users visibility of key progression milestones in a linear path.
    </p>

    <div class="visualtest container">
      <h2>Overview</h2>

      <p class="md-col-end-7">
        A milestone is made up of nested tasks with further nested sub-tasks. The tasks and sub-tasks have a parent-child relationship where children (sub-tasks) can be toggled into view by expanding or collapsing their parent item (tasks) .
      </p>

      <Milestone :data-items="JSON.stringify(individualTaskData)" data-status="Current">
          <div slot="milestone-intro">          
            <h2 class="h4">Post Sale</h2>
            <p>You have a Winning bidder! We'll guide the buyer through the next steps, helping ensure everything moves smoothly toward completion. It's all about keeping things on track and making the handover as seamless as possible.</p>
          </div>
      </Milestone>

    </div>
    <div class="container mt-3">
      <h2>Content</h2>
      <h3>Main elements</h3>
      <p>You should be able to label your milestone title, task title and sub-task titles. When naming, consider the end user comprehension and using descriptive summaries to provide further context where needed. Follow the below guidelines:</p>
      <ul>
        <li>Milestone titles: Clear, concise naming that describes the general point in the process the end user is at.</li>
        <li>Task and sub-task titles: More specific naming relevant to the task being performed.</li>
        <li>Summaries: Provides further context to end users, brief and descriptive about things like roles, responsibilities and makes use of inviting language (marketing influence).</li>
        <li>Timestamps: The timestamps date when a sub-task was completed.</li>
      </ul>

      <h3 class="mt-3">Structure</h3>
      <img :src="taskStructure" />

      
      <h3 class="mt-4">States</h3>

      <h4>Milestone</h4>

      <div class="col-end-6">
        <span class="label">Upcoming</span>
        <p>A projected step based on current progress. Displays the expected next milestone to help users anticipate what's ahead. This step may adapt based on previous actions, with a default path that can switch to alternatives as needed.</p>
      </div>

      <div class="col-start-7">
        <span class="label">Current step</span>
        <p>The step the user is actively progressing through. Shows the current milestone with nested tasks, which may be in progress or partially completed. Supports detailed tracking within a single stage.</p>
      </div>

       <div class="col-end-6">
        <span class="label">Completed</span>
        <p>A finished step, fully completed. Indicates that all tasks within this step are done. Helps users see their progress in a clear, linear flow.</p>
      </div>

      <h4>Tasks</h4>

      <div class="col-end-6">
        <span class="label">Projected</span>
        <p>Upcoming task with no progress started. Displays as inactive with a count of (0/x) subtasks and an unchecked progress icon to help users anticipate what's coming.</p>
      </div>
      
      <div class="col-start-7">
        <span class="label">In Progress</span>
        <p>Active task. Shows real-time progress with a dynamic count (e.g. 2/3) and an unchecked progress icon. Gives users clear visibility into what's underway but not yet complete.</p>
      </div>

      <div class="col-end-6">
        <span class="label">Completed</span>
        <p>Fully completed task. Marked with a green checked progress icon and a full subtask count (e.g. 3/3), clearly indicating that the task is finished. </p>
      </div>

      <h4>Subtasks</h4>

      <div class="col-end-6">
          <span class="label">Incomplete</span>
          <p>Subtask not yet completed. Displays an unchecked icon alongside a clear, descriptive title that outlines the work to be done. Provides transparency into the actions required to progress the overall task.</p>
      </div>
      
      <div class="col-start-7">
        <span class="label">Complete</span>
        <p>Subtask fully completed. Marked with a green checked icon, a persistent descriptive title, and a timestamp indicating the date of completion—helping users understand both progress and the full historical timeline.</p>
      </div>

      <h3>Interactions</h3>

      <p>The milestone component is designed with minimal interactivity in its first iteration, supporting its role in presenting a clear, linear timeline of a transaction. Each milestone displays a structured hierarchy of tasks and sub-tasks, where users can toggle visibility of sub-tasks by expanding or collapsing their parent task. This approach maintains a clean layout while still providing access to detailed progression insights.</p>

      <div class="col-end-6">
        <span class="label">Collapsed</span>
        <p>Hides nested content to keep the view clean and compact.</p>
      </div>

      <div class="col-start-7">
        <span class="label">Expanded</span>
        <p>Reveals nested tasks and sub-tasks for deeper visibility.</p>
      </div>

    </div>

    <div class="visualtest container mt-4">
      <h2>Milestone Group</h2>

      <p class="md-col-end-7">
        A series of milestone components can be added to a Milestone Group component. This adds the ability to hide and show any items after the current milestone.
        You can find more information about the Milestone Group component <router-link :to="{ path: 'milestone-group' }">here</router-link>
      </p>


    </div>

     <Integration component="milestone" componentName="iam-milestone">
      <template #web-component>
        <pre><code>{{`<iam-milestone data-items="[]">
  <div slot="milestone-intro">          
    <h2 class="h4">Title Text</h2>
    <p>Some summary text about this milestone. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus arcu mi, ut pulvinar urna dictum in.</p>
  </div>
</iam-milestone>`}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import Milestone from '@/components/Milestones/Milestone.vue</script>
        
<Milestone :data-items="[]">
  <div slot="milestone-intro">          
    <h2 class="h4">Title Text</h2>
    <p>Some summary text about this milestone. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus arcu mi, ut pulvinar urna dictum in.</p>
  </div>
</Milestone>
`}}</code></pre>
      </template>

       <template #slots>
        <table>
          <thead>
            <tr>
              <th>Slot</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Default</th>
              <td>The default slot is where any tasks within the milestone are rendered</td>
            </tr>
            <tr>
              <th>Milestone Intro</th>
              <td>The Milestone Intro slot is where the title and summary text for the milestone are rendered.</td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #attr>
        <table>
          <thead>
            <tr>
              <th>Attributes</th>
              <th>Default</th>
              <th>Options/Type</th>
              <th>Required</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>status</th>
              <td>-</td>
              <td>String</td>
              <td>No</td>
              <td>This property is used to add a status tag to the top of the milestone. e.g. 'Next Milestone' If the value of this attribute is 'Current' then all the milestones after this one will be styled alternatively.</td>
            </tr>
            <tr>
              <th>items</th>
              <td>-</td>
              <td>Array</td>
              <td>No</td>
              <td>
                This is a property for adding a task and subtask list into the milestone. A name and description can be passed in for each task as well as an array of subtasks, and an optional date_completed. The date_completed will mark the task or subtask with a green tick, as well as showing the date completed alongside subtasks.
              </td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #parts>
        <table>
          <thead>
            <tr>
              <th>Part</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>milestone-wrap</th>
              <td>The wrapper around all of the milestone content.</td>
            </tr>
            <tr>
              <th>milestone-intro</th>
              <td>The wrapper around intro content: the title and summary of the milestone.</td>
            </tr>
            <tr>
              <th>milestone-task-wrap</th>
              <td>The wrapper for tasks that are added to the milestone.</td>
            </tr>

          </tbody>
        </table>
      </template>

      <template #vars>
        <table>
          <thead>
            <tr>
              <th>Var</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>--milestone-panel-border</th>
              <td>The border colour of the milestone panel.</td>
            </tr>
            <tr>
              <th>--milestone-default-background</th>
              <td>The default background colour of a milestone.</td>
            </tr>
            <tr>
              <th>--milestone-future-background</th>
              <td>The background colour of a milestone after the current milestone.</td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #dispatched-events>
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Dispatched</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>milestone-item-opened</th>
              <td>When one of the task items within the milestone has been opened</td>
              <td>{ "event": "milestone-item-opened", "title": "Item summary title"}</td>
            </tr>
            <tr>
              <th>milestone-item-closed</th>
              <td>When one of the task items within the milestone has been closed</td>
              <td>{ "event": "milestone-item-closed", "title": "Item summary title"}</td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #criteria>
        <ul>
          <li>A milestone with a status set should show that status at the top of the milestone block</li>
          <li>Clicking anywhere on a task should open the task content, including a description and a list of subtasks if applicable.</li>
          <li>A completed task should be shown with a green tick alongside it</li>
          <li>An open task with subtasks should show a list of those subtasks with an empty circle alongside the name</li>
          <li>A completed subtask should be shown with a green tick alongside it</li>
          <li>A completed subtask should be shown with the date it was completed alongside it</li>
          <li>If a task has subtasks, the number of completed subtasks should be shown alongsidee the task name</li>
        </ul>
      </template>
      <template #data-layer>
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Dispatched</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>milestone-item-opened</th>
              <td>When one of the task items within the milestone has been opened</td>
              <td>{ "event": "milestone-item-opened", "title": "Item summary title"}</td>
            </tr>
            <tr>
              <th>milestone-item-closed</th>
              <td>When one of the task items within the milestone has been closed</td>
              <td>{ "event": "milestone-item-closed", "title": "Item summary title"}</td>
            </tr>
          </tbody>
        </table>
      </template>
    </Integration>

  </main>
</template>
