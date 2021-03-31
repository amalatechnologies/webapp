<template>
  <div>
    <v-card class="mx-auto" max-width="344">
      <v-card-text>
        <div class="text--primary">Users</div>
        <div>Username: {{searcheditem[0].username}}</div>
        <div>Email: {{searcheditem[0].email}}</div>
        <div>Role: {{searcheditem[0].role}}</div>
        <div>Lender: {{searcheditem[0].is_lender}}</div>
        <div>Borrower: {{searcheditem[0].is_borrower}}</div>
        <div>is_active: {{searcheditem[0].is_active}}</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["searcheditem"],
};
</script>

<style>
</style>