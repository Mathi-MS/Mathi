var worklist = [
    {
        id:1,
        technology:"HTML,CSS,Bootstrap,Javascript,Jquery",
        demo:"https://mathi-ms.github.io/Nostra/",
        image:"Assests/Images-M/work-3.png",
        torf:"true"
    },
    {
        id:2,
        technology:"HTML,CSS,Bootstrap,Javascript,Jquery",
        demo:"https://mathi-ms.github.io/Nostra/",
        image:"Assests/Images-M/work-4.png",
        torf:"false"
    },
    {
        id:1,
        technology:"HTML,CSS,Bootstrap,Javascript,Jquery",
        demo:"https://mathi-ms.github.io/Nostra/",
        image:"Assests/Images-M/work-3.png",
        torf:"true"
    },
    {
        id:2,
        technology:"HTML,CSS,Bootstrap,Javascript,Jquery",
        demo:"https://mathi-ms.github.io/Nostra/",
        image:"Assests/Images-M/work-4.png",
        torf:"false"
    },
]



worklist.forEach((data)=>{
    var works = document.getElementById("works")
    var box = document.createElement("div")
    box.classList.add("workbox")
    var boximg = document.createElement("div")
    boximg.classList.add("workboximg")
    boximg.innerHTML=`<img src=${data.image} /> <p class="onprogress ${data.torf}">on progress</p>`
    var boxcontent = document.createElement("div")
    boxcontent.classList.add("workboxcontent")
    boxcontent.innerHTML=`<p>Technologies : ${data.technology}</p>
                            <p>Live Demo : <a href="${data.demo}" target="_blank" title="link">${data.demo}</a></p>`
    box.appendChild(boximg)
    box.appendChild(boxcontent)
    works.appendChild(box)
})



