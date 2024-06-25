var worklist = [
    {
        id:1,
        technology:"HTML,CSS,Bootstrap,Javascript,Jquery",
        demo:"https://skilluptechbuzz.in/",
        image:"Assests/Images-M/work-3.png",
        torf:"false",
        work:"Freelance"
    },
    {
        id:9,
        technology:"HTML,CSS,Bootstrap,Javascript,Jquery",
        demo:"Private",
        image:"Assests/Images-M/work-14.png",
        torf:"false",
        work:"Intenship"
    },
    {
        id:10,
        technology:"HTML,CSS,Bootstrap,Javascript,Jquery",
        demo:"Private",
        image:"Assests/Images-M/work-15.png",
        torf:"false",
        work:"Intenship"
    },
    {
        id:11,
        technology:"HTML,CSS,Bootstrap,Javascript,Jquery",
        demo:"Private",
        image:"Assests/Images-M/work-16.png",
        torf:"false",
        work:"Intenship"
    },
    {
        id:12,
        technology:"HTML,CSS,Bootstrap,Javascript,Jquery",
        demo:"Private",
        image:"Assests/Images-M/work-17.png",
        torf:"false",
        work:"Intenship"
    },
    {
        id:2,
        technology:"HTML,CSS,Bootstrap,Javascript,Jquery",
        demo:"Private",
        image:"Assests/Images-M/work-7.png",
        torf:"false",
        work:"Intenship"
    },
    {
        id:5,
        technology:"HTML,CSS,Bootstrap,Javascript,Jquery",
        demo:"Private",
        image:"Assests/Images-M/work-10.png",
        torf:"false",
        work:"Intenship"
    },
    {
        id:6,
        technology:"HTML,CSS,Bootstrap,Javascript,Jquery",
        demo:"Private",
        image:"Assests/Images-M/work-11.png",
        torf:"false",
        work:"Intenship"
    },
    {
        id:7,
        technology:"HTML,CSS,Bootstrap,Javascript,Jquery",
        demo:"Private",
        image:"Assests/Images-M/work-12.png",
        torf:"false",
        work:"Intenship"
    },
    {
        id:3,
        technology:"HTML,CSS,Bootstrap,Javascript,Jquery",
        demo:"Private",
        image:"Assests/Images-M/work-8.png",
        torf:"false",
        work:"Intenship"
    },
    {
        id:8,
        technology:"HTML,CSS,Bootstrap,Javascript,Jquery",
        demo:"Private",
        image:"Assests/Images-M/work-13.png",
        torf:"false",
        work:"Intenship"
    },
    {
        id:13,
        technology:"HTML,CSS,Bootstrap,Javascript",
        demo:"https://mathi-ms.github.io/Rafter-Clone-Task/",
        image:"Assests/Images-M/work-19.png",
        torf:"true",
        work:"Hobby"
    },
    // {
    //     id:4,
    //     technology:"HTML,CSS,Bootstrap,Javascript,Jquery",
    //     demo:"https://mathi-ms.github.io/Nostra/",
    //     image:"Assests/Images-M/work-9.png",
    //     torf:"false"
    // },
    {
        id:14,
        technology:"HTML,CSS,Bootstrap,Javascript",
        demo:"https://mathi-ms.github.io/MERN-Mastering.hub/",
        image:"Assests/Images-M/work-20.png",
        torf:"true",
        work:"Hobby"
    },
    {
        id:15,
        technology:"HTML,CSS,Tailwind,Javascript",
        demo:"https://mathi-ms.github.io/Greenden/",
        image:"Assests/Images-M/work-21.png",
        torf:"true",
        work:"Hobby"
    },
    {
        id:16,
        technology:"HTML,CSS,Bootstrap,Javascript",
        demo:"https://mathi-ms.github.io/Sample-Portfolio/",
        image:"Assests/Images-M/work-22.png",
        torf:"false",
        work:"Hobby"
    },
    {
        id:17,
        technology:"HTML,CSS,Bootstrap,Javascript,Jquery",
        demo:"https://mathi-ms.github.io/Animate-1/",
        image:"Assests/Images-M/work-23.png",
        torf:"false",
        work:"Hobby"
    },
    {
        id:18,
        technology:"HTML,CSS",
        demo:"https://mathi-ms.github.io/Trip-Advisor/",
        image:"Assests/Images-M/work-24.png",
        torf:"true",
        work:"Hobby"
    },
    {
        id:19,
        technology:"HTML,CSS,Javascript",
        demo:"https://mathi-ms.github.io/Nostra/",
        image:"Assests/Images-M/work-25.png",
        torf:"true",
        work:"Hobby"
    },
    {
        id:20,
        technology:"HTML,CSS,Javascript,React",
        demo:"https://udemy-react-app-mathi.vercel.app",
        image:"Assests/Images-M/work-26.png",
        torf:"false",
        work:"Hobby"
    },
    {
        id:21,
        technology:"HTML,CSS,Javascript,React",
        demo:"https://actodo-kappa-one.vercel.app",
        image:"Assests/Images-M/work-27.png",
        torf:"false",
        work:"Hobby"
    },
    {
        id:22,
        technology:"HTML,CSS,Javascript,React",
        demo:"https://weather-app-theta-lovat-92.vercel.app",
        image:"Assests/Images-M/work-28.png",
        torf:"false",
        work:"Hobby"
    },
    {
        id:23,
        technology:"HTML,CSS,Javascript,React",
        demo:"https://scoopy-react.vercel.app",
        image:"Assests/Images-M/work-29.png",
        torf:"true",
        work:"Hobby"
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
    if(data.demo == "Private")(
            boxcontent.innerHTML=`<p>Technologies : ${data.technology}</p>
                            <p>Live Demo : <a href="javascript:void(0)"  title="link">${data.demo}</a></p>
                            <p>Work : ${data.work}</p>`
    )
    else{
            boxcontent.innerHTML=`<p>Technologies : ${data.technology}</p>
                            <p>Live Demo : <a href="${data.demo}" target="_blank" title="link">${data.demo}</a></p>
                            <p>Work : ${data.work}</p>`
    }
    box.appendChild(boximg)
    box.appendChild(boxcontent)
    works.appendChild(box)
})



