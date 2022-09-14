import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Body from './component/body'
import Navbar from './component/navbar'
import ModalContext from './utils/modalContext'
import UtilsAPI, { URL_API } from './utils/utils'
import axios from 'axios'


const App = () => {
  const [todo, setTodo] = useState({
    id: -1,
    title: '',
    desc: '',
  });
  const [todoList, setTodoList] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false)
  const valueAndFunctionPass = {
    todoList: todoList,
    todo: todo,
    functions:{
      removeHandle: removeHandle,
      isUpdate: isUpdate,
      resetTodo: resetTodo,
      changeInputHandle: changeInputHandle,
      submitHandle: submitHandle,
    }
  }

  function resetTodo(){
    let todoDataDefault = {
      id: -1,
      title: '',
      desc: '',
    };
    setTodo(todoDataDefault);
  }

  function getFromAPI() {
    axios.get(URL_API + '/todos').then((res) => {
      console.log(res.data)
      setTodoList(res.data)
    });
  }

  function postToAPI(){
    axios.post(URL_API + '/todos', todo).then((res)=>{
      console.log(res)
      getFromAPI();
    })
  }

  function changeInputHandle(e) {
    let newTodo = { ...todo }
    if (!isUpdate)
      newTodo["id"] = new Date().getTime();
    newTodo[e.target.name] = e.target.value;
    console.log(todo);
    setTodo(newTodo);
  }

  function submitHandle(id){
    if(!isUpdate)
      postToAPI()
    else
      putToAPI(id)
  }

  function removeHandle(id){
    axios.delete(URL_API + '/todos/' + id).then((res) => {
      console.log(res)
      getFromAPI()
    })
  }

  function putToAPI(id){
    axios.put(URL_API + '/todos/' + id, todo).then((res)=>{
      console.log(res);
      getFromAPI()
    })
  }

  useEffect(() => {
    getFromAPI()
  }, [])

  return (
    <ModalContext>
      <UtilsAPI values={valueAndFunctionPass}>
        <div className="h-screen max-h-screen overflow-hidden font-dongle">
          <Navbar />
          <Body />
        </div>
      </UtilsAPI>
    </ModalContext>
  )
}

export default App
