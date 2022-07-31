<template>
  <div id="searchWrapper"></div>
  <div id="tableWrapper"></div>
</template>

<script>
export default {
  name: "DemoOne",
  data() {
    return {};
  },
  props: {},
  methods: {},
  //   mounted:() => {
  //     const tableWrapper = document.getElementById('tableWrapper')
  //     const initHeight = tableWrapper.clientHeight
  //     console.log(`tableWrapper initHeight = ${initHeight}`)
  //     tableWrapper.style.height = initHeight - 20 + 'px';
  //   }
};
</script>

<style scoped>
#searchWrapper {
  display: flex;
  flex-flow: column nowrap;
  height: 150px;
  background-color: lightblue;
  box-sizing: border-box;
}
#searchWrapper > div:nth-child(1) {
  display: flex;
  flex-flow: row nowrap;
  height: 50px;
  padding: 5px;
  background-color: lightpink;
  box-sizing: border-box;
}

#tableWrapper {
  padding: 20px;
  height: 100%;
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
  background-color: #f2f672;
  color: #355029;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
}
.search-submit:hover {
  background-color: #adb053;
}
</style>
