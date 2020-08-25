<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="subscription in Subscriptions" :key="subscription.key">
                        <td>{{ subscription.name }}</td>
                        <td>{{ subscription.description }}</td>
                        <td>{{ subscription.amount }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: subscription.key }}" class="btn btn-primary">Edit
                            </router-link>
                            <button @click.prevent="deleteSubscription(subscription.key)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { db } from '../firebaseDb'

export default {
  data () {
    return {
      Subscriptions: []
    }
  },
  created () {
    db.collection('subscriptions').onSnapshot((snapshotChange) => {
      this.Subscriptions = []
      snapshotChange.forEach((doc) => {
        this.Subscriptions.push({
          key: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          amount: doc.data().amount
        })
      })
    })
  },
  methods: {
    deleteSubscription (id) {
      if (window.confirm('Do you really want to delete?')) {
        db.collection('subscriptions').doc(id).delete().then(() => {
          console.log('Document deleted!')
        })
      }
    }
  }
}
</script>