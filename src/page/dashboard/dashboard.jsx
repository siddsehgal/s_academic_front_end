// import { View, Text } from 'react-native'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './dashboard.module.css'
import Header from '../../Component/header/header'
import Footer from '../../Component/footer/footer'


const Dashboard = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Header />
            {/* Change */}
            <div className={styles.Dashboard}>
                <div class="container text-center" >
                    <div class="row">
                        <div class="col order-last">
                            <div class="card">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Classes</strong></li>
                                    <li onClick={() => navigate("/class1/hindi")} class="list-group-item btn btn-light">Class 1</li>
                                    <li onClick={() => navigate("/class2")} class="list-group-item btn btn-light">Class 2</li>
                                    <li onClick={() => navigate("/class3")} class="list-group-item btn btn-light">Class 3</li>
                                    <li onClick={() => navigate("/class4")} class="list-group-item btn btn-light">Class 4</li>
                                    <li onClick={() => navigate("/class5")} class="list-group-item btn btn-light">Class 5</li>
                                    <li onClick={() => navigate("/class6")} class="list-group-item btn btn-light">Class 6</li>
                                    <li onClick={() => navigate("/class7")} class="list-group-item btn btn-light">Class 7</li>
                                    <li onClick={() => navigate("/class8")} class="list-group-item btn btn-light">Class 8</li>
                                    <li onClick={() => navigate("/class9")} class="list-group-item btn btn-light">Class 9</li>
                                    <li onClick={() => navigate("/class10")} class="list-group-item btn btn-light">Class 10</li>
                                    <li onClick={() => navigate("/class11")} class="list-group-item btn btn-light">Class 11</li>
                                    <li onClick={() => navigate("/class12")} class="list-group-item btn btn-light">Class 12</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Math</strong></li>
                                    <li onClick={() => navigate("/Algebra1")} class="list-group-item btn btn-light">Algebra 1</li>
                                    <li onClick={() => navigate("/Algebra2")} class="list-group-item btn btn-light">Algebra 2</li>
                                    <li onClick={() => navigate("/Geometry")} class="list-group-item btn btn-light">Geometry</li>
                                    <li onClick={() => navigate("/Trigonometry")} class="list-group-item btn btn-light">Trigonometry</li>
                                    <li onClick={() => navigate("/Statistics&probability")} class="list-group-item btn btn-light">Statistics & probability</li>
                                    <li onClick={() => navigate("/Precalculus")} class="list-group-item btn btn-light">Precalculus</li>
                                    <li onClick={() => navigate("/Calculus")} class="list-group-item btn btn-light">Calculus</li>
                                    <li onClick={() => navigate("/Multivariablecalculus")} class="list-group-item btn btn-light">Multivariable calculus</li>
                                    <li onClick={() => navigate("/Differentialequations")} class="list-group-item btn btn-light">Differential equations</li>
                                    <li onClick={() => navigate("/Linearalgebra")} class="list-group-item btn btn-light">Linear algebra</li>
                                    <li onClick={() => navigate("/SeeallMath")} class="list-group-item btn btn-light">See all Math</li>
                                    <li class="list-group-item"><strong>Math Foundation</strong></li>
                                    <li onClick={() => navigate("/class2")} class="list-group-item btn btn-light">Class 6 Math Foundation</li>
                                    <li onClick={() => navigate("/class2")} class="list-group-item btn btn-light">Class 7 Math Foundation</li>
                                    <li onClick={() => navigate("/class2")} class="list-group-item btn btn-light">Class 8 Math Foundation</li>
                                    <li onClick={() => navigate("/class2")} class="list-group-item btn btn-light">Class 9 Math Foundation</li>
                                    <li onClick={() => navigate("/class2")} class="list-group-item btn btn-light">Class 10 Math Foundation</li>
                                    <li onClick={() => navigate("/class2")} class="list-group-item btn btn-light">Class 11 Math Foundation</li>
                                    <li onClick={() => navigate("/class2")} class="list-group-item btn btn-light">Class 11 Math Foundation</li>
                                    <li onClick={() => navigate("/class2")} class="list-group-item btn btn-light">Class 11 Math Foundation</li>
                                    <li onClick={() => navigate("/class2")} class="list-group-item btn btn-light">Class 12 Math Foundation</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col order-first">
                            <div class="card">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>NEET Science</strong></li>
                                    <li class="list-group-item  btn btn-light">Foundation Chemistry</li>
                                    <li class="list-group-item  btn btn-light"> Foundation Physics</li>
                                    <li class="list-group-item  btn btn-light"> Foundation Biology</li>
                                    <li class="list-group-item "><strong>JEE Mains Math</strong></li>
                                    <li class="list-group-item btn btn-light">Algebra 1 Foundation</li>
                                    <li class="list-group-item btn btn-light"> Algebra 2 Foundation</li>
                                    <li class="list-group-item btn btn-light"> Geometry Foundation</li>
                                    <li class="list-group-item btn btn-light">Trigonometry Foundation</li>
                                    <li class="list-group-item btn btn-light"> Statistics & probability Foundation</li>
                                    <li class="list-group-item btn btn-light"> Precalculus Foundation</li>
                                    <li class="list-group-item btn btn-light">Calculus Foundation</li>
                                    <li class="list-group-item btn btn-light"> Multivariable calculus Foundation</li>
                                    <li class="list-group-item btn btn-light"> Differential equations Foundation</li>
                                    <li class="list-group-item btn btn-light"> Linear algebra Foundation</li>
                                    <li class="list-group-item btn btn-light"> See all Math</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col order-first">
                            <div class="card">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Science</strong></li>
                                    <li class="list-group-item btn btn-light">Class 9 Physics</li>
                                    <li class="list-group-item btn btn-light"> Class 9 Chemistry</li>
                                    <li class="list-group-item btn btn-light"> Class 10 Physics</li>
                                    <li class="list-group-item btn btn-light"> Class 10 Chemistry</li>
                                    <li class="list-group-item btn btn-light"> Class 11 Physics</li>
                                    <li class="list-group-item btn btn-light"> Class 11 Chemistry</li>
                                    <li class="list-group-item btn btn-light"> Class 11 Biology</li>
                                    <li class="list-group-item btn btn-light"> Class 12 Physics</li>
                                    <li class="list-group-item btn btn-light"> Class 12 Chemistry</li>
                                    <li class="list-group-item btn btn-light"> Class 12 Bilology</li>
                                    <li class="list-group-item"><strong>Computing</strong></li>
                                    <li class="list-group-item btn btn-light"> Computer Programming</li>
                                    <li class="list-group-item btn btn-light"> Computer Foundation</li>
                                    <li class="list-group-item btn btn-light"> Computer Science</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard

