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

      <Milestone :data-items="JSON.stringify(individualTaskData)" >
          <div slot="milestone-intro">          
            <h2 class="h4">Post Sale</h2>
            <p>You have a Winning bidder! We'll guide the buyer through the next steps, helping ensure everything moves smoothly toward completion. It's all about keeping things on track and making the handover as seamless as possible.</p>
          </div>
      </Milestone>

    </div>
    <div class="container">
      <h2>Content</h2>
      <h3>Main elements</h3>
      <p>You should be able to label your milestone title, task title and sub-task titles. When naming, consider the end user comprehension and using descriptive summaries to provide further context where needed. Follow the below guidelines:</p>
      <ul>
        <li>Milestone titles: Clear, concise naming that describes the general point in the process the end user is at.</li>
        <li>Task and sub-task titles: More specific naming relevant to the task being performed.</li>
        <li>Summaries: Provides further context to end users, brief and descriptive about things like roles, responsibilities and makes use of inviting language (marketing influence).</li>
        <li>Timestamps: The timestamps date when a sub-task was completed.</li>
      </ul>

      <h3>Structure</h3>
      
      <h3>States</h3>

      <h4>Milestone</h4>
      <span class="label">Upcoming</span>
      <p>A projected step based on current progress. Displays the expected next milestone to help users anticipate what's ahead. This step may adapt based on previous actions, with a default path that can switch to alternatives as needed.</p>

      <span class="label">Current step</span>
      <p>The step the user is actively progressing through. Shows the current milestone with nested tasks, which may be in progress or partially completed. Supports detailed tracking within a single stage.</p>
    
      <span class="label">Completed</span>
      <p>A finished step, fully completed. Indicates that all tasks within this step are done. Helps users see their progress in a clear, linear flow.</p>

      <h4>Tasks</h4>

      <div class="col-end-6">
        <span class="label">Projected</span>
        <p>Upcoming task with no progress started. Displays as inactive with a count of (0/x) subtasks and an unchecked progress icon to help users anticipate what's coming.</p>
      </div>
      
      <div class="col-end-6">
        <span class="label">In Progress</span>
        <p>Active task. Shows real-time progress with a dynamic count (e.g. 2/3) and an unchecked progress icon. Gives users clear visibility into what's underway but not yet complete.</p>
      </div>

      <div class="col-end-6">
        <span class="label">Completed</span>
        <p>Fully completed task. Marked with a green checked progress icon and a full subtask count (e.g. 3/3), clearly indicating that the task is finished. </p>
      </div>

      <h4>Subtasks</h4>
      <span class="label">Incomplete</span>
      <p>Subtask not yet completed. Displays an unchecked icon alongside a clear, descriptive title that outlines the work to be done. Provides transparency into the actions required to progress the overall task.</p>

      <span class="label">Complete</span>
      <p>Subtask fully completed. Marked with a green checked icon, a persistent descriptive title, and a timestamp indicating the date of completion—helping users understand both progress and the full historical timeline.</p>


      <h3>Interactions</h3>

      <p>The milestone component is designed with minimal interactivity in its first iteration, supporting its role in presenting a clear, linear timeline of a transaction. Each milestone displays a structured hierarchy of tasks and sub-tasks, where users can toggle visibility of sub-tasks by expanding or collapsing their parent task. This approach maintains a clean layout while still providing access to detailed progression insights.</p>

      <span class="label">Collapsed</span>
      <p>Hides nested content to keep the view clean and compact.</p>

      <span class="label">Expanded</span>
      <p>Reveals nested tasks and sub-tasks for deeper visibility.</p>

    </div>

    <div class="visualtest container mt-4">
      <h2>Milestone Group</h2>

      <p class="md-col-end-7">
        A series of milestone components can be added to a Milestone Group component. This adds the ability to hide and show any items after the current milestone.
      </p>

      <MilestoneGroup data-show-all-toggle="true" class="reverse-items">

        <Milestone :data-items="JSON.stringify(taskData)" >
          <div slot="milestone-intro">          
            <h2 class="h4">Onboarding</h2>
          </div>
        </Milestone>

        <Milestone :data-items="JSON.stringify(taskData)" data-status="Current">
          <div slot="milestone-intro">          
            <h2 class="h4">Preparing for Auction</h2>
            <p>Preparing for Auction is all about getting everything in place to ensure a smooth and successful sale. Behind the scenes, we’re handling the essentials so your property is ready to make a strong first impression.</p>
          </div>
        </Milestone>
        
        <Milestone :data-items="JSON.stringify(taskData)" data-status="Next">
          <div slot="milestone-intro">          
            <h2 class="h4">Auction live</h2>
          </div>
        </Milestone>
        
        <Milestone :data-items="JSON.stringify(taskData)">
          <div slot="milestone-intro">          
            <h2 class="h4">Post Sale</h2>
            <p>You have a Winning bidder! We'll guide the buyer through the next steps, helping ensure everything moves smoothly toward completion. It's all about keeping things on track and making the handover as seamless as possible.</p>
          </div>
        </Milestone>

        <Milestone :data-items="JSON.stringify(taskData)">
          <div slot="milestone-intro">          
            <h2 class="h4">Sale agreed</h2>
            <p>On confirmation of signed Reservation Agreement, you can proceed with officially instructing your own Solicitor to speed up the sale. Doing this in advance can reduce timescales significantly</p>
          </div>
        </Milestone>

        <Milestone :data-items="JSON.stringify(taskData)">
          <div slot="milestone-intro">          
            <h2 class="h4">Sale Progression</h2>
            <p>A dedicated Completion Specialist will soon reach out to introduce themselves and guide you through the next steps. Meanwhile, we’re working closely with all parties to keep the legal process on track—making sure everything flows smoothly as your sale moves forward.</p>
          </div>
        </Milestone>

        <Milestone :data-items="JSON.stringify(taskData)">
          <div slot="milestone-intro">          
            <h2 class="h4">Reservation Period</h2>
            <p>Our specialists actively oversee the conveyancing process, providing weekly updates to keep everyone informed and ensure the sale progresses smoothly toward completion.</p>
          </div>
        </Milestone>

        <Milestone>
          <div slot="milestone-intro">          
            <h2 class="h4">Complete</h2>
          </div>
        </Milestone>

   
      </MilestoneGroup>
    </div>

  </main>
