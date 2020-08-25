<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Add Subscription</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="subscription.name" required>
                </div>

                <div class="form-group">
                    <label>Description</label>
                    <input type="text" class="form-control" v-model="subscription.description" required>
                </div>

                <div class="form-group">
                    <label>Amount</label>
                    <input type="text" class="form-control" v-model="subscription.amount" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Add Subscription</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { db } from '../firebaseDb'

export default {
  data () {
    return {
      subscription: {
        name: '',
        description: '',
        amount: ''
      }
    }
  },
  methods: {
    onFormSubmit (event) {
      event.preventDefault()
      db.collection('subscriptions').add(this.subscription).then(() => {
        alert('Subscription successfully created!')
        this.subscription.name = ''
        this.subscription.description = ''
        this.subscription.amount = ''
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>