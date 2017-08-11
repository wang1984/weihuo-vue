<template>
	<div class="content" ref="content">
	    <div>
		  	  <div class="page-swipe"> 
	    	      <mt-swipe :auto="0">
	    	  	     <mt-swipe-item><img src="../assets/images/slide01.jpg"></mt-swipe-item>
	    	  	     <mt-swipe-item><img src="../assets/images/slide02.jpg"></mt-swipe-item>
	    	  	     <mt-swipe-item><img src="../assets/images/slide03.jpg"></mt-swipe-item>
	    		  </mt-swipe> 
	           </div>
	           <div class="task-type">
	           	<p><a href="#"><img src="../assets/images/type1.png" alt=""></a><span>{{scrollY}}</span></p>
	           	<p><a href="#"><img src="../assets/images/type2.png" alt=""></a><span>{{iffixBar}}</span></p>
	           	<p><a href="#"><img src="../assets/images/type3.png" alt=""></a><span>{{choiceBarTop}}</span></p>
	           	<p><a href="#"><img src="../assets/images/type4.png" alt=""></a><span>栏目名</span></p>
	           	<p><a href="#"><img src="../assets/images/type5.png" alt=""></a><span>栏目名</span></p>
	           	<p><a href="#"><img src="../assets/images/type6.png" alt=""></a><span>栏目名</span></p>
	           	<p><a href="#"><img src="../assets/images/type7.png" alt=""></a><span>栏目名</span></p>
	           	<p><a href="#"><img src="../assets/images/type8.png" alt=""></a><span>栏目名</span></p>
	           </div>
		       <div class="choice-bar" ref="choicebar" :class="{fixBar:iffixBar}"> <!--  -->
		       	    <div class="choice-tab" >
		       	    	<p>时间</p>
		       	    	<p>距离</p>
		       	    	<p>酬劳</p>
		       	    </div>
		       	    <div class="choice-content">
		    		 
		       	    </div>
		       </div>
				<div class="content-list">
				   	<div v-for="(item,index) in taskList">
			   	   	         <router-link :to="'/article/'+item.id">
			       	         	 <h2>{{index+1}} . {{item.title}}</h2>
			       	             <p>{{item.detail}}</p>
			       	         </router-link>
				   	</div>   
				</div>  
	    </div>
	</div>
</template>

<script>
    import BScroll from 'better-scroll'; 
	export default {
		data(){
			return {
			  taskList:[],
			  scrollY:'',
			  choiceBarTop:'',
			 
			}
		},
		methods:{
		   	 _initScroll(){                                    
		   	 	let content = new BScroll(this.$refs.content, {
		   	 		 probeType:3,
	   	 		     click:true     
		   	 	})    
		   	 	    content.on('scroll', (pos) => {
						  this.scrollY=pos.y;

						 /* this.iffixBar= this.scrollY+this.choiceBarTop >=0 ?'true':'false'
                          console.log(this.choiceBarTop)*/
						  //console.log(this.scrollY+this.choiceBarTop )
				    })
		   	 }
		},   	 
		created(){
		   this.$http.get('/src/data/index.data').then((res)=>{
		           this.taskList=res.data; 
		           this.$nextTick(()=>{  //vue的dom变化是在$nextTick方法后执行的 
		          	  this._initScroll(); 
		          })    
		    }) 
		},
		beforeUpdate(){
              this.choiceBarTop=this.$refs.choicebar.offsetTop
		},
		computed:{
			iffixBar:function(){
			    console.log( this.scrollY+this.choiceBarTop <=0 ?'true':'false')     
				return  this.scrollY+this.choiceBarTop <=0 ?'true':'false'


			}
		} 
	}

</script>
<style scoped>
.content{
	 
	position: absolute;
	top:40px;
	bottom:55px;
	overflow:hidden;
}
.page-swipe {
    height: 190px;
    width: 100%;
}

.page-swipe img{
	width: 100%;
	display: block;
} 
.task-type{
 width: 100%;
 display:flex;
 flex-wrap: wrap;
 padding:10px 0;
 font-size: 12PX;
}
.task-type p{
 flex-grow: 1;
 text-align: center; 
 width: 25%;
 justify-content: space-between;
}
.task-type p img{
	display:block;
	width: 60%;
	margin:10px auto ;
}
.choice-bar{
	width: 100%;
	height: 40px;
	line-height: 40px;
	border-top:1px solid #ccc;
	border-bottom:1px solid #ccc;
	background-color: #fff;
} 
.fixBar{
	position: fixed;
	top:0px;
} 
.choice-tab{
	display:flex;
}
.choice-tab p{
   flex-grow: 1;
   text-align: center; 
}
</style>