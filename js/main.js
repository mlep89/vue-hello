var root = new Vue({
    el: '#root',
    data: {
      name: '',
      surname: '',
      colorClass: "red",
      offShow: "showed",
      myImage: "img"
    },
    methods: {
        colorChange(){
            if (this.colorClass == "red" || this.offShow == "none" || this.myImage == "none"){
                this.colorClass = "blue";
                this.offShow = "block";
                this.myImage = "block";
            }
            else {
                this.colorClass = "red";
                this.offShow = "none";
                this.myImage = "none";
            }
        }
    } 
})