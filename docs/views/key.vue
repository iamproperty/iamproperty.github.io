<script setup lang="ts">
  import {getStatusColour,getStatusTitle,getStatusDesc} from '../utils/status.ts';
</script>
<template>

  <table>
    <tbody>
    <tr>
      <th>Status</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><span :class="`badge ${getStatusColour('alpha')}`">{{getStatusTitle('alpha')}}</span></td>
      <td>{{getStatusDesc('alpha')}}</td>
    </tr>
    <tr>
      <td><span :class="`badge ${getStatusColour('beta')}`">{{getStatusTitle('beta')}}</span></td>
      <td>{{getStatusDesc('beta')}}</td>
    </tr>
    <tr>
      <td><span :class="`badge ${getStatusColour('qa')}`">{{getStatusTitle('qa')}}</span></td>
      <td>{{getStatusDesc('qa')}}</td>
    </tr>
    <tr>
      <td><span :class="`badge ${getStatusColour('stable')}`">{{getStatusTitle('stable')}}</span><span class="badge">vX.X.X</span></td>
      <td>{{getStatusDesc('stable')}}</td>
    </tr>
    <tr>
      <td><span :class="`badge ${getStatusColour('deprecated')}`">{{getStatusTitle('deprecated')}}</span></td>
      <td>{{getStatusDesc('deprecated')}}</td>
    </tr>
    <tr>
      <td><span :class="`badge ${getStatusColour('dev')}`">{{getStatusTitle('dev')}}</span></td>
      <td>{{getStatusDesc('dev')}}</td>
    </tr>
    </tbody>
  </table>

</template>
