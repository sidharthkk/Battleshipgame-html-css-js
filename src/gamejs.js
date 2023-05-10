
const shipImg="https://w0.peakpx.com/wallpaper/221/241/HD-wallpaper-sailing-ship-boat-nature-ocean-pirate-ship-yacht.jpg";
const waveImg="https://img.freepik.com/premium-vector/big-ocean-wave-with-tropical-island-flat-illustration_1284-53989.jpg?w=360";

const cells=document.querySelectorAll('.content');
const cells2=document.querySelectorAll('.ship');

let n=0;
let shipcount=5;

cells.forEach(cell =>{
    cell.addEventListener('click',() =>{
        cell.style.backgroundImage=`url(${waveImg})`;
         n++;
         console.log(n);
      if(shipcount===0 && n<=8)
       {
         alert('Congratulations! You won.');
      }
      if(n>8)
      {
        alert('you lose ! better luck next time :(');
       }
             
    })

 
})

cells2.forEach(cell =>{
    cell.addEventListener('click',() =>{
        cell.style.backgroundImage=`url(${shipImg})`;
        n++;
        shipcount--;
        console.log(shipcount);
             
 if(shipcount===0 && n<=8)
{
 alert('Congratulations! You won.');
      }
      if(n>8)
      {
       alert('you lose! better luck next time :(');
       }
    })

})


   if(n===8 && shipcount>0)   
   {
       alert('you lose!');
   }



const resetButton = document.querySelector('button');
      resetButton.addEventListener('click', () => {
        cells.forEach(cell => {
          cell.style.backgroundImage = '';
            
        });
        cells2.forEach(cell => {
          cell.style.backgroundImage = '';
        });

             n=0;
            shipcount=5;

      });
