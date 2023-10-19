import React from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import Pic from './propic.png'
import { useState } from 'react'
import { Button, Card, CardBody, CardFooter, Col, Container, Row, Table } from 'reactstrap'
const ViewJudgeProfile = ({ user, updateProfileClick }) => {


    const [currentUser, setCurrentUser] = useState(null)
    const [login, setLogin] = useState(false)
    useEffect(() => {
        // setCurrentUser(getCurrentUserDetail())
        // setLogin(isLoggedIn())
    }, [])
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
                                {'Anonymous'}
                            </td>
                        </tr>
                        <tr>
                            <td >
                             EMAIL
                            </td>
                            <td>
                                {'user@gmail.com'}
                            </td>
                        </tr>
                        <tr>
                            <td >
                                PHONE
                            </td>
                            <td>
                                98292892892
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
                                {'Web Developer'}
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

export default ViewJudgeProfile