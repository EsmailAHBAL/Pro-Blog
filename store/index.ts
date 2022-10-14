interface ISTATE{
  GET_COMMENT :{}
  ALL:[] ,
  FILTERDATA:{},
  ASIDEPOST:[]
   }
export const state =() => ({
  GET_COMMENT:[],
  ALL:{},
  FILTERDATA:[],
  ASIDEPOST:[]
})
export const getters ={

}
export  const mutations ={
  SET_C:(STATE:ISTATE,DATA:any) => {
     STATE.GET_COMMENT = DATA

  },
  UPDATECOMMENT:(STATE:ISTATE,DATA:any) => {
    STATE.ALL=DATA
    STATE.FILTERDATA=DATA
    STATE.ASIDEPOST = DATA.slice(0,Math.random() * 20)

      },
  SEARCH:(STATE:ISTATE,DATA:string) => {

          STATE.FILTERDATA = STATE.ALL.filter((item:any)=>{
            if(item.content.includes(DATA)){
              return item
            }
          })


  }
}
