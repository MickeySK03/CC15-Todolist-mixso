import styles from './TodoCreate.module.scss';

import React from 'react'

function TodoCreate() {
  return (
    <div className={styles.todo__create}>
        <span className={styles.todo__create__button}>+</span>
        <h3 className={styles.todo__create__text}>Add Task</h3>
      </div>
  )
}

export default TodoCreate;


//rfce ใช้คำสั่งimport function สำเร็จรูป