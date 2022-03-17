    // We'll pre-populate this array with a couple objects just so it's not 
    // undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
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
    }]
    
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


    let input = document.getElementById("number")
    
    const chooseid = () => {
         if (input >= 15 || input <= 0 || input === null){
            return ;
        }
    }    


     
   result = []

   function getarray(){
    for (let id of arrayOfTodos) {
        if (id.userId = 14) {
           this.result.push(id); 
        } return result
    }
   }
    console.log(result) 
    
   

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



    //     function userid() {
        //     const arrayuserid = arrayOfTodos.filter(array => ({
        //         userid: array.userId,
        //         id: array.id,
        //         title: array.title,
        //         completed: array.completed
        //     }))
        //     console.log(arrayuserid);
        //     let li = document.createElement('li')
        //     var list = document.createTextNode(obj.arrayOfTodos)
        //     li.appendChild(list)
        //     ol.appendChild(li)
        // }
        

         // const userid = arrayuserid.map( id => {
    //     return  })

    // const list = () => {
    //     document.getElementById("todo-list").innerHTML = arrayOfTodos1
    // }

    // const listcompleted = arrayOfTodos.filter( array => ({
    //     if array.completed === 'true' {
    //         return completed
    //     }
    // }) )