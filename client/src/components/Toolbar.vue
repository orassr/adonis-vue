<template>
       <v-toolbar color="black" dark fixed>
    <v-toolbar-title class="mr-4">Vue Todo</v-toolbar-title>
   <v-toolbar-items>
     <v-btn flat><v-icon class="mr-2">playlist_add_check</v-icon>Projects</v-btn>
   </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/register">
        <v-icon class="mr-2">account_box</v-icon>
        Register
        </v-btn>
      <v-btn flat>
        <v-icon class="mr-2">fingerprint</v-icon>
        Login
      </v-btn>
      <v-btn flat>
        <v-icon class="mr-2">exit_to_app</v-icon>
        Logout
      </v-btn>
      <v-btn flat>
      <v-icon class="mr-2">ondemand_video</v-icon>
        How this was made
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

export default {
    
};

</script>
