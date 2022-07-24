<template>
  <div class="root-container">
    <div class="nav-container">
      <div>
        <div id="navLeft" class="nav-item" @click="aaa()">Title</div>
      </div>
      <div>
        <div class="nav-item">Center</div>
      </div>
      <div>
        <div id="loginUser" class="nav-item">Right</div>
      </div>
    </div>
    <div id="body-container">
      <div class="side-bar">
        <ul id="menu">
          <li :key="item.id" v-for="item in fullMenu">
            <div class="side-bar-category">{{item.name}}</div>
            <div class="sub-menu-wrapper">
              <div :key="subMenu.id" v-for="subMenu in item.children" class="side-bar-item">{{subMenu.name}}</div>
            </div>
          </li>  
        </ul>
      </div>
      <div class="main-wrapper">
        <div id="searchWrapper"></div>
        <div id="tableWrapper"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  data(){
    return {
      fullMenu: this.$store.state.menu
    }
  },
  props: {
    
  },
  methods: {
    aaa(){
      console.log(`show user: id = ${this.$store.state.currentUser.id}, name = ${this.$store.state.currentUser.name}`)
    }
  },
  mounted:() => {
    console.log('do initSubMenu')
    let subMenuWrapperAry = document.querySelectorAll('.sub-menu-wrapper');

    subMenuWrapperAry.forEach(item => {
        const initHeight = item.clientHeight;
        item.style.height = 0;
        item.parentElement.querySelector('.side-bar-category').addEventListener('click', () => {
            const currentHeight = item.clientHeight;
            item.style.height = currentHeight > 0 ? '0px' : initHeight + 'px';
        })
    })

    const tableWrapper = document.getElementById('tableWrapper')
    const initHeight = tableWrapper.clientHeight
    tableWrapper.style.height = initHeight - 20 + 'px';
  }
}
</script>

<style scoped>
.root-container {
    display: flex;
    flex-flow: column nowrap;
    height: 100%;
}

.nav-container {
    display: flex;
    flex-flow: row nowrap;
    background-color: darkslategrey;
}

.nav-container>div {
    display: flex;
    flex-flow: row nowrap;
    flex-grow: 1;
    flex-shrink: 1;
}

.nav-container>div:nth-child(1) {
    justify-content: flex-start;
}

.nav-container>div:nth-child(2) {
    justify-content: center;
}

.nav-container>div:nth-child(3) {
    justify-content: flex-end;
}

.nav-item {
    margin: 0px;
    width: 100px;
    color: beige;
    font-weight: bold;
    text-align: center;
    font-size: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    box-sizing: border-box;
}

.nav-item:hover {
    background-color: #4CAF50;
}

#body-container {
    display: flex;
    flex-flow: row nowrap;
    flex-grow: 1;
    flex-shrink: 1;
}

.side-bar {
    width: 250px;
    background-color: burlywood;
}

.side-bar>ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.side-bar-category {
    padding: 15px;
    background-color: burlywood;
}

.side-bar-item {
    padding: 15px 15px 15px 30px;
    background-color: rgb(240, 216, 185);
}

.side-bar-category:hover {
    background-color: rgb(211, 156, 85);
}

.side-bar-item:hover {
    background-color: rgb(211, 156, 85);
}

.sub-menu-wrapper {
    transition: 0.3s;
    overflow: hidden;
}

.main-wrapper {
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
    background-color: rgb(242, 246, 224);
}

.main-wrapper>div:nth-child(1) {
    display: flex;
    flex-flow: column nowrap;
    height: 150px;
    background-color: lightblue;
    box-sizing: border-box;
}

#searchWrapper>div:nth-child(1) {
    display: flex;
    flex-flow: row nowrap;
    height: 50px;
    padding: 5px;
    background-color: lightpink;
    box-sizing: border-box;
}

#tableWrapper{
    padding: 20px;
    box-sizing: border-box;
}
.search-label {
    margin-left: 10px;
    margin-right: 10px;
    line-height: 40px;
}

table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td,
th {
    border: 1px solid darkblue;
    text-align: center;
    padding: 10px;
    height: 30px;
    line-height: 30px;
}
tr {
    text-align: center;
    padding: 10px;
    height: 30px;
    line-height: 30px;
}

tr:nth-child(even) {
    background-color: lightgray;
}

.search-submit {
    width: 80px;
    text-align: center;
    line-height: 40px;
    background-color: #F2F672;
    color: #355029;
    margin-left: 10px;
    border-radius: 5px;
    cursor: pointer;
}
.search-submit:hover{
    background-color: #adb053;
}
</style>
