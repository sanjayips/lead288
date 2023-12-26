import React from 'react'
import { PrimaryHeading } from '../../Globals/Globals'
import CultivationSlick from './CultivationSlick'
import { CultivationMainContainer } from './StyledCultivation'


const Cutivation = ({id}) => {
    return (
        <CultivationMainContainer id={id} >
            <PrimaryHeading>Cultivation</PrimaryHeading>
            <p className='pt-3'>Home Grow</p>
            <h3 className='pt-3'>Grow your dose privately at home</h3>
            <CultivationSlick />
        </CultivationMainContainer>
    )
}

export default Cutivation