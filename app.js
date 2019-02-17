
Array.prototype.shuffle = function(){
    
    const length = this.length
    
    const mix = []
    const correct = []

    while(mix.length < length)
        {
       const num = Math.floor(Math.random()*length) 
            if(!mix.includes(num)){
            mix.push(num)
            }
        }
    for(let i = 0; i < length ; i++)
        {
            correct[i]=this[mix[i]]
        }
        return correct
}


class Game {
    constructor(){
        this.password = ['a','a','b','b','c','c','d','d','e','e','f','f','g','g','h','h']
        this.mixedPassword = this.password.shuffle()
        this.firstShoot = null
        this.waiter = false
        this.score = 0
        this.shooted = ''
    }
    makeBoard(){

        this.mixedPassword.map((value,index) => {

            
            const div = document.createElement('div')
              
            div.classList.add('tile')
            
            div.addEventListener('click',()=>{
               
                this.waiter || this.shoot(value, index)
                
            })

            document.querySelector('.board').appendChild(div)
            
        })
    }
    shoot(value,index){
        
        document.querySelector('.board').childNodes[index].textContent = value

    if( this.firstShoot === null && !this.shooted.includes(value)){
        this.firstShoot = index
        
    }
    else if( this.firstShoot !== null && this.firstShoot !== index){
      
       
        if(this.mixedPassword[this.firstShoot] === this.mixedPassword[index]){
          this.firstShoot = null
          this.score++
          this.shooted += value
          this.areWeTheChampions()
          
        }
        else{
            
            this.waiter = true
            setTimeout(()=>{
            
                document.querySelector('.board').childNodes[this.firstShoot].textContent = ''
                document.querySelector('.board').childNodes[index].textContent = ''
                this.firstShoot = null
                this.waiter = false
            },2000)
        }

    }
    
    }

    areWeTheChampions(){
        
        this.score === this.mixedPassword.length / 2 && setTimeout(() => alert('Congratulations !!!  Victory!!!'),200 ) 
        
    }
}

const start = new Game()

start.makeBoard()