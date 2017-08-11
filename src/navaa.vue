<template>
	<div style="width: 100%;height: 40px;background-color:red;">
		<span class="fa fa-bell">2131</span>
		<span class="fa fa-bell">2131</span>
		<span class="fa fa-bell">2131</span>
		<span class="fa fa-bell">2131</span>
		<span class="fa fa-bell">2131</span>
		<div class="page-swipe">
		     <mt-swipe :auto="2000" :show-indicators="true">
		       <mt-swipe-item :class="{slide1:true}">1</mt-swipe-item>
		       <mt-swipe-item :class="{slide2:true}">2</mt-swipe-item>
		       <mt-swipe-item :class="{slide3:true}">3</mt-swipe-item>
		     </mt-swipe>
		   </div> 
	</div>
</template>
<script>
	 
    export default{
		name:'navas'
	}
	 
</script>
<style>
	
</style>