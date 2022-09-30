import React from 'react'
import Excacise from '../../../Component/Excacise/Excacise'
import Footer from '../../../Component/footer/footer'
import Header from '../../../Component/header/header'
import LeftSectionCard from '../../../Component/leftSectionCard/leftSectionCard'


function ExcaciseClas1() {
  return (
    <div>
      <Header></Header>
      <LeftSectionCard
        item='Chapter'
        item1="Chapter 1"
        link1="#"
        item2="Chapter 2"
        item3="Chapter 3"
        item4="Chapter 4"
        item5="Chapter 5"
        item6="Chapter 6"
        item7="Chapter7" />
      <Excacise
        question='Lorem ipsum dolor sit amet consectetur adipisicing elit ?'
        option1=' Default checkbox'
        option2='Checked checkbox'
        option3='Default checkbox'
        option4=' Checked checkbox'
      />
      <Excacise
        question='Lorem ipsum dolor sit amet consectetur adipisicing elit ?'
        option1=' Default checkbox'
        option2='Checked checkbox'
        option3='Default checkbox'
        option4=' Checked checkbox'
      />
      <Excacise
        question='Lorem ipsum dolor sit amet consectetur adipisicing elit ?'
        option1=' Default checkbox'
        option2='Checked checkbox'
        option3='Default checkbox'
        option4=' Checked checkbox'
      />
      <Excacise
        question='Lorem ipsum dolor sit amet consectetur adipisicing elit ?'
        option1=' Default checkbox'
        option2='Checked checkbox'
        option3='Default checkbox'
        option4=' Checked checkbox'
      />
      <Footer></Footer>
    </div>
  )
}

export default ExcaciseClas1