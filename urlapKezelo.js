import { init } from "./main.js"


export function sorBeszur(lista) {
    const submitELEM =$("#submit")
    submitELEM.on("click",function (event) {
        event.preventDefault()
        const adat={
            nev:$("#nev").val(),
            kor:$("#kor").val(),
            nem:$("input[name='nem']:checked").val()==="ferfi"? true : false,
        }
        console.log($(".valid-feedback").eq(0).css("display"))
        if ($(".valid-feedback").eq(0).css("display") === "block"&& $(".valid-feedback").eq(1).css("display"))

        lista.push(adat)
        console.log(lista)
        init(lista)
    })
    
}