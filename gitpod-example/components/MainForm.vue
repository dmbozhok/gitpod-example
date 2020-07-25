<template>
<div class="mainform-container">
    <div class="chat-container">
        <div class="chat-item" v-for="item in items"  :key="item.id">
            <span class="username">{{item.name}}:</span>
            <span class="text">{{item.text}}</span>
        </div>
    </div>
    <div class="form-container">
        <b-form @submit="sendMessage" class="messageForm">
            <b-input-group :prepend="name" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input v-model="message" id="messageInput" placeholder="Ваше сообщение"></b-input>
                <b-input-group-append><b-button type="submit" variant="primary">Отправить</b-button></b-input-group-append>
            </b-input-group>
        </b-form>
    </div>
</div>
</template>
<script>
const api_path = "http://localhost:3001/posts";
let interval;
export default {
    data(){
        return {
            items: [],
            message: ""
        }
    },
    computed: {
        name(){return this.$store.state.name}
    },
    created: function(){
        interval = setInterval(this.refresh,2000);
        //this.name = this.$store.state.name;
    },
    methods: {
        sendMessage(evt) {
            evt.preventDefault();
            const data = {
                "name": this.name,
                "text": this.message
            };
            this.$axios.$post(api_path,data).then(() => {this.message = "";this.refresh();}).catch(error => console.error(error));
        },
        refresh(){
            this.$axios.$get(api_path).then((data) => {
                this.items = data;
            }).catch(e=>console.error(e));
        }
    }
}
</script>
<style>
    .mainform-container {
        background: #eeeeee;
        border: 1px solid #CCC;
        border-radius: 0.5rem;
        padding:0 1rem;
    }
    .chat-item {
        background: #FFFFFF;
        border: none;
        padding: 0.5rem;
        border-radius: 0.5rem;
        margin:1rem 0;
        text-align: left;
    }
    .chat-item .username {
        font-weight: 700;
    }
    .messageForm {
        margin: 1rem 0; 
    }
</style>