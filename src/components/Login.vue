<template>
  <div id="login">
    <div>
      <h1 id="title">Rabbit Admin</h1>
    </div>
    <div>
      <div id="inputWrapper">
        <label for="account" class="font-l">Account</label>
        <input v-model="ac" class="font-l input-text" type="text" name="account" placeholder="account">
        <label for="password" class="font-l">Password</label>
        <input v-model="pw" class="font-l input-text" type="password" name="password" placeholder="password">
        <input @click="doLogin()" id="loginSubmit" type="submit" class="font-l" value="Submit">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  data(){
    return {
      ac: '',
      pw: '',
      baseUrl: 'http://localhost:8005/rabbit' 
    }
  },
  props: {
    
  },
  methods: {
    showResult(){
      console.log(`account = ${this.ac}`)
      console.log(`account = ${this.pw}`)
    },
    async doLogin(){
      console.log(`account = ${this.ac}`)
      console.log(`account = ${this.pw}`)

      if(this.ac === '' || this.pw === ''){
        return
      }

      const response = await fetch(`${this.baseUrl}/users/login`, {
        method: 'POST',
        body: JSON.stringify({ name: this.ac, password: this.pw }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      const a = await response.json()
      console.log(`code = ${a.code}, msg = ${a.msg}`)
    }
  }
}
</script>

<style scoped>
#login {
    display: flex;
    flex-direction: column;
}

#login>div:nth-child(1) {
    padding-top: 100px;
    padding-bottom: 25px;
    box-sizing: border-box;
}

#title {
    text-align: center;
    color: darkorange;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 0px;
    margin-bottom: 0px;
}

#login>div:nth-child(2) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    box-sizing: border-box;
}

#inputWrapper {
    display: flex;
    flex-flow: column nowrap;
    padding: 10px 20px 20px 20px;
    border-radius: 10px;
    background-color: lightgray;
    box-sizing: border-box;
    width: 500px;
}

.font-l {
    font-size: 20px;
}

.input-text {
    padding: 12px 20px;
    margin-top: 8px;
    margin-bottom: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

#loginSubmit {
    text-align: center;
    background-color: #4CAF50;
    color: white;
    margin-top: 10px;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>
