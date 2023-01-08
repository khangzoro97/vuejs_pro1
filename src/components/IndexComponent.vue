<template>
  <h1>List Post</h1>
  <div class="row">
    <div class="col-md-10"></div>
    <div class="col-md-2">
      <router-link :to="{ name: 'create' }" class="btn btn-success">Create Post</router-link>
    </div>
  </div>
  <br>
  <table class="table table-hover">
    <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Description</th>
      <th>Action</th>
      <th></th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="(post, index) in posts" :key="post.id">
      <td>{{ index+1 }}</td>
      <td>{{ post.title }}</td>
      <td>{{ post.description }}</td>
      <td>
        <router-link :to="{ name: 'edit',params: { id: post.id }}" class="btn btn-primary">Edit</router-link>
      </td>
      <td><button class="btn btn-danger" @click.prevent.stop="deletePost(post.id,index)">Delete</button></td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";
import alert from 'vue3-simple-alert'

export default {
  setup() {
    const toast = useToast();
    return { toast }
  },
  data() {
    return {
      posts: []
    }
  },
  created() {
    let uri = 'http://localhost:8000/api/post';
    axios.get(uri).then(
        reponse => {
          this.posts = reponse.data.data
        }
    )
  },
  methods: {
    deletePost(id,index) {
      let uri = `http://localhost:8000/api/post/delete/${id}`;
      alert.confirm("Are you sure delete?").then(() => {
        axios.delete(uri)
            .then(res => {
              if (res.data.status === 'success') {
                this.posts.splice(index, 1)                   // splice xoá phần tử index khoi array
                this.toast.success(res.data.message)
                setTimeout(this.toast.clear, 2000)
              }
            })
            .catch(err => {
              console.log(err)
            })
      });
    },
  }
}
</script>