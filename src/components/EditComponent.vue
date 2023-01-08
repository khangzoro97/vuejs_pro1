<template>
  <div>
    <h1>Edit Post</h1>
    <form @submit.prevent="updatePost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Post Title:</label>
            <input type="text" class="form-control" v-model="post.title">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Post Body:</label>
            <textarea class="form-control" v-model="post.description" rows="5"></textarea>
          </div>
        </div>
      </div>
      <br/>
      <div class="form-group">
        <button class="btn btn-primary">Update</button>
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
  created() {
    let uri = `http://localhost:8000/api/post/edit/${this.$route.params.id}`
    axios.get(uri).then( response => {
      this.post = response.data.data
    })
  },
  methods: {
    updatePost() {
      let uri = `http://localhost:8000/api/post/update/${this.$route.params.id}`
      axios.put(uri,this.post).then(
          response => {
            if(response.data.status === 'success'){
              this.toast.success(response.data.message)
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