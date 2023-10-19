import React from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import Neeraj from './Neeraj Chopra.jpeg'
import Pic from './propic.jpg'
import { useState } from 'react'
import { Button, Card, CardBody, CardFooter, Col, Container, Row, Table } from 'reactstrap'
const ViewUserProfile = ({ user, updateProfileClick }) => {


    const [currentUser, setCurrentUser] = useState(null)
    const [login, setLogin] = useState(false)
    useEffect(() => {
        // setCurrentUser(getCurrentUserDetail())
        // setLogin(isLoggedIn())
    }, [])
    const userData = JSON.parse(localStorage.getItem('user'));
    return (
        <Card className='mt-2 border-0 rounded-0 shadow-sm'>
            <CardBody>
                <h3 className='text-uppercase'>user Information</h3>

                <Container className='text-center'>
                    <img style={{ maxWidth: '200px', maxHeight: '200px' }} src={Pic} alt="user profile picture" className='img-fluid  rounded' />
                </Container>
                <Table responsive striped hover bordered={true} className='text-center mt-5'>
                    <tbody>
                        {/* <tr>
                            <td >
                                LCWDBlLOGS ID
                            </td>
                            <td>
                            {'Team-5'}
                            </td>
                        </tr> */}
                        <tr>
                            <td >
                                NAME
                            </td>
                            <td>
                                {userData.data.name}
                            </td>
                        </tr>
                        <tr>
                            <td >
                             EMAIL
                            </td>
                            <td>
                                {userData.data.email}
                            </td>
                        </tr>
                        <tr>
                            <td >
                                Idea Name
                            </td>
                            <td>
                                N/A
                            </td>

                        </tr>
                        <tr>
                            <td>
                                ROLE
                            </td>
                            <td>
                                {/* {user.roles.map((role) => {
                                    return (
                                        <div key={role.id}>{role.name}</div>
                                    )
                                })} */}
                                {userData.data.role}
                            </td>
                        </tr>
                    </tbody>
                </Table>

                {/* {currentUser ? (currentUser.id == user.id) ? ( */}
                    <CardFooter className='text-center'>
                        <Link to="/changepass" className='btn btn-success'>Update Profile</Link>
                        {/* <Button onClick={updateProfileClick} color='warning' >Update Profile</Button> */}
                    </CardFooter>
                {/* ) : '' : ''} */}

            </CardBody>
        </Card>

    )
}

export default ViewUserProfile