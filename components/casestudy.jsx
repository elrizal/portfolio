import React, {useState} from 'react';
import Layout from './layout';
import {Parallax} from 'react-parallax';

const CaseStudy = () => {
  let topImg = 'http://lorempixel.com/1000/900/abstract';
  return (
    <div>
      <Parallax className="top" bgImage={topImg} strength={500}>
        <div style={{
          height: 500
        }}>
        </div>
        </Parallax>
        <h1>Name of the case study</h1>
        <h3>Role: UX designer at company</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ratione eaque vitae, corporis magni facilis dicta veniam quos ea ipsum illum numquam dolore impedit temporibus ullam laboriosam alias et exercitationem.</p>
        <h2>The Problem:</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatum illo, doloribus ullam modi molestiae magnam veritatis harum blanditiis dolores delectus animi odit eos consequatur dolor quia sunt voluptatibus natus.</p>
        <h2>Process:</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vitae alias laudantium rerum ducimus tempora. Reprehenderit qui distinctio suscipit, asperiores doloribus sint totam provident eveniet voluptate. Dolorum qui at voluptates.</p>
        <h2>Result:</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quas atque nobis, distinctio cupiditate dicta, alias iste perferendis quis reiciendis explicabo ipsam quasi et! Ducimus sequi laboriosam explicabo numquam quasi.</p>
    </div>
  )
}
export default CaseStudy;