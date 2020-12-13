import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var front_skills = this.props.data.front_skills.map(function(front_skills){
        var className = 'bar-expand '+front_skills.name.toLowerCase();
        return <li key={front_skills.name}><span style={{width:front_skills.level}}className={className}></span><em>{front_skills.name}</em></li>
      })
      var back_skills = this.props.data.back_skills.map(function(back_skills){
        var className = 'bar-expand '+back_skills.name.toLowerCase();
        return <li key={back_skills.name}><span style={{width:back_skills.level}}className={className}></span><em>{back_skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>front-end Skills</span></h1>
         </div>

         <div className="nine columns main-col">

          
				<div className="bars">
				   <ul className="skills">
           
					  {front_skills}
					</ul>
				</div>
			</div>
      </div>

      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Back-end Skills</span></h1>
         </div>

         <div className="nine columns main-col">

          
				<div className="bars">
				   <ul className="skills">
           
					  {back_skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
