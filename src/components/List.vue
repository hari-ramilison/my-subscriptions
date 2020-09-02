<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <tr class="d-none d-sm-table-row">
                        <th>Name</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="d-block d-sm-table-row" v-for="subscription in Subscriptions" :key="subscription.key">
                        <td class="d-block d-sm-table-cell" data-title="Name">{{ subscription.name }}</td>
                        <td class="d-block d-sm-table-cell" data-title="Description">{{ subscription.description }}</td>
                        <td class="d-block d-sm-table-cell" data-title="Amount">{{ subscription.amount }}</td>
                        <td class="d-block d-sm-table-cell">
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

<style scoped>
 @media(max-width: 580px){
    [data-title]::before {
      content: attr(data-title) ": ";
      font-weight: bold;
    }
 }
</style>