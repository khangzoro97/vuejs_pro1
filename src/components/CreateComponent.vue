<template>
  <div>
    <h1>Creat A Post</h1>
    <form @submit.prevent="addPost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Post Title: </label>
            <input type="text" class="form-control" v-model="post.title">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Post description: </label>
            <textarea class="form-control" v-model="post.description"></textarea>
          </div>
        </div>
      </div>
      <br>
      <div class="form-group">
        <button class="btn btn-primary">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();
    return { toast }
  },
  data() {
    return {
      post: {}
    }
  },
  methods: {
    addPost() {
      let uri = 'http://localhost:8000/api/post/add'
      axios.post(uri,this.post)
          .then(res => {
            if (res.data.status === 'success') {
              this.toast.success(res.data.message)
              setTimeout(this.toast.clear, 2000)
            }
          })
          .catch(err => {
            console.log(err)
          })
    }
  }
}
</script>