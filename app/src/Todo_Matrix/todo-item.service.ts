export class TodoItemService {

    get() {
        return this.todoItems;
    }
    add(todoItem)
    {
        //console.log(this.todoItems);
        this.todoItems.push(todoItem);
        //console.log(this.todoItems);
    }

    todoItems = [
        {
            name: "defect",
            ETA: "20 mins",
            category: "Work",
            isComplete:'0',
            Quadrant:'IMP_NURG'
        
        },
        {
            
            name: "Bath",
            ETA: "20 mins",
            category: "Personal,Hygience",
            isComplete:'0',
            Quadrant:'IMP_URG'

        }, {
            name: "TodoProject",
            ETA: "1 week",
            category: "Personal, Career",
            Quadrant:'IMP_NURG'
        }
    ];
}