<template>
<div>
    <h1>testsetsnfjsndjsmsmsmsm    {{title}}{{title2}}</h1>
    <input type="text" v-model="input1" />
    <button type="button" @click="getData">testetset</button>
    <button type="button" @click="setData">2222</button>

    <select class="form-control" v-model="reg" @change="cReg">
        <option :key="i" :value="d.v" v-for="(d,i) in options">{{d.t}}</option>
    </select>

    <table class="table table-bordered" v-if="tableShow" >
    <!-- <table class="table table-bordered" v-show="tableShow"> -->
        <tr :key="i" v-for="(d,i) in options">
            <td>{{d.v}}</td>
            <td>{{d.t}}</td> 
        </tr>
    </table>


</div>
</template>

<script>
export default{
    data(){
        return{
            title : "도롱도롱도롱",
            title2 : "도롱도롱도롱312311312",
            input1: "123123",
            options: [
                {v:"S",t:"ser"},
                {v:"1",t:"111"},
                {v:"2",t:"222"},
                {v:"3",t:"333"}
            ],
            reg: "2",
            tableShow: true,
        };
    },
    watch:{
        input1(){
            console.log(this.input1)
        }
    },
    methods: {
        getData(){
            alert(this.input1);
        },
        setData(){
            this.input1 = "";
        },
        cReg(){
            alert(this.reg);
        }
    },
    beforeCreate(){
        console.log("beforeCreate")
    },
    created(){
        console.log("created")
    },
    beforeMount(){
        console.log("beforeMount")
    },
    mounted(){
        console.log("mounted")
    },
    beforeUpdate(){
        console.log("beforeUpdate")
    },
    updated(){
        console.log("updated")
    },
    // beforeDestroy() {
    //     console.log("beforeDestroy")
    // },
    // destroyed() {
    //     console.log("destroyed")
    // }
    
    
    
};
</script>