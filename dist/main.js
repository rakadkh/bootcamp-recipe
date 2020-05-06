const fetch = function () {
    let input = $("#ingredient-input").val()
    console.log(input);
    
    $.get(`/recipes/${input}`, function (recipes) {
        if(recipes!=null){
            const renderer=new Render()
            renderer.render(recipes)
        }
    })
}
