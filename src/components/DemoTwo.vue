<template>
    <div id="searchWrapper">

    </div>
    <div id="tableWrapper">

    </div>
</template>

<script>
export default {
  name: 'DemoTwo',
  data(){
    return {

    }
  },
  props: {
    
  },
  methods: {

  },
  mounted:() => {
    const tableWrapper = document.getElementById('tableWrapper')
    const initHeight = tableWrapper.clientHeight
    tableWrapper.style.height = initHeight - 20 + 'px';
  }
}
</script>

<style scoped>
#searchWrapper>div:nth-child(1) {
    display: flex;
    flex-flow: row nowrap;
    height: 50px;
    padding: 5px;
    background-color: lightsalmon;
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
