<template>
  <section class="container" :class="{'main-form':showMainForm}">
    <div>
      <h1 class="title">
        Чат на базе gitpod
      </h1>
      <h2 class="subtitle">
        Создан для общения
      </h2>
      <transition-group name="fade">
        <name-form v-show="showNameForm" key="NameFormElement"></name-form>
        <div v-show="!showNameForm" key="MainFormElement">main form</div>
      </transition-group>
    </div>
  </section>
</template>

<script>
import NameForm from '~/components/NameForm.vue'

export default {
  data () {
    return {
      name: this.$store.state.name
    }
  },
  computed: {
    showNameForm: function() {
      let name = this.$store.state.name;
      console.log(name);
      return name == '';
    },
    showMainForm: function() {
      return !this.showNameForm;
    }
  },
  components: {
    NameForm
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.main-form {
  flex-direction: column;
  justify-content: start;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

