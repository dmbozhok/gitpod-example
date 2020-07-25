<template>
    <div>
        <b-form @submit="onSubmit">
            <b-form-group
                id="name-input-group"
                label="Ваше имя:"
                label-for="name-input"
            >
                <b-form-input
                id="name-input"
                v-model="name"
                type="text"
                required
                placeholder="Введите ваше имя"
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </div>
</template>
<script>
export default {
    data () {
        return {
            name: ""
        }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        this.$store.dispatch('setName',this.name);
      }
    }
}
</script>

<style>

</style>