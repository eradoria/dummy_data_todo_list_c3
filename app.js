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
        console.log(arrayOfTodos)
        let ol = document.getElementById('todo-list');
        for (let index = 0; index < arrayOfTodos.length; index++) {
            const obj = arrayOfTodos[index];
            console.log(obj);
            console.log(obj.title);

            // grab an object
            let li = document.createElement('li');
            var title = document.createTextNode(obj.title);
            li.appendChild(title); 
            ol.appendChild(li); 
        }
        // let li = document.createElement('li');
        // var title = document.createTextNode(obj.title);
        // li.appendChild(title); 
        // ol.appendChild(li); 
    }

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

    console.log(arrayOfTodos[0].userId) // => 14
    console.log(arrayOfTodos[1].userId) // => 20