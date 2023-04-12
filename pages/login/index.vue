<template>
  <div>
    <v-app>
        <v-row class="justify-center mt-15">
            <v-col cols="4">
                <p v-if="error" style="color:red">You're not the Master!!!</p>
                <v-text-field
                    label="email"
                    required
                    v-model="email"
                ></v-text-field>
                <v-text-field
                    label="password"
                    required
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                ></v-text-field>
                <v-btn block @click="login">
                    Enter Master...
                </v-btn>

            </v-col>
        </v-row>
    </v-app>
    
  </div>
</template>

<script>
export default {
data(){
    return{
        email: '',
        password: '',
        show1: false,
        error: false
    }
},
methods:{   
   async login(){
    try{
        const result = await this.$axios.$post('/login', {
            email: this.email,
            password: this.password
        })
        if(result){
            console.log(result)
            this.$router.push('/admin')
        }
    } catch(error){
        this.error = true
        console.log(error)
    }
    }
}
}
</script>

<style>

</style>