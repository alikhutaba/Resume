import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Card from "../../Components/Card/Card";

export default function Experience() {
  return (

    <div className="section" id="Experiences" style={{ backgroundColor: "#e0e0e0" }}>
      <div className="container">

        <SectionTitle title="Experience" quotes={expQuote} quotesAuthor={expQuoteAuthor}></SectionTitle>

        <h2 style={{ color: "#ff6600", marginBottom: "30px", marginTop: "30px" }}>Career</h2>

        <Card title="Hackathon" subTitle="Participated in Hasoub Campus Startup Cup." date="Oct.2020 – Dec.2020" location="Online" details={hackDetails} detailsType="li" myVideoId="qqhczg75bdI"></Card>

        <Card title="Outstanding program" subTitle="“Smart Up” program of outstanding student - Afeka College." date="Oct.2016 – Jun.2018" location="Tel-Aviv" details={smarUpDetails} detailsType="li" myVideoId="xCZ-_0Aayvk"></Card>

        <Card title="Teaching Assistant" subTitle="Teaching Assistant at Afeka College of Engineering." date="Oct.2016 – Jun.2018" location="Tel-Aviv" details={teachingAssistantDetails} detailsType="li" myVideoId=""></Card>

        <Card title="Coordinator" subTitle="Coordinator of the Arab students at Afeka College." date="Aug.2016 – October.2019" location="Tel-Aviv" details={coordinatorDetails} detailsType="li" myVideoId=""></Card>

        <hr></hr>
        <h2 style={{ color: "#ff6600", marginBottom: "30px", marginTop: "30px" }}>Education</h2>

        <Card title="Afeka College" subTitle="B.Sc. Software Engineering." date="Oct.2015 – Jun.2021" location="Tel-Aviv" details={afekaDetails} detailsType="p" myVideoId=""></Card>

        <Card title="Ibn khaldun" subTitle="“High School Diploma." date="Oct.2010 – Jun.2013" location="Arraba" details={schoolDetails} detailsType="p" myVideoId=""></Card>

      </div>
    </div >
  );
}




const expQuote = "\"Experience is one thing you can't get for nothing.\""
const expQuoteAuthor = "Paulo Coelho."

const hackDetails = [
  "We won second place."
  , "Built an app for meditation and relaxing."
]

const smarUpDetails = [
  "Designed and constructed a driving simulator adapted for users with CP to make physical therapy more effective and enjoyable."
  , "Conducted research about “Baras Paradox” demonstration on high voltage electricity grid."
  , " Went through management, leadership, entrepreneurship, and scientific writing workshops and Lectures in various engineer fields such as electricity and machinery."
  , "The program required: Thinking out of the box, self-learning abilities, teamwork, ability to work under pressure, high motivation and responsibility."
]

const schoolDetails = [
  "Majored in Biology and Chemistry, five-unit level."
  , "Mathematics and English – five-unit level."
]

const afekaDetails = [
  " GPA: 85, Excelling student with a yearly certificate of excellence."
  , "Recommendations will be provided upon request."
  , "Top Courses: Data Structures, Algorithms, Machine learning, OOP, Operating System, Linux, Database Systems, Parallel Computation."

]

const teachingAssistantDetails = [
  "Led weekly office hours to 15 students: training OOP, homework assistance."
  , "Checked and graded data structures homework for 100+ students."
]

const coordinatorDetails = [
  "Helped Arab students at Afeka College with their various needs."
  , "Multiplicated the number of Arabs students per year and reduced the failingpercentage of first year students."
]