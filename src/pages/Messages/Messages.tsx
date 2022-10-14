import React from 'react'
import Col from '../../components/Bootstrap/Col'
import ContainerFluid from '../../components/Bootstrap/ContainerFluid'
import Row from '../../components/Bootstrap/Row'

const Messages = () => {
  return (
    <section className='messages-section'>
        <ContainerFluid>
            <Row>
                <Col xl='4'>
                    <h4>Messages</h4>
                    
                </Col>
                <Col xl='8'>
                    
                </Col>
            </Row>
        </ContainerFluid>
    </section>
  )
}

export default Messages