</template>

<script>
  import MilestoneGroup from '@/components/Milestones/MilestoneGroup.vue';
  import Milestone from '@/components/Milestones/Milestone.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/cards-header.png';
  import Integration from '../Integration.vue';

  export default {
    components: {
      Milestone,
      MilestoneGroup,
      DSHeader,
      headerImg,
      Integration
    },
    data() {
      return {
        individualTaskData: [
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
        ],
        taskData: [
          {
            id: "1",
            name: "Appraisal Call",
            description: "We need a call with you to discuss auction for your property.",
            active: true,
            subtask_order: "1",
            actions: [],
            date_completed: '16/07/2025'
          }, {
            id: "2",
            name: "Auction Agreement Sent",
            description: "Following a discussion with all vendors, we have collectively agreed auction is appropriate for your property. We've sent an Auction Agreement to you.",
            active: true,
            subtask_order: "2",
            actions: [
              {
                id: "1",
                action: "Review and Sign Your Auction Agreement",
                description: "It's important that you do this as soon as possible, so that we can get the ball rolling for you.",
                active: true,
                order: "1",
                date_completed: '16/07/2025'
              },
              {
                id: "2",
                action: "Some other thing",
                description: "It's important that you do this as soon as possible, so that we can get the ball rolling for you.",
                active: true,
                order: "1",
                date_completed: null
              }
            ]
          }
        ],
      }
    },
  };
</script>
