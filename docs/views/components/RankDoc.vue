<script setup>
  import TrackEvents from '../TrackEvents.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';

  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';

  import Rank from '@/components/Rank/Rank.vue';
  import Rankings from '@/components/Rankings/Rankings.vue';

  import podium from '../../img/podium.png';

  import podiumAnatomy from '../../img/podium-anatomy.png';
  import rankItemAnatomy from '../../img/rank-item-anatomy.png';
</script>

<template>
  <TrackEvents selector="iam-rank" :events="['update-show']"></TrackEvents>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Ranking component</h1>
    </DSHeader>

    <p class="lead">
      The ranking component displays items ordered by importance, preference, or performance—typically from 1 to 10.
      They are ideal for showcasing top lists, leaderboards, or prioritised results in a clear, visual format.
    </p>

    <p>
      Ranking components are best used with small to medium data sets. For more complex comparisons or detailed metrics,
      consider using a table or bar chart for better clarity and scalability.
    </p>

    <img :src="podium" class="mb-4" />

    <ol class="mb-5">
      <li><strong>Podium:</strong> The top three ranked items are displayed in the podium area.</li>
      <li>
        <strong>Ranking list:</strong> Up to ten items displayed in a scrollable list. The item in first position shows
        a gold medal indicator, while all others display a numerical rank. One item can be highlighted.
      </li>
    </ol>

    <h2>Podium</h2>

    <p>The podium area showcases the top three ranked items fixed in position above the ranking list.</p>

    <h3>Podium anatomy</h3>

    <img :src="podiumAnatomy" class="mb-4" />

    <ol class="mb-5">
      <li><strong>Podium step:</strong> Each of the top three ranked positions has a step on the podium.</li>
      <li>
        <strong>Award illustration:</strong> A visual icon representing the ranking tier: Gold trophy for first place,
        silver medal for second place, bronze medal for third place.
      </li>
      <li>
        <strong>Position Background:</strong> A styled background element with a subtle display of the item s position
        number, helping to visually reinforce the rank.
      </li>
      <li>
        <strong>Item Title:</strong> The name or label of the ranked item, displayed clearly beneath or alongside the
        other elements for easy identification.
      </li>
    </ol>

    <h3>Award illustration</h3>

    <p>A visually distinctive, isometric-style graphic that signifies each ranking position. It consists of</p>
    <ul class="mb-5">
      <li>
        A base rendered in a geometric, angled perspective to convey depth and hierarchy. Small and large sizes are used
        for second and third, and first places, respectively.
      </li>
      <li>
        An icon placed over the base, symbolising the rank: a trophy, medal, or other relevant imagery corresponding to
        first, second or third place.
      </li>
    </ul>

    <div class="d-flex mb-5">
      <rank class="me-4 rank--medal">1st</rank>

      <rank class="me-4 rank--medal">2nd</rank>
      <rank class="me-4 rank--medal">3rd</rank>

      <rank class="rank--trophy rank--medal me-4">1st</rank>

      <rank>5th</rank>
    </div>

    <h3>Position background</h3>

    <p>
      The position background is a styled background element with a subtle display of the item s position number,
      helping to visually reinforce the rank. The text style, ranking number and background gradient are position
      dependent using the values below:
    </p>

    <div class="d-flex mb-2 md-col-end-8 position-backgrounds">
      <rank class="me-4" data-title="Company name">1st</rank>

      <p class="me-4"><strong>Gradient:</strong> Linear #FFFFFF to #FDCB6E</p>
      <p class="me-4"><strong>Ranking number:</strong> Qanelas Bold, 72px #F6B818 at 10%</p>
      <p class="me-4"><strong>Item title:</strong> Qanelas Bold, 18px Text colour</p>
    </div>

    <div class="d-flex mb-2 md-col-end-8 position-backgrounds">
      <rank class="me-4" data-title="Company name">2nd</rank>

      <p class="me-4"><strong>Gradient:</strong> Linear #FFFFFF to #A9A9A9</p>
      <p class="me-4"><strong>Ranking number:</strong> Qanelas Bold, 72px #A9A9A9 at 10%</p>
      <p class="me-4"><strong>Item title:</strong> 'Body' 'Text colour'</p>
    </div>

    <div class="d-flex mb-5 md-col-end-8 position-backgrounds">
      <rank class="me-4" data-title="Company name">3rd</rank>

      <p class="me-4"><strong>Gradient:</strong> Linear #FFFFFF to #FDCB6E</p>
      <p class="me-4"><strong>Ranking number:</strong> Qanelas Bold, 72px #F6B818 at 10%</p>
      <p class="me-4"><strong>Item title:</strong> 'Body' 'Text colour'</p>
    </div>

    <p>
      The item title should fit within the item title area, after which point it should be truncated with an ellipsis
    </p>

    <h3>Podium step</h3>

    <p>
      The podium step incorporates both the award illustration and postion background. The top ranked item is positioned
      in first place, with a slight difference to the height and size of the illustration to give an nod towards podium
      positions.
    </p>

    <div class="d-flex mb-5">
      <rank class="me-4" data-title="Company name">1st</rank>

      <rank class="me-4" data-title="Company name">2nd</rank>
      <rank class="me-4" data-title="Company name">3rd</rank>

      <rank class="rank--trophy me-4" data-title="Company name">1st</rank>
    </div>

    <p>
      Award illustrations are aligned from the bottom of the podium step, with first place being further from the bottom
      of the step than second and third places.
    </p>

    <h2>Ranking list</h2>

    <p>
      The ranking list shows up to ten rank items displayed in a scrollable list. The item in first position shows a
      gold medal indicator, while all others display a numerical rank. One item can be highlighted.
    </p>

    <h3>Rank item anatomy</h3>

    <img :src="rankItemAnatomy" class="mb-4" />

    <ol class="mb-5">
      <li>
        <strong>Ranking position or icon:</strong> A numerical indication of rank, or, if ranked first, an icon showing
        a gold medal.
      </li>
      <li><strong>Item title:</strong> The title of the ranked item.</li>
      <li><strong>Value (optional):</strong> The value of the ranked item.</li>
      <li>
        <strong>Progress indicator (optional):</strong> Horizontal bar showing progress towards the value of the top
        ranked item.
      </li>
      <li><strong>Divider:</strong> A 1px horizontal line spanning the rank item to separate items in a list.</li>
    </ol>

    <h3>Rank item types</h3>

    <h4 class="md-col-end-3 mt-2">First Place</h4>

    <Rankings data-max="12" class="md-col-start-4 md-col-end-10 hide-podium">
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Pinnacle Homes</th>
            <td>11</td>
          </tr>
        </tbody>
      </table>
    </Rankings>

    <h4 class="md-col-end-3 mt-2">Standard</h4>

    <Rankings data-max="12" class="md-col-start-4 md-col-end-10 hide-podium hide-gold">
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Pinnacle Homes</th>
            <td>11</td>
          </tr>
        </tbody>
      </table>
    </Rankings>

    <h4 class="md-col-end-3 mt-2">First Place, highlighted</h4>

    <Rankings data-max="12" class="md-col-start-4 md-col-end-10 hide-podium">
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
          <tr class="highlighted">
            <th>Pinnacle Homes</th>
            <td>11</td>
          </tr>
        </tbody>
      </table>
    </Rankings>

    <h4 class="md-col-end-3 mt-2">Highlighted</h4>

    <Rankings data-max="12" class="md-col-start-4 md-col-end-10 hide-podium hide-gold">
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
          <tr class="highlighted">
            <th>Pinnacle Homes</th>
            <td>11</td>
          </tr>
        </tbody>
      </table>
    </Rankings>

    <p>
      Each type can also be used displaying any combination of position, value and progress indicator. In Figma this is
      toggled by a display property.
    </p>

    <div class="md-col-end-5">
      <strong>Position and value</strong>
      <Rankings data-max="12" class="hide-podium hide-progress hide-gold">
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
          </tbody>
        </table>
      </Rankings>
    </div>

    <div class="md-col-start-7 md-col-end-11">
      <strong>Position and progress indicator</strong>
      <Rankings data-max="12" class="hide-podium hide-value hide-gold">
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
          </tbody>
        </table>
      </Rankings>
    </div>

    <div class="md-col-end-5 mb-5">
      <strong>Position only</strong>
      <Rankings data-max="12" class="hide-podium hide-value hide-progress hide-gold">
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
          </tbody>
        </table>
      </Rankings>
    </div>

    <h2>Ranking component</h2>

    <Rankings data-max="12" class="md-col-end-8 mb-5">
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Pinnacle Homes</th>
            <td>11</td>
          </tr>
          <tr>
            <th>Meadowbrook Estates</th>
            <td>9</td>
          </tr>
          <tr>
            <th>KeyHaven Residential</th>
            <td>8</td>
          </tr>
          <tr class="highlighted">
            <th>Deacon & partners</th>
            <td>11</td>
          </tr>
          <tr>
            <th>Pinnacle Homes</th>
            <td>11</td>
          </tr>
          <tr>
            <th>Pinnacle Homes</th>
            <td>11</td>
          </tr>
          <tr>
            <th>Pinnacle Homes</th>
            <td>11</td>
          </tr>
          <tr>
            <th>Pinnacle Homes</th>
            <td>11</td>
          </tr>
          <tr>
            <th>Pinnacle Homes</th>
            <td>11</td>
          </tr>
          <tr>
            <th>Pinnacle Homes</th>
            <td>11</td>
          </tr>
        </tbody>
      </table>
    </Rankings>

    <h3>Sizing</h3>

    <p>
      When in use the podium area should be shown at all times, while up to ten items can be shown in the ranking list.
      Each item in the ranking list should use a different colour from the wider colour palette.
    </p>
    <p>
      The podium area is fixed in height and width, while the ranking list can be of variable width with vertical
      scroll, depending on height. When a scroll is used the list should be feathered at the points it scrolls in and
      out of view.
    </p>

    <div class="admin-panel md-col-end-5">
      <h2 class="bg-light">Ranking component</h2>
      <Rankings data-max="12" class="leaderboard-scroll md-col-end-8 mb-5">
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Meadowbrook Estates</th>
              <td>9</td>
            </tr>
            <tr>
              <th>KeyHaven Residential</th>
              <td>8</td>
            </tr>
            <tr class="highlighted">
              <th>Deacon & partners</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
          </tbody>
        </table>
      </Rankings>
    </div>

    <div class="admin-panel md-col-start-2 md-col-end-8">
      <h2 class="bg-light">Ranking component</h2>
      <Rankings data-max="12" class="leaderboard-scroll md-col-end-8 mb-5">
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Meadowbrook Estates</th>
              <td>9</td>
            </tr>
            <tr>
              <th>KeyHaven Residential</th>
              <td>8</td>
            </tr>
            <tr class="highlighted">
              <th>Deacon & partners</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
          </tbody>
        </table>
      </Rankings>
    </div>

    <h3>Usage</h3>

    <p>
      The ranking component can be shown in full displaying both the podium and ranking list, or using either of the
      individual podium or ranking list parts.
    </p>

    <div class="admin-panel md-col-end-6">
      <h2 class="bg-light">Podium only</h2>
      <Rankings data-max="12" class="leaderboard-scroll md-col-end-8 mb-5 hide-leaderboard">
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Meadowbrook Estates</th>
              <td>9</td>
            </tr>
            <tr>
              <th>KeyHaven Residential</th>
              <td>8</td>
            </tr>
            <tr class="highlighted">
              <th>Deacon & partners</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
          </tbody>
        </table>
      </Rankings>
    </div>

    <div class="admin-panel md-col-start-7">
      <h2 class="bg-light">Ranking list only</h2>
      <Rankings data-max="12" class="leaderboard-scroll md-col-end-8 mb-5 hide-podium">
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Meadowbrook Estates</th>
              <td>9</td>
            </tr>
            <tr>
              <th>KeyHaven Residential</th>
              <td>8</td>
            </tr>
            <tr class="highlighted">
              <th>Deacon & partners</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
            <tr>
              <th>Pinnacle Homes</th>
              <td>11</td>
            </tr>
          </tbody>
        </table>
      </Rankings>
    </div>

    <Integration component="rank" componentName="rank">
      <template #web-component>
        <pre><code>{{`<iam-rank>1st</iam-rank>`}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import Rank from '@/components/Rank/Rank.vue</script>
        
<Rank>1st</Rank>

<script setup>import Rank from '@/components/Ranking/Ranking.vue</script>
        
<Rankings>

  <table>
    <thead>
      <tr>
        <th>Company</th>
        <th>Sales</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Pinnacle Homes</th>
        <td>11</td>
      </tr>
      <tr>
        <th>Meadowbrook Estates</th>
        <td>9</td>
      </tr>
      <tr>
        <th>KeyHaven Residential</th>
        <td>8</td>
      </tr>
      <tr class="current">
        <th>Deacon & partners</th>
        <td>11</td>
      </tr>
      <tr>
        <th>Pinnacle Homes</th>
        <td>11</td>
      </tr>
      <tr>
        <th>Pinnacle Homes</th>
        <td>11</td>
      </tr>
      <tr>
        <th>Pinnacle Homes</th>
        <td>11</td>
      </tr>
      <tr>
        <th>Pinnacle Homes</th>
        <td>11</td>
      </tr>
      <tr>
        <th>Pinnacle Homes</th>
        <td>11</td>
      </tr>
      <tr>
        <th>Pinnacle Homes</th>
        <td>11</td>
      </tr>
    </tbody>
    
  </table>

</Rankings>
`}}</code></pre>
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
              <th>data-title (On the iam-rank component)</th>
              <td></td>
              <td>String</td>
              <td>No</td>
              <td>Adds the title to the rank component in the correct place</td>
            </tr>
            <tr>
              <th>data-position (On the iam-rank component)</th>
              <td></td>
              <td>String</td>
              <td>No</td>
              <td>Can be added via the content on of the iam-rank component</td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #classes>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>.hide-podium</th>
              <td>Hides the podium</td>
            </tr>
            <tr>
              <th>.hide-leaderboard</th>
              <td>Hides the leaderboard</td>
            </tr>
            <tr>
              <th>.hide-gold</th>
              <td>Hides the gold medal in the leaderboard for first place</td>
            </tr>
            <tr>
              <th>.leaderboard-scroll</th>
              <td>Adds a scroll bar to the leaderboard</td>
            </tr>
            <tr>
              <th>.hide-progress</th>
              <td>Hides the progress bar of each item in the leaderboard</td>
            </tr>
            <tr>
              <th>.hide-value</th>
              <td>Hides the value of each item in the leaderboard</td>
            </tr>
            <tr>
              <th>.hide-value</th>
              <td>Hides the value of each item in the leaderboard</td>
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
              <th>--leaderboard-height</th>
              <td>
                Set the height of the div that contains the leaderboard table. If smaller than the size of the content a
                scroll bar is presented.
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
              <th>wrapper</th>
              <td>A container div</td>
            </tr>
            <tr>
              <th>rank</th>
              <td>Div containing the medal and trophy svg's</td>
            </tr>
            <tr>
              <th>base</th>
              <td>Div containing the base svg's</td>
            </tr>
            <tr>
              <th>leaderboard</th>
              <td>A wrapper around the leaderboard table</td>
            </tr>
          </tbody>
        </table>
      </template>
    </Integration>
    <Versions pdf="/pdfs/ranking-component.pdf">
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
            <td>V1 added</td>
            <td>29.05.2023</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>
    </Versions>
  </main>
</template>

<style lang="scss" scoped>
  .position-backgrounds iam-rank::part(wrapper) {
    display: none;
  }
</style>
