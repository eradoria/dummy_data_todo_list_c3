    // We'll pre-populate this array with a couple objects just so it's not 
    // undefined if your internet connection isn't working properly.

    let arrayOfTodos = []
    //     {
    //     "userId": 14,
    //     "id": 1,
    //     "title": "delectus aut autem",
    //     "completed": false
    // },
    // {
    //     "userId": 20,
    //     "id": 2,
    //     "title": "delectus aut autem",
    //     "completed": false
    // }]
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
        // console.log(arrayOfTodos)
        let ol = document.getElementById('todo-list');
        for (let index = 0; index < arrayOfTodos.length; index++) {
            const obj = arrayOfTodos[index];
            // console.log(obj);
            // console.log(obj.title);

            // grab an object
            let li = document.createElement('li');
            var title = document.createTextNode(obj.title);
            li.appendChild(title); 
            ol.appendChild(li); 
        }
    }


    let input = document.getElementById(parseInt("number"))
    
    // const chooseid = () => {
    //      if (input >= 10 || input <= 0 || input === null){
    //         return ;
    //     }
    // }    


     
//    result = []
//    var iterator = result.values()


   function getarray(){
    let userId = document.getElementById("number").value;
    let filteredArrayOfToDos = arrayOfTodos.filter(todo => todo.userId == userId);
    // removeelements();
        let ol = document.getElementById('todo-list');
        for (let index = 0; index < filteredArrayOfToDos.length; index++) {
            const obj = filteredArrayOfToDos[index];
            // console.log(obj);
            // console.log(obj.title);

            // grab an object
            let li = document.createElement('li');
            var title = document.createTextNode(obj.title);
            li.appendChild(title); 
            ol.appendChild(li); 
    }}

  
    function removeelements(){
        var ol = document.getElementById('todo-list');
        ol.removeChild(ol.childNodes[0])
    }
    
    function removelist(){
        const ol = document.getElementById('todo-list')
        const parent = ol.parentNode 
        parent.removeChild(ol)
    }
    
    function completedtask(){
        let filteredArrayOfToDos = arrayOfTodos.filter(task => task.completed == true);
        // removeelements();
            let ol = document.getElementById('todo-list');
            for (let index = 0; index < filteredArrayOfToDos.length; index++) {
                const obj = filteredArrayOfToDos[index];
                // console.log(obj);
                // console.log(obj.title);
    
                // grab an object
                let li = document.createElement('li');
                var title = document.createTextNode(obj.title);
                li.appendChild(title); 
                ol.appendChild(li); 
        }}


        function uncompletedtask(){
            let filteredArrayOfToDos = arrayOfTodos.filter(task => task.completed == false);
            // removeelements();
                let ol = document.getElementById('todo-list');
                for (let index = 0; index < filteredArrayOfToDos.length; index++) {
                    const obj = filteredArrayOfToDos[index];
                    // console.log(obj);
                    // console.log(obj.title);
        
                    // grab an object
                    let li = document.createElement('li');
                    var title = document.createTextNode(obj.title);
                    li.appendChild(title); 
                    ol.appendChild(li); 
            }}


   

    const arrayOfTodos1 = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }
    ]

    // console.log(arrayOfTodos[0].userId) // => 14
    // console.log(arrayOfTodos[1].userId) // => 20     

    


//     const allListElements = document.querySelectorAll("li")
// .remove()



    // for (id of arrayOfTodos) {
    //     if (id.userId === userId){
    //     result.push(id)
    //        }
    //      }