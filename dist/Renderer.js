class Render{
    render(data){
            const source = $('#recipe-template').html()
            const template = Handlebars.compile(source)
            let newHTML = template({data:data})
            $("#recipes").append(newHTML)
    }
}

const SetDef=function(x){
    $(x).attr("src","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgFNOn0SafujsMopSLm5NLdWi_QBm66e2ZQhFdtVNm1KBrVt_w&usqp=CAU")
}

const Testing=function(x){
    let ingredients=$(x).siblings('.ingredients')
    console.log(ingredients.data());
}

