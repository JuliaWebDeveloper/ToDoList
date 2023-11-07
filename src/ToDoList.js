import { Component } from 'react';

export class ToDoList extends Component {
    //Состояния
    state = {
        nameUser: prompt('What is your name?'), // чтобы рендерилось 1 раз в index.js убрала тег <React.StrictMode>
        userInput: '',
        todoList: []
    }
   //функция изменения события и записывания в userInput этого события
   onChangeEvent(e) {
    this.setState ({userInput: e})
   }
   //функция отправки формы
   onFormSubmit(e) {
    e.preventDefault(); // не перезагрузка страницы
   }


   //функция добавления элемента
   addItem(input) {
    //при не заполнении поля ввода, выводит предупреждение
    if (input === '') {
        alert ('Please enter an item')
    }
    //создаем переменную, значения которой будет помещаться в массив
    let listArray = this.state.todoList;
    //добавление значения переменной в массив
    listArray.push(input);
    //обновление состояния: в массиве значения переменной, в поле ввода- пусто
    this.setState({todoList: listArray, userInput: ''})
   }


   //функция удаления элементов списка
   deleteItem() {
    //создаем переменную, значения которой будет помещаться в массив
    let listArray = this.state.todoList;
    //очищаем массив
    listArray = [];
    //обновление состояния: в массиве значения переменной,т.е. пусто
    this.setState({todoList: listArray})
   }


   //функция зачеркивания элементов списка
   crossedWord(event) {
    //при возникновении события, константе присваивается текущее значение элемента
    const li = event.target;
    // константе меняется класс
    li.classList.toggle('crossed');
   }


   //рендеринг. 
   //Каждому элементу массива присваивается индекс и при срабатывании функции клика по определенному элементу, именно для него срабатывает функция зачеркивания
   //При нажатии на кнопки Add (добавить) выполняется функция добаления значения введенного пользователем в поле ввода формы.
   //При изменении значения в поле ввода, записывает это значение в userInput для дальнейшего добавления в писок при нажатии кнопки добавить
   //При нажатии на кнопку Delete (удалить)  выполняется функция удаления значения списка введенного пользователем
   render() {
        return (
            <form onSubmit={this.onFormSubmit}>
            <div className='containerNext'>
            <div className='containerOne'>
                 <h1> Good Morning, {this.state.nameUser}!</h1>  
                <h2> What's your plan for today?</h2>
                <ul>
                    {this.state.todoList.map((item, index) => (   
                        <li onClick={this.crossedWord} key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className='containerTwo'>
                <button onClick={() => this.addItem(this.state.userInput)} className='btn'>Add</button>
                <input name='myList' type='text' placeholder='I want to...' 
                onChange={ (e) => {this.onChangeEvent(e.target.value)}}
                value= {this.state.userInput}/>
                <button onClick={() => this.deleteItem()} className='btn'>Delete</button>
            </div>
            </div>
            </form>
        )

    }
}