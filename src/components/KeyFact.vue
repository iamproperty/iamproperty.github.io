<template functional>
    <div class="key-fact col-6 col-sm-4 col-lg-2">
        <ul>
            <li :class="{nil: props.keyfact.value == 0}" class="fact-value">{{ props.keyfact.value }}</li>
            <li class="fact-label">{{ props.keyfact.label }}</li>
        </ul>
    </div>
</template>

<script>
export default {
  props: {
    keyfact: {
      type: Object,
      required: true
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
