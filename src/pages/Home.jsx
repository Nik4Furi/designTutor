import React, { useState } from 'react'
//----Css ---------------X
import '../styles/Home.Module.css'

//--------Data to fetch info about items----
import data from '../data.json'

//-----------Component to build pages----X
import Card from '../components/Card';
import FilterBtn from '../components/FilterBtn';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';


function Home() {
    const menus = [...new Set(data.map((dt) => dt.category))] //Extract the categories form data
   
    const filterData = data.filter((fdata) => fdata.category === 'softwares') //First when check our web, see the softwares which we used to help in active place

    const [items, setItems] = useState(filterData); //Can store the data for fetch
    const [cateItems, setCatItems] = useState(menus) //To prefer all the categories which is avialables 
    const [active, setActive] = useState('softwares'); //Check which button is active

    //Here we set which is show when click on th button
    const handleFillter = (category,event) => {
        const updateItem = data.filter((cate) => { return cate.category === category })
        setItems(updateItem)
        setActive(category)
    }

    return (
        <>
            {/* Main section to intro about us  */}
            <main id='Home' className="main-bg container-fluid p-0 m-0 text-light position-relative d-flex align-items-center justify-content-center flex-column" >
                <div className=" mx-auto mt-5 p-2">
                    <h1 >Learn A <span className="text-highlight">designing</span> To Design The World 🌏</h1>
                    <p className="lead">To learn the designing, beacause <strong> Creativity doesn't wait for that perfect moment. </strong> </p>
                    <a href="#Tutorials"><button className="btn btn-danger mx-auto d-block "data-aos="zoom-in"  data-aos-duration="3000">Learn designing</button></a>
                </div>
            </main>

            {/* Section for info what we are made and how we perfect others  */}
            <section className="container-fluid my-3" id='About'>
                <div className="container">
                    <div className="d-flex align-items-center w-full">

                        <div className='w-half'>
                            <h2>Love Your Creativity, Because You are a <span className="text-highlight">creator 👤</span></h2>
                            <p><span className="text-highlight">designTutor</span> is a  plateform where you learn the editing or designing concepts from basic to advanced.</p>
                            <p>Helping of these all courses made your life in the fields likes video editing, web designing, game designing, or others.</p>
                            <a href="#Contact"><button className="btn btn-danger" data-aos="zoom-in">Join Now</button></a>
                        </div>
                        <div id='hide'>
                            <img src="/img/about.jpg" alt="about_us" data-aos="fade-up-left" className='w-100 clip' data-aos-duration="3000"/>
                        </div>
                    </div>

                </div>
            </section>

            {/* Tutorials section to extract tutorials/software   */}
            <section className="container my-2" id='Tutorials'>
                <div className="d-flex align-items-center justify-content-center mx-auto flex-column">
                    <h3>Choose your favorite art, Which make your <span className="text-highlight">favorite</span> artiest</h3>
                    <p>Selecting the softwares, artiest products and others videos which you use and inspring for how create them.</p>
                </div>

                {/* Buttons to replicating softwares, artiest and their products and all  */}
                <div className="d-flex align-items-center justify-content-around">
                    <FilterBtn handleFillter={handleFillter} category={cateItems} active={active} />
                </div>

                {/* To show all relative cards to relative buttons  */}
                <div className="container-fluid my-2">
                    <div className='row'>
                        {items && items.map((item) => {
                            return <Card key={item.img} title={item.title} desc={item.description.substr(0,200)} img={item.img} />
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials section where we see the our students learner reviews  */}
            <section id="Testimonials" className="container my-2">
                <h2 className='text-center'>Read Our <span className="text-highlight">Testimonials</span> of the learners</h2>
                <p className="lead text-center">Testimonials can help or simulate that How they can learn? and going on under the <span className="text-highlight">mentors 👤</span></p>
                <div className="container-fluid">
                    <div className="row">

                        {/* Textimonials Component  */}
                        <Testimonials name="Raj" review="Hello everyone, I am Raj, When my friend tell about this plateform, then I am visiting here, After spending my time, and money. I realize that This worth it." />

                        <Testimonials name="John" review="I am profession web develope, Basically I know the what the use of the editing softwares, techniques. But when I am enroll this courses I realize that this help it to peek my skills" />

                        <Testimonials name="Rashmika" review="I am enthusiast about the web desgining so that I am completing my courses, But this courses are never compares with others courses contents." />

                    </div>
                </div>
            </section>

            {/* Contact Section for contact to more info about us  */}
            <section id='Contact' className="container my-3">
                <h2 className="text-center">Contact With Us</h2>
                <p className='lead text-center'>If any query, just like how to join, reviews and mentors and others concern!</p>

                {/* Contact Component  */}
                <Contact />
            </section>
        </>
    )
}

export default Home
