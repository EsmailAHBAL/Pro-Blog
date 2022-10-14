<template>
  <div class="container">
     <div class="contaier mt-5">
      <input placeholder="SEARCH BY WORDS" v-model="search" type="text"  class="input is-primary"/>

     </div>
     <el-divider>ALL COMMENTS</el-divider>
     <div class="block">

        <div  class="columns is-multiline">
          <div class="column is-4" v-for="c in comment" :key="c['title']">
            <el-card>
              <div class="block">
                <img :src="c['urlToImage']"/>
              </div>
                <div class="block">
                   <el-row  :gutter="20">
                 <el-col :span="12"><span class="tag is-dark">{{c['author']}} </span></el-col>
                 <el-col :span="12"><span class="tag is-danger">{{c['source']['name']}} </span></el-col>
                 </el-row>
                </div>
                <div class="block  is-danger" >
                  {{c['content']}}
               </div>
                <nuxt-link :to="`/Post/${c['title']}`">
                  <el-button class="button is-dark">Read More</el-button>
                </nuxt-link>
            </el-card>
          </div>

        </div>

      </div>
  </div>
</template>

<script lang="ts">
import { Data, reactive, ref, Ref, toRefs, useContext, useFetch, useRouter, computed, watch } from '@nuxtjs/composition-api';
import { data } from 'browserslist';
interface Idata {
        comment:{};
      }

  export default {
    async asyncData(ctx:any){
     const  {$axios}= ctx
    const RES = await ctx.$axios.$get(`https://newsapi.org/v2/everything?q=apple&from=2022-10-13&to=2022-10-13&sortBy=popularity&apiKey=5f8ce8e05e814e47822d05da4e46adf7`)
     const ALL =await RES.articles
    ctx.store.commit('UPDATECOMMENT',ALL)

    },
    setup(){

      const {$axios,store} =  useContext()
      const rr = useRouter()
      const data =reactive({
        comment:computed(()=>store.state.FILTERDATA),

      } ) as Idata
    const search=ref('')

      watch([search],() =>
                {
                   store.commit('SEARCH',search.value)

                });


                  return {
        ...toRefs(data),search
    }
    }
  }
</script>
