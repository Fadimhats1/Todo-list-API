import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Body from './component/body'
import Navbar from './component/navbar'
import ModalContext from './utils/modalContext'
import UtilsAPI, { URL_API } from './utils/utils'
import axios from 'axios'


const App = () => {
  const [todo, setTodo] = useState({ /* 1 STATE BUAT 1 JENIS FORM */
    id: -1,
    title: '',
    desc: '',
    isDone: false,
  });
  const [showTodo, setShowTodo] = useState({
    id: -1,
    title: '',
    desc: '',
    isDone: false,
  })
  const [todoList, setTodoList] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false)
  const valueAndFunctionPass = {
    todoList: todoList,
    todo: todo,
    isUpdate: isUpdate,
    functions: {
      liveSearchHandle: liveSearchHandle,
      dataToShowHandle: dataToShowHandle,
      todoCheck: todoCheck,
      removeHandle: removeHandle,
      updateHandle: isUpdateHandle,
      resetTodo: resetTodo,
      changeInputHandle: changeInputHandle,
      submitHandle: submitHandle,
    }
  }
  const functionsForModal = {
    editHandle: editHandle,
    removeHandle: removeHandle,
  }

  function resetTodo() {
    let todoDataDefault = {
      id: -1,
      title: '',
      desc: '',
      isDone: false,
    };
    setTodo(todoDataDefault);
  }

  function editHandle(dataTodo){
    isUpdateHandle();
    setTodo(dataTodo)
  }

  function dataToShowHandle(dataToShow){
    setShowTodo(dataToShow);
  }

  function isUpdateHandle() {
    setIsUpdate(!isUpdate)
  }
  function liveSearchHandle(e){
    axios.get(URL_API + '/todos?title_like=' + e.target.value).then((res)=>{
      console.log(res);
      setTodoList(res.data)
    })
  }
  function getFromAPI() {
    axios.get(URL_API + '/todos?_sort=id&_order=desc').then((res) => {
      console.log(res.data)
      setTodoList(res.data)
    });
  }

  function postToAPI() {
    axios.post(URL_API + '/todos', todo).then((res) => {
      console.log(res)
      getFromAPI();
    })
  }

  function changeInputHandle(e) {
    let newTodo = { ...todo }
    if (!isUpdate)
      newTodo["id"] = new Date().getTime();
    newTodo[e.target.name] = e.target.value;
    setTodo(newTodo);
  }

  function submitHandle() {
    if (!isUpdate)
      postToAPI()
    else
      putToAPI()
  }

  function removeHandle(id) {
    axios.delete(URL_API + '/todos/' + id).then((res) => {
      console.log(res)
      getFromAPI()
    })
  }

  function putToAPI(data = todo) {
    axios.put(URL_API + '/todos/' + data.id, data).then((res) => {
      console.log(res);
      getFromAPI()
    })
  }

  function todoCheck(dataTodoChecked){
    putToAPI(dataTodoChecked);
  }

  useEffect(() => {
    getFromAPI()
  }, [])

  return (
    <ModalContext showTodo={showTodo}  functions={functionsForModal}>
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
