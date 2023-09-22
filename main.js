const dropDownItem = {
    template:'<div class="container-item" @click="itemView"> <img class="item-image" :src="thumbnail"/> <h3>{{ title }}</h3></div>',
    props: {
        title: String,
        thumbnail: String
    },
    methods: {
        itemView(){
            alert("вы выбрали элемент: "+ this.title);
        }
    }

};


const clearableFilterInput = {
    template:'<div class="filter-container"><input v-model="inputValue" type = "search" placeholder="Search..." class="Search-box"/><div class="drop-cont" v-if="checkInput" > <dropDownItem v-for="item in searchData" :key="item.id" :title="item.title" :thumbnail="item.thumbnail"/></div> <div class="empty" v-if="searchData.length === 0">Ничего не найдено</div></div>',
    data() {
        return {
            inputValue: '',
        }
    },
    props: {
        data: Array,
    },
    components:{
        dropDownItem      
    },
    computed: {
        searchData(){
            return this.data.filter((item)=> item.title.toLowerCase().includes(this.inputValue.toLowerCase()));
        },
        checkInput(){
            if(this.inputValue === '')
            {
                return false;
            } else {
                return true;
            }
        }
    }

};


Vue.createApp({
    template: '<div class="container"> <clearableFilterInput :data="dataArray"/> </div>',
    data(){
        return {
            dataArray: [{ id: 1, title: "iPhone 9", thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg}" },
                { id: 2, title: "iPhoneX", thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg" },
                { id: 3, title: "Samsung Universe 9", thumbnail: "https://dummyjson.com/image/i/products/3/thumbnail.jpg" },
                { id: 4, title: "OPPOF19", thumbnail: "https://dummyjson.com/image/i/products/4/thumbnail.jpg" },
                { id: 5, title: "Huawei P30", thumbnail: "https://dummyjson.com/image/i/products/5/thumbnail.jpg" },
                { id: 6, title: "Macbook Pro", thumbnail: "https://dummyjson.com/image/i/products/6/thumbnail.png" },
                { id: 7, title: "Samsung Galaxy Book", thumbnail: "https://dummyjson.com/image/i/products/6/thumbnail.png" },
                { id: 8, title: "Microsoft Surface Laptop 4", thumbnail: "https://dummyjson.com/image/i/products/8/thumbnail.jpg" },
                { id: 9, title: "Infinix INBOOK", thumbnail: "https://dummyjson.com/image/i/products/9/thumbnail.jpg" },
                { id: 10, title: "HP Pavillion 15-DK1056WM", thumbnail: "https://dummyjson.com/image/i/products/10/thumbnail.jpeg" }
            ]
        }
    },
    components:{
        clearableFilterInput,
    },
    
}).mount(app);




