<template>
    <div class="key-fact">
        <ul>
            <li :class="{nil: isZero}" class="fact-value">{{statValue}}</li>
            <li class="fact-label">{{statLabel}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  props: {
    statValue: {
      required: false,
      type: Number
    },
    statLabel: {
      required: false,
      type: String
    }
  },
  data () {
    return {
      zero: true
    }
  },
  computed: {
    isZero () {
      if (this.statValue === 0) {
        return this.zero === true
      } else {
        return this.zero === false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .key-fact {
        text-align: center;
        padding: 10px;
        width:100%;

        ul {
            padding: 0;
            margin: 0;;
        }

        li {
            list-style: none;
        }

        .fact-value {
            font-size:2.4rem;
            padding-bottom: 5px;
        }
    }
    .nil {
        color: red;
    }
</style>
