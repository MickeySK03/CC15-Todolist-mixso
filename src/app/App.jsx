// Dependencies
import './App.scss';
import { FaInbox, FaCalendar, FaCalendarAlt, FaChevronDown} from 'react-icons/fa';
import Header from '../component/Header';
import ListItem from '../component/ListItem';
import List from '../component/Lists';
import TodoHeader from '../component/Todo/TodoHeader';
import TodoCreate from '../component/Todo/TodoCreate';
import TodoList from '../component/Todo/TodoList';

function App() {

  const generalLists = [{id:1, text:"Inbox", icon:<FaInbox/>, active: true},
  {id:2, text:"Today", icon:<FaCalendar/>, active: false},
  {id:3, text:"Next 7 days", icon:<FaCalendarAlt/>, active: false}]

  const projectLists =[
    {id:4, text:"Project-A", icon: <FaInbox/>, active: true},
    {id:5, text:"Project-B", icon: <FaInbox/>, active: false}
  ]
  return (
    <div className='todo'>
      <div className='todo__header'>
        <Header />
      </div>
      <div className='todo__sidebar'>
        <aside className='sidebar'>
          <section className='sidebar__category'>
            <List data ={generalLists} /> {/* //##วิธี3 ###*/}
            {/* <ul className='list'>
              {generalLists.map((obj)=> (
              <ListItem 
              key={obj.id}
              text={obj.text}
              icon={obj.icon}
              active={obj.active}
              />))} */}         
              {/* //####วิธี2######*/}
              {/* <ListItem text='Inbox' icon={<FaInbox />} active={true} />
              <ListItem text='Today' icon={<FaCalendar />} active={false} />
              <ListItem text='Next 7 Days' icon={<FaCalendarAlt />} active={false} /> */}
              {/* //#####วิธีแรก###### */}
            {/* </ul> */}
          </section>
          <section className='sidebar__category'>
            <div className='accordion'>
              {/* Toggle */}
              <div className='accordion__toggle'>
                <li className='accordion__item'>
                  <FaChevronDown className='accordion__item__icon' />
                  <p className='accordion__item__text'>Projects</p>
                </li>
              </div>
              {/* Lists */}
              <ul className='lists'>
                {projectLists.map((obj)=>(<ListItem
                key={obj.id} {...obj} // วิธี1 สามารถย่อรูปแบบobj.key ได้
                //obj.key = obj.id;  // วิธีที่2
                //delete obj.id;
                //return <ListItem {...obj} />;
                />))}
              </ul>
            </div>
          </section>
        </aside>
      </div>
      <div className='todo__content'>
        <main className='todo__container'>
            <TodoHeader/>
            <TodoCreate/>
            <TodoList/>
        </main>
        </div>
    </div>
  );
}

export default App;

//Challenge : Refactor
//  - ให้ 2 section render UI ที่...
//   -OptionA (2/5): render ต่างกัน <Lists/> กับ <Accordion />
//   -OptionB (4/5): render UI เดียวกัน เช่น <Lists />
//   -OptionC (5/5): render <Lists/> ภายใต้ <Accordion> <Lists/><Accordion/>
  // ใช้ props.children