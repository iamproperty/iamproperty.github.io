<template>
    <div>
        <div class="row mb-2" v-for="(value, name) in items">
            <div class="col-md-3 font-weight-bold">
                {{ name }}:
            </div>
            <div class="col-md-9">
                <span v-html="value"></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "KeyInformation",
    props: {
        items: {
            type: Object,
            required: true,
        },
    },
}
</script>
