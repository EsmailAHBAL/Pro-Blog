<template>
  <div class="content">
    <el-card class="">

      <div class="block mt-4">
        <div class="block">
          <span class="tag is-dark">{{comment['0'].author}}</span>
        </div>

      </div>
      <el-divider></el-divider>
      <div class="container pb-5">
        <div class="content">
          {{comment['0']['content']}}
          <br/>
          <div class="block">

            {{comment['0']['description']}}
          </div>
        </div>
      </div>
      <div class="container ">
        <el-row :gutter="20" class="pb-3">
        <el-col :span="12"><span class="tag is-dark">{{comment['0'].author}}</span></el-col>
        <el-col :span="12"><span class="tag is-danger">{{comment['0'].source.name}}</span></el-col>
        <el-col :span="12"><span class="tag is-dark mt-3">{{comment['0'].publishedAt}}</span></el-col>
        <el-col :span="12"><span class="tag is-danger mt-3">{{comment['0'].url}}</span></el-col>

      </el-row>
      <div class="block mt-3">
          <img :src="comment['0']['urlToImage']"/>
        </div>
      </div>

    </el-card>
  </div>
</template>

<script lang="ts">
  export default {
    props:['comment']
   }

</script>

<style lang="scss" scoped>

</style>
