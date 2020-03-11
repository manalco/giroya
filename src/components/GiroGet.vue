<template lang="html">
	<div class="container">
		<div class="row">
			<div class="col text-left">
				<h2>View Giro</h2>

				<div class="row">
					<div class="col">
						<div class="card">
							<div class="card-body">
								<h5 class="card-title">[Token: {{ giro.token }} Timestamp: {{ giro.timestamp }}</b></h5>
								<b-button type="submit" variant="primary" class="btn-large" :to="{ timestamp:'GiroGet' }">Back to List</b-button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'

	export default{
		data(){
			return{
				giroId: this.$route.params.giroId,
				giro: {
					token: '',
					timestamp: ''
				} 
			}
		},
		methods: {
			getGiro(){

				//BEGIN SIMULATE GIRO
				var giros = [];
				var giro = [];
				if(localStorage.giros){
                  var giros = localStorage.giros;
                }

                if(giros.length == 0 || giros[this.giroId] === 'undefined' || giros[this.giroId] === undefined){
                	alert("El giro no se encontró");
                }else{
                	giro = giros[this.giroId];

                	this.responseData.id = giro.id;
                	this.responseData.token = giro.token;
                	this.responseData.timestamp = giro.timestamp;
                	this.responseData.emisorId = giro.emisorId;
                	this.responseData.receptorId = giro.receptorId;
                	this.responseData.emisorFName = giro.emisorFName;
                	this.responseData.receptorFName = giro.receptorFName;
                	this.responseData.emisorLName = giro.emisorLName;
                	this.responseData.receptorLName = giro.receptorLName;
                	console.log(giro);
                	console.log(this.responseData);
                	//...
                }
				//END SIMULATE GIRO

				const path = process.env.BACKEND_URL+`api/v1/giros/${this.giroId}/`

				axios.get(path).then((response) => {
					this.responseData.id = response.data.id;
					this.responseData.token = response.data.token;
					this.responseData.timestamp = response.data.timestamp;
					this.responseData.emisorId = response.data.emisorId;
					this.responseData.receptorId = response.data.receptorId;
					this.responseData.emisorFName = response.data.emisorFName;
					this.responseData.receptorFName = response.data.receptorFName;
					this.responseData.emisorLName = response.data.emisorLName;
					this.responseData.receptorLName = response.data.receptorLName;
					//...
				})
				.catch((error) => {
					console.log(error)
				})
			},
          checkLoggedIn() {
            this.$session.start();
            if (!this.$session.has("token")) {
              router.push("/login");
            }
          }
		},
		created(){
			this.getGiro()
		},
		mounted() {
	        //this.checkLoggedIn();
	      }	
	}
</script>

<style lang="css" scoped>
</style>