const app = new Vue({
    el: '#app',
    data: {
        title: "Refugio de Gatos",
        tareas: [],
        newTarea: '',
        newAge: ''
    },

    methods: {
        agregarTarea: function() {
            this.tareas.push({
                name: this.newTarea,
                age: this.newAge,
                estado: false
            });
            console.log(this.tareas);//ver los objetos
            this.newTarea = '';
            //localStorage.setItem('refugio-vue', JSON.stringify(this.tareas));
        },
        editarTarea: function(index) { //confirma para el localStorage 
            this.tareas[index].estado = true
            localStorage.setItem('refugio-vue', JSON.stringify(this.tareas));
            console.log("hola!")
            // reload window for chartjs
            window.location.reload();

        },
        eliminarTarea: function(index) {
            this.tareas.splice(index, 1);
            localStorage.setItem('refugio-vue', JSON.stringify(this.tareas));
            // reload window for chartjs
            window.location.reload();
        },
     

    },
    created: function() {
        let datosDB = JSON.parse(localStorage.getItem('refugio-vue'));
        if (datosDB===null) {
            this.tareas = [];
        } else {
            this.tareas = datosDB;
        }
    },
    
});

// const reload = document.getElementById('reload');

// reload.addEventListener('click', ()=> { // el _ es para indicar la ausencia de parametros
// window.location.reload();
// });
