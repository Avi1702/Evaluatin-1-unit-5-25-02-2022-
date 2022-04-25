let url="https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20"
let arr
let get=JSON.parse(localStorage.getItem("pokemon"))
if(get===null){
    arr=[]
}
else{
    arr=get
}
fetch(url)
.then((resolve)=>{
return resolve.json()})
.then((resolve)=>{


//    let url2=resolve.results[0].url
//     fetch(url2)
//     .then((resolve)=>{
//         return resolve.json()
//     }).then((resolve)=>{
//         console.log(resolve)
//     })
//     .catch((reject)=>
//     console.log("opsssss"))

    for(i=1;i<=resolve.results.length;i++){

     
      
//    console.log(resolve.results[i].url)
        let row=document.createElement("tr")
        let data=document.createElement("td")
        data.innerText=i+" "+resolve.results[i].name
     
        row.append(data)
        document.getElementById("tbody").append(row)
    // console.log(resolve.results[i].name)
    }

    for(j=1;j<=resolve.results.length;j++){
        arr.push()
    }
    localStorage.setItem("pokemon",JSON.stringify(arr))
})
.catch((reject)=>{

    console.log("oops")
})


document.querySelector("button").addEventListener("click",function(){
    
    let input=document.getElementById("search").value
    fetch(url)
    .then((resolve)=>{
    return resolve.json()})
    .then((resolve)=>{

let arr=[]
        for(i=0;i<resolve.results.length;i++){
        //  document.getElementById("right")=""
            if(resolve.results[i].name.includes(input)){

                arr.push(resolve.results[i].name)
          
            }
        }
        for(j=0;j<arr.length;j++){
        let box=document.createElement("p")
        box.innerText=arr[j]
            document.getElementById("right").append(box)
            console.log(arr)
        }
    })
    
})

