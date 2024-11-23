/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState,useEffect } from 'react';  // eslint-disable-line no-unused-vars
import Typed from 'typed.js';
import next from '../../assets/img/notice/next.png';
import { Link } from 'react-router-dom'
import logo from '../../assets/img/weeklyMission/logoPink.png'

import Dbox from '../../assets/img/weeklyMission/Dialog-Box.png'


// 아래로 샤샤 얼굴 모음집 

import sparkle from '../../assets/img/weeklyMission/Shasha-sparkling.gif'
import sq from '../../assets/img/weeklyMission/babysq.png'
import angry from '../../assets/img/weeklyMission/ShashaAngry.gif'
import talking from '../../assets/img/weeklyMission/ShashaTalk.gif'
import blinking from '../../assets/img/weeklyMission/ShashaBlink.gif'
import angrystop from '../../assets/img/weeklyMission/stopAngry.png'
import EPOne2 from '../../assets/img/weeklyMission/EP2Intro.png'
import EPOne3 from '../../assets/img/weeklyMission/EP3.png'


//샤샤 모음집 끝 



function Dialog() {

  let [count, setCount] = useState(0)
  let [Text, setText] = useState([  // eslint-disable-line no-unused-vars

    'EP 3. 샤샤와의 재회',
    '망할.....왜 여전하냐는 것이야.',
    '...달라진 게 하나 없어 망할 자식들.',
    '... ...',
    '오랜만에 왔으면 재깍 얼굴이라도 비출 것이지. 뭘 그렇게 섰냐는 게야? ',
    '...',
    '너희가 어디에 있든 나한텐 그냥 다 똑같은 어린 인간이란 것이야.',
    '내 땅에 왔으면 인사를 하라는 것이야!'

  ]);
  

  let [image, setImage] = useState([  // eslint-disable-line no-unused-vars
 
  EPOne3,
  talking,//2번째 문장의 얼굴 
  talking,//2번째 문장의 얼굴 
  blinking, //7
  angry,//10번째 문장의 얼굴 
  angrystop,
  talking,
  angry


  ]);

  
  const el = React.useRef(null);


  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [Text[count]],
      typeSpeed: 40,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();

    };
  }, [count]);

  return (

        <div>

          

 <img className=' w-12/12 min-h-screen bg-no-repeat bg-cover' src={image[count]} width="100%"  alt='이미지 로드 오류'/>

 <Link to="/notice"> <div className="absolute top-0 left-2.5 h-40 w-40 z-10 ml-2 mt-4"><img className='logoClick' src={logo} alt='이미지 로드 오류'></img></div> </Link>

  <img className=" absolute bottom-0 w-12/12 px-10  m-auto" src={Dbox} width="100%" alt='이미지 로드 오류' />
   
   
    <div className="absolute bottom-64 left-56 w-12/12 font-DUNGGUNMO text-2xl" style={{textAlign:'left', paddingLeft:"4%",paddingRight:"4%"}}><span ref={el} /></div>

    <img className="absolute bottom-16 h-16 w-16 z-10 right-48" src={next} id='next' width="30%" onClick={()=>{if(count<7){setCount(count+1)} else{setCount(0)} }}
    style={{cursor: 'pointer'}} alt='이미지 로드 오류'/>
  

  

    </div>
   
   );
}

export default Dialog;