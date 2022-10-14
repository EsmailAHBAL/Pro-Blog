<template>
  <div class="columns is-multiline">
    <div class="column is-8">
      <el-divider class="" ></el-divider>
      <POST :comment='comment'/>
    </div>
    <div class="column is-4">
      <el-divider class="" ><span class="tag is-dark">More NEWS</span></el-divider>
     <el-container class="">
      <aside>
        <el-card class="mt-2" v-for="a in DATAASIDE" :key="a.title" @click="TOPOST(a['title'])">
          <span class="block is-dark"> {{a.title}}</span>
          <div class="container">
              <div class="block" style="height: 100px;">
                <img :src="a['urlToImage']" style="display: block;object-fit: cover;" @click="TOPOST(a['title'])"/>
              </div>
            </div>
          <div class="block mt-2"  style="display: flex;justify-content: space-around;">   <span class="tag is-dark" >
              {{a['author']}}
            </span>
            <span class="tag is-danger" >
              {{a['publishedAt']}}
            </span>
          </div>

        </el-card>
      </aside>
     </el-container>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, reactive, onMounted, toRefs, useContext, useRoute, useStore } from '@nuxtjs/composition-api';
import POST from '~/components/POST.vue';
  export default {
    components: { POST }
    ,
    async asyncData(ctx:any){
     const  {$axios,params}= ctx
     params.id
    const  RES  = await ctx.$axios.$get(`https://newsapi.org/v2/everything?q=apple&from=2022-10-13&to=2022-10-13&sortBy=popularity&apiKey=5f8ce8e05e814e47822d05da4e46adf7`)
     const DATA = await RES.articles.filter((item:any)=>{
      if(item.title == params.id){
        return item
      }
     })
    ctx.store.commit('SET_C',DATA)

    },
      setup(){
    const route = useRoute()
    const store = useStore()
    const ctx = useContext()
    const data =reactive({
      id : computed(() => {
        return route.value.params.id
      }),
      comment:computed(() => {
         return ctx.store.state.GET_COMMENT
      }),
      DATAASIDE:computed(()=>ctx.store.state.ASIDEPOST),
      ALL:computed(() => {
        return ctx.store.state.ALL
      })
    })
    const TOPOST =async (title:any) => {
      const  RES  = await ctx.$axios.$get(`https://newsapi.org/v2/everything?q=apple&from=2022-10-13&to=2022-10-13&sortBy=popularity&apiKey=5f8ce8e05e814e47822d05da4e46adf7`)
     const DATA = await RES.articles.filter((item:any)=>{
      if(item.title == title){
        return item
      }
     })
    ctx.store.commit('SET_C',DATA)
    console.log(title);

    }
    //  useFetch(async () => {
    //   data.comment  = await cxt.$axios.$get(`https://jsonplaceholder.typicode.com/comments/${data.id}`)
     return {
      ...toRefs(data),TOPOST
     }}
}
</script>

<style lang="scss" scoped>

</style>
