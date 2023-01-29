"use strict";(self["webpackChunkproyecto_final_vue"]=self["webpackChunkproyecto_final_vue"]||[]).push([[350],{5350:function(t,e,a){a.r(e),a.d(e,{default:function(){return V}});var o=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"d-flex justify-content-between m-2"},[e("p",{staticClass:"bienvenida"},[e("em",[t._v(" Bienvenido/a: "+t._s(t.mostrarUsuActivo))])]),e("button",{staticClass:"btn btn-danger logout",attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-title":"Log-out"},on:{click:function(e){return t.desloguear()}}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-right-from-bracket"}})],1)]),e("div",{staticClass:"btn-group m-2"},[e("div",{staticClass:"offcanvas offcanvas-end",attrs:{tabindex:"-1",id:"offcanvasRight","aria-labelledby":"offcanvasRightLabel"}},[t._m(0),e("div",{staticClass:"offcanvas-body"},[e("form-new-prod",{on:{reloadNewItem:function(e){return t.cargarElementos()}}})],1)]),e("ul",{staticClass:"nav nav-pills",attrs:{id:"myTab",role:"tablist"}},[t._m(1),e("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[e("button",{staticClass:"btn btn-outline-success",attrs:{id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#home-tab-pane",type:"button",role:"tab","aria-controls":"home-tab-pane","aria-selected":"true"},on:{click:function(e){return t.cargarElementos()}}},[t._v(" Ver productos ")])]),e("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[e("button",{staticClass:"btn btn-outline-success",attrs:{id:"contact-tab","data-bs-toggle":"tab","data-bs-target":"#carrito-tab-pane",type:"button",role:"tab","aria-controls":"contact-tab-pane","aria-selected":"false"},on:{click:function(e){return t.verCarritos()}}},[t._v(" Ver carritos ")])])])]),e("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[e("div",{staticClass:"tab-pane fade show active",attrs:{id:"home-tab-pane",role:"tabpanel","aria-labelledby":"home-tab",tabindex:"0"}},[e("div",{staticClass:"d-flex justify-items-center"},[e("div",{staticClass:"col-12 m-2 d-flex row"},t._l(t.element,(function(a,o){return e("product-administrador",{key:o,attrs:{idHtml:a.nClave+o,id:a.id,nombre:a.name,nClave:a.nClave,img:a.img,description:a.descripcion,price:a.precio,quantity:a.cantidad},on:{reloadNewItem:function(e){return t.cargarElementos()}}})})),1)])]),e("div",{staticClass:"tab-pane fade",attrs:{id:"carrito-tab-pane",role:"tabpanel","aria-labelledby":"contact-tab",tabindex:"0"}},t._l(t.carritoE,(function(a,o){return e("carrito-admin",{key:o,attrs:{lista:a.list_productos,"email-carrito":a.emailCli,"id-carrito":a.id,date:a.createdAt,zona:a.barrio},on:{reloadCart:function(e){return t.verCarritos()}}})})),1)])])},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"offcanvas-header"},[e("h4",{staticClass:"offcanvas-title text-success",attrs:{id:"offcanvasRightLabel"}},[t._v("Agregar producto")]),e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"offcanvas","aria-label":"Close"}})])},function(){var t=this,e=t._self._c;return e("li",[e("button",{staticClass:"btn btn-outline-success",attrs:{type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight","aria-controls":"offcanvasRight"}},[t._v("Agregar producto")])])}],s=(a(7658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-sm-3 p-2"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h2",{staticClass:"card-title text-success"},[e("em",[t._v(t._s(t.nombre))])]),e("p",{staticClass:"card-text"},[t._v(" $"),e("em",[t._v(t._s(t.price))])]),e("p",{staticClass:"card-text"},[t._v(t._s(t.description))]),e("br"),e("div",{staticClass:"d-flex justify-content-center"},[e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.eliminarProducto(t.id)}}},[e("font-awesome-icon",{attrs:{icon:"fas-solid fa-trash"}})],1),e("button",{staticClass:"btn btn-dark",attrs:{"data-bs-target":"#"+t.idHtml,"data-bs-toggle":"modal"}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-pen-to-square"}})],1)]),e("div",{staticClass:"modal fade",attrs:{id:t.idHtml,tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[t._m(0),e("div",{staticClass:"modal-body"},[e("label",[t._v("Nombre:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newName,expression:"newName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newName},on:{input:function(e){e.target.composing||(t.newName=e.target.value)}}}),e("label",[t._v("Precio:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newPrecio,expression:"newPrecio"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.newPrecio},on:{input:function(e){e.target.composing||(t.newPrecio=e.target.value)}}}),e("label",{staticClass:"label"},[t._v("Descripcion:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newDescripcion,expression:"newDescripcion"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newDescripcion},on:{input:function(e){e.target.composing||(t.newDescripcion=e.target.value)}}})]),e("div",{staticClass:"modal-footer btn-group"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v("Close")]),e("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:function(e){return t.editarProducto(t.id,t.idHtml)}}},[t._v("Guardar cambios")])])])])])])])])])}),i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-header"},[e("h2",{staticClass:"modal-title fs-5",attrs:{id:"exampleModalLabel"}},[t._v("Editar producto")]),e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])}],n=a(19),l=a(541),c=a.n(l),d=(a(4894),{name:"ProductAdministrador",props:{idHtml:String,id:String,nClave:String,nombre:String,img:String,description:String,price:String,quantity:String},data(){return{newName:this.$props.nombre,newPrecio:this.$props.price,newDescripcion:this.$props.description}},methods:{editarProducto(t,e){const a={name:this.newName,precio:this.newPrecio,descripcion:this.newDescripcion},o=(0,n.Z)({method:"PUT",url:"https://639f79eb5eb8889197fd60c9.mockapi.io/productos/"+t,data:a});let r=this;o.then((function(t){console.log(t),c()("#"+e).modal("hide"),c()("body").removeClass("modal-open"),c()(".modal-backdrop").remove(),r.$emit("reloadNewItem")})),this.$toastr.s("El producto fue editado")},eliminarProducto(t){let e=confirm("Estas seguro que deseas eliminar este producto?");if(1==e){const e=(0,n.Z)({method:"DELETE",url:"https://639f79eb5eb8889197fd60c9.mockapi.io/productos/"+t});let a=this;e.then((function(t){console.log(t),a.$emit("reloadNewItem")}))}}}}),u=d,m=a(1001),p=(0,m.Z)(u,s,i,!1,null,"56474360",null),b=p.exports,f=function(){var t=this,e=t._self._c;return e("div",[e("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function({handleSubmit:a}){return[e("form",{staticClass:"form-control",attrs:{role:"form"},on:{click:function(e){return e.preventDefault(),a(t.agregarProducto)}}},[e("div",{staticClass:"mb-3"},[e("ValidationProvider",{attrs:{name:"nombre",rules:"alpha|required"},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("label",{staticClass:"form-label"},[t._v("Nombre:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newProdNombre,expression:"newProdNombre"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newProdNombre},on:{input:function(e){e.target.composing||(t.newProdNombre=e.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1),e("div",{staticClass:"mb-3"},[e("ValidationProvider",{attrs:{name:"precio",rules:"numeric|required"},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("label",{staticClass:"form-label"},[t._v("Precio:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newProdPrecio,expression:"newProdPrecio"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.newProdPrecio},on:{input:function(e){e.target.composing||(t.newProdPrecio=e.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1),e("div",{staticClass:"mb-3"},[e("ValidationProvider",{attrs:{name:"descripcion",rules:"required"},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}},[t._v("Descripcion:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newProdDescripcion,expression:"newProdDescripcion"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newProdDescripcion},on:{input:function(e){e.target.composing||(t.newProdDescripcion=e.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1),e("div",{staticClass:"mb-3"},[e("ValidationProvider",{attrs:{name:"link",rules:"required"},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}},[t._v("Link de la imagen:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newProdImg,expression:"newProdImg"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newProdImg},on:{input:function(e){e.target.composing||(t.newProdImg=e.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1),e("div",{staticClass:"mb-3"},[e("ValidationProvider",{attrs:{name:"cantidad",rules:"numeric|required|between:1,1"},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}},[t._v("Cantidad inicial:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newProdCantidad,expression:"newProdCantidad"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Ingresar 1"},domProps:{value:t.newProdCantidad},on:{input:function(e){e.target.composing||(t.newProdCantidad=e.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1),e("button",{staticClass:"btn btn-outline-dark",attrs:{type:"submit"}},[t._v("Agregar")])])]}}])})],1)},v=[],g=a(8673),C=a(4960);(0,g.l7)("required",{...C.C1,message:"Este campo es obligatorio."}),(0,g.l7)("alpha",{...C.Fq,message:"El campo {_field_} solo puede contener letras."}),(0,g.l7)("numeric",{...C.uR,message:"El campo {_field_} solo puede contener numeros."}),(0,g.l7)("between",{...C.vX,message:"El campo {_field_} solo puede contener el numero 1."});var h={name:"FormNewProd",components:{ValidationProvider:g.d_,ValidationObserver:g._j},data(){return{newProdNombre:"",newProdPrecio:"",newProdDescripcion:"",newProdImg:"",newProdCantidad:""}},methods:{agregarProducto(){const t={name:this.newProdNombre,precio:this.newProdPrecio,description:this.newProdDescripcion,img:this.newProdImg,cantidad:this.newProdCantidad},e="https://639f79eb5eb8889197fd60c9.mockapi.io/productos",a=(0,n.Z)({method:"POST",url:e,data:t});let o=this;a.then((function(t){console.log(t),Object.assign(o.$data,o.$options.data()),c()("#offcanvasRight").offcanvas("hide"),o.$emit("reloadNewItem")})),this.$toastr.s("Nuevo producto agregado correctamente")}}},_=h,w=(0,m.Z)(_,f,v,!1,null,"40e103d0",null),P=w.exports,y=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"d-flex justify-content-center"},[e("h5",[e("strong",[t._v("Carrito:")]),t._v(t._s(t.emailCarrito))]),e("h5",[e("strong",[t._v("Fecha de creacion:")]),t._v(t._s(t.dateFormat))])]),e("table",{staticClass:"table table-responsive table-bordered border-dark"},[e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Producto")]),e("th",{attrs:{scope:"col"}},[t._v("Cantidad")]),e("th",{attrs:{scope:"col"}},[t._v("Precio")]),e("th",[e("button",{staticClass:"btn btn-dark",attrs:{type:"button"},on:{click:function(e){return t.borrarCarrito(t.idCarrito)}}},[e("font-awesome-icon",{attrs:{icon:"fas-solid fa-trash"}})],1)])])]),e("tbody",{staticClass:"table-group-divider"},t._l(t.lista,(function(a,o){return e("tr",{key:o},[e("td",[t._v(t._s(a.name))]),e("td",[t._v(t._s(a.cantidad))]),e("td",[t._v("$"+t._s(a.precio))]),e("td")])})),0),e("tfoot",[e("tr",[e("th",{staticClass:"text-primary",attrs:{colspan:"4"}},[t._v("Barrio: "+t._s(t.$props.zona))])])])])])},k=[],x=a(4984),N={name:"CarritoAdmin",component:{FontAwesomeIcon:x["default"]},props:{lista:Array,emailCarrito:String,idCarrito:String,date:Number,zona:String},data(){return{id:this.$props.idCarrito}},computed:{dateFormat(){let t=new Date(this.$props.date);return t.toDateString()}},methods:{borrarCarrito(t){let e=confirm("Estas seguro que deseas eliminar este producto?");if(1==e){const e=(0,n.Z)({method:"DELETE",url:"https://639f79eb5eb8889197fd60c9.mockapi.io/carrito/"+t});let a=this;e.then((function(t){console.log(t),a.$emit("reloadCart")}))}}}},E=N,A=(0,m.Z)(E,y,k,!1,null,"09fbe131",null),S=A.exports,D=a(408),$={name:"AdministradorView",components:{ProductAdministrador:b,FormNewProd:P,CarritoAdmin:S},data(){return{element:[],carritoE:[]}},created(){this.obtenerAdminApi()},computed:{...(0,D.Se)("moduloClientes",["getUsuActivo","getListaAdmin"]),mostrarUsuActivo(){let t=this.getListaAdmin;return t.forEach((t=>{if(t==this.getUsuActivo)return this.getUsuActivo})),this.getUsuActivo}},methods:{...(0,D.nv)("moduloClientes",["obtenerAdminApi"]),...(0,D.OI)("moduloClientes",["desloguearUsuario"]),cargarElementos(){const t=(0,n.Z)({method:"GET",url:"https://639f79eb5eb8889197fd60c9.mockapi.io/productos"});let e=this;t.then((function(t){e.element=t.data}))},verCarritos(){const t="https://639f79eb5eb8889197fd60c9.mockapi.io/carrito",e=(0,n.Z)({method:"GET",url:t});let a=this;e.then((function(t){console.log(t.data),a.carritoE=t.data}))},desloguear(){this.desloguearUsuario(),this.$router.push("/")}}},I=$,q=(0,m.Z)(I,o,r,!1,null,"291876b8",null),V=q.exports}}]);
//# sourceMappingURL=350.4823aaea.js.map