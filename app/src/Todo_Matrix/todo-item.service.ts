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
            category:'IMP_URG'
            },
        {
            
            name: "IMP BUT NOT URG",
            desc: "important but not urgent",
            category:'IMP_NURG'

        }, {
            name: "NOT IMP BUT URG",
            desc: "Not important but urgent",
            category:'NIMP_URG'
        },
        {
            name: "NOT IMP NOT URG",
            desc: "not important and not urgent",
            category:'NIMP_NURG'
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