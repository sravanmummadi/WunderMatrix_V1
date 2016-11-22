export class TodoItemService {

    get() {
        return this.todoItems;
    }
    add(todoItem)
    {
        //console.log(this.todoItems);
        this.todoItems.push(todoItem);
        console.log(this.todoItems);
    }

    getQuad() {
        return this.quadrants;
    }
    quadrants=[
        {
            name: "IMP AND URG",
            desc: "important and urgent",
            category:'URG_IMP'
            },
        {
            
            name: "IMP BUT NOT URG",
            desc: "important but not urgent",
            category:'NURG_IMP'

        }, {
            name: "NOT IMP BUT URG",
            desc: "Not important but urgent",
            category:'URG_NIMP'
        },
        {
            name: "NOT IMP NOT URG",
            desc: "not important and not urgent",
            category:'NURG_NIMP'
        }
    ];

    todoItems = [
        {
            name: "defect",
            category: "URG_IMP",
            
            },
        {
            
            name: "angular",
            category: "NURG_IMP"

        }, {
            name: "Curry",
            category: "URG_NIMP"
        },
        {
            name: "facebook",
            category: "NURG_NIMP"
        }
    ];
}