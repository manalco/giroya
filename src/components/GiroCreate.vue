<template>
  <div>
    <b-card align="center" style="display: inline-flex;" title="Nuevo Giro">
      <b-card-text>
        <v-form style="width: auto;" ref="form" v-model="valid" lazy-validation>
          <!--BEGIN EMISOR-->
          <label class="sr-only" for="ammount">Cantidad</label>
          <b-input-group prepend="$" class="mb-2 mr-sm-2 mb-sm-0">
            <b-input 
              id="ammount" 
              placeholder="0" 
              v-model="giroData.ammount"
            ></b-input>
          </b-input-group>
          <br><br>
          <b-card title="Emisor" style="display: inline-flex;">
            <b-card-text>
              <label class="sr-only" for="emisorId">Documento de Identidad</label>
              <b-input-group prepend="ID" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input 
                  id="emisorId" 
                  placeholder="Documento de Identidad" 
                  v-model="giroData.emisorId"
                ></b-input>
              </b-input-group>
              <br>
              <label class="sr-only" for="emisorFName">Nombres</label>
              <b-input-group prepend="Nombres" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input 
                  id="emisorFName" 
                  v-model="giroData.emisorFName"
                ></b-input>
              </b-input-group>
              <br>
              <label class="sr-only" for="emisorLName">Apellidos</label>
              <b-input-group prepend="Apellidos" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input 
                  id="emisorLName" 
                  v-model="giroData.emisorLName"
                ></b-input>
              </b-input-group>
              <br>
              <label class="sr-only" for="emisorBirthday">Fecha de Nacimiento</label>
              <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                <b-form-datepicker
                  id="emisorBirthday" 
                  v-model="giroData.emisorBirthday"
                  placeholder="Fecha de Nacimiento" 
                ></b-form-datepicker>
              </b-input-group>
              <br>
              <label class="sr-only" for="emisorScholarity">Último Grado de Escolaridad</label>
              <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                <b-form-select 
                  id="emisorScholarity"
                  v-model="emisorScholarity_selected" 
                  :options="emisorScholarity_options">
                </b-form-select>
              </b-input-group>
              <br>
              <label class="sr-only" for="emisorCity">Ciudad</label>
              <b-input-group prepend="Ciudad" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input 
                  id="emisorCity" 
                  v-model="giroData.emisorCity"
                ></b-input>
              </b-input-group>
              <br>
              <label class="sr-only" for="emisorAddress">Dirección</label>
              <b-input-group prepend="Dirección" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input 
                  id="emisorAddress" 
                  v-model="giroData.emisorAddress"
                ></b-input>
              </b-input-group>
              <br>
              <label class="sr-only" for="emisorEmail">Email</label>
              <b-input-group prepend="Email" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input 
                  id="emisorEmail" 
                  v-model="giroData.emisorEmail"
                  type="email"
                ></b-input>
              </b-input-group>
              <br>
              <label class="sr-only" for="emisorPhone">Teléfono</label>
              <b-input-group prepend="Teléfono" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input 
                  id="emisorPhone" 
                  v-model="giroData.emisorPhone"
                ></b-input>
              </b-input-group>
              <br>
              <label class="sr-only" for="emisorMobile">Celular</label>
              <b-input-group prepend="Celular" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input 
                  id="emisorMobile" 
                  v-model="giroData.emisorMobile"
                ></b-input>
              </b-input-group>
            </b-card-text>
          </b-card>
          <!--END EMISOR-->
          <!--BEGIN RECEPTOR-->
          <b-card title="Receptor" style="display: inline-flex;">
            <b-card-text>
              <label class="sr-only" for="receptorId">Documento de Identidad</label>
              <b-input-group prepend="ID" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input 
                  id="receptorId" 
                  placeholder="Documento de Identidad" 
                  v-model="giroData.receptorId"
                ></b-input>
              </b-input-group>
              <br>
              <label class="sr-only" for="receptorFName">Nombres</label>
              <b-input-group prepend="Nombres" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input 
                  id="receptorFName" 
                  v-model="giroData.receptorFName"
                ></b-input>
              </b-input-group>
              <br>
              <label class="sr-only" for="receptorLName">Apellidos</label>
              <b-input-group prepend="Apellidos" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input 
                  id="receptorLName" 
                  v-model="giroData.receptorLName"
                ></b-input>
              </b-input-group>
              <br>
              <label class="sr-only" for="receptorBirthday">Fecha de Nacimiento</label>
              <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                <b-form-datepicker
                  id="receptorBirthday" 
                  v-model="giroData.receptorBirthday"
                  placeholder="Fecha de Nacimiento" 
                ></b-form-datepicker>
              </b-input-group>
              <br>
              <label class="sr-only" for="receptorScholarity">Último Grado de Escolaridad</label>
              <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                <b-form-select 
                  v-model="emisorScholarity_selected" 
                  :options="emisorScholarity_options">
                </b-form-select>
              </b-input-group>
              <br>
              <label class="sr-only" for="receptorCity">Ciudad</label>
              <b-input-group prepend="Ciudad" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input 
                  id="receptorCity" 
                  v-model="giroData.receptorCity"
                ></b-input>
              </b-input-group>
              <br>
              <label class="sr-only" for="receptorAddress">Dirección</label>
              <b-input-group prepend="Dirección" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input 
                  id="receptorAddress" 
                  v-model="giroData.receptorAddress"
                ></b-input>
              </b-input-group>
              <br>
              <label class="sr-only" for="receptorEmail">Email</label>
              <b-input-group prepend="Email" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input 
                  id="receptorEmail" 
                  v-model="giroData.receptorEmail"
                  type="email"
                ></b-input>
              </b-input-group>
              <br>
              <label class="sr-only" for="receptorPhone">Teléfono</label>
              <b-input-group prepend="Teléfono" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input 
                  id="receptorPhone" 
                  v-model="giroData.receptorPhone"
                ></b-input>
              </b-input-group>
              <br>
              <label class="sr-only" for="receptorMobile">Celular</label>
              <b-input-group prepend="Celular" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input 
                  id="receptorMobile" 
                  v-model="giroData.receptorMobile"
                ></b-input>
              </b-input-group>
            </b-card-text>
          </b-card>
          <!--END RECEPTOR-->
          <br><br>
          <div style="display: block;">
            <b-button variant="primary" @click="crearGiro">Crear</b-button>
            <b-button type="reset" variant="danger">Limpiar</b-button>
          </div>
        </v-form>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
  import axios from 'axios';
  import router from "../router";

  export default {
      data: () => ({
          giroData: {},
          valid:true,
          loading:false,
          emisorScholarity_selected: null,
          emisorScholarity_options: [
            { value: null, text: '- Último Grado de Escolaridad -' },
            { value: 'primaria', text: 'Primaria' },
            { value: 'secundaria', text: 'Secundaria' },
            { value: 'bachillerato', text: 'Bachillerato' },
            { value: 'pregrado', text: 'Pregrado' },
            { value: 'maestria', text: 'Maestría' },
            { value: 'doctorado', text: 'Doctorado' }
          ]
      }),
      methods: {
        crearGiro() {
              if (this.validate()) {
                //this.giroData.push('emisorIP', this.getIp());
                //this.giroData.push('emisorLatitude', this.getLatitude());
                //this.giroData.push('emisorLongitude', this.getLongitude());
                this.loading = true;

                //BEGIN SIMULATE SAVING
                var giros = [];
                if(localStorage.giros){
                  var giros = localStorage.giros;
                }
                this.giroData.push('id', giros.length);
                this.giroData.push('token', Math.random().toString(36).slice(-5));
                this.giroData.push('timestamp', new Date().getTime());
                giros.push(this.giroData);
                localStorage.giros = giros;

                router.push('/giro/'+this.giroData.id);
                //END SIMULATE SAVING

                axios.post(process.env.BACKEND_URL+'/api/giro/create/', this.giroData).then(res => {
                  router.push('/giro/'+response.data.id);
                }).catch(e => {
                  this.loading = false;
                  alert('Ocurrió un error.');
                  console.log(e);
                })
              }
          },
          validate(){
            var error = "";
            if(this.giroData.ammount == undefined){
              error += "Cantidad es requerido.\n";
            }
            if(/[0-9]+$/.exec(this.giroData.ammount) != true){
              "Cantidad debe ser solo numérico.\n"
            }
            if(this.isValidAmmount(this.giroData.ammount)){
              error += "Sólo se permiten múltiplos de $5.000 COP con valores entre $5.000 y $5'000.000.\n";
            }
            if(this.giroData.emisorId == undefined){
              error += "El Documento de Identidad del Emisor es requerido.\n";
            }
            if(/[0-9]+$/.exec(this.giroData.emisorId) != true){
              "Documento de Identidad debe ser solo numérico.\n"
            }
            if(this.giroData.emisorEmail == undefined){
              error += "El Email del Emisor es requerido.\n";
            }
            if(this.giroData.emisorMobile == undefined){
              error += "El Celular del Emisor es requerido.\n";
            }
            if(/[0-9]+$/.exec(this.giroData.receptorId) != true){
              "Documento de Identidad debe ser solo numérico.\n"
            }
            if(this.giroData.receptorFName == undefined){
              error += "El Nombre del Receptor es requerido.\n";
            }
            if(this.giroData.receptorLName == undefined){
              error += "Los Apellidos del Receptor son requeridos.\n";
            }

            if(error){
              alert(error);
              return false;
            }

             return true;
          },
          checkLoggedIn() {
            this.$session.start();
            if (!this.$session.has("token")) {
              router.push("/login");
            }
          },
          isValidAmmount(ammount) {
            if (ammount % 5000 == 0 && ammount <= 5000000 && ammount >= 5000){
              return true;
            }
          }
      },
      mounted() {
        //this.checkLoggedIn();
      }
  }
</script